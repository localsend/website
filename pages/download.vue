<template>
  <SecondaryLayout :sub-title="t('download.title')">
    <template v-slot:tabs>
      <!-- OS Buttons -->
      <div class="mt-8 flex flex-wrap justify-center dark:text-gray-300">
        <AppButton
          v-for="os in OS"
          :key="os"
          class="mx-2 mb-4"
          @click="setOS(os)"
          :dark="selectedOS !== os"
        >
          {{ os }}
        </AppButton>
      </div>
    </template>

    <template v-slot:content>
      <h3 class="text-center text-2xl dark:text-white">
        {{ t("download.subTitle", { os: selectedOS }) }}
      </h3>

      <div
        v-if="selectedOS"
        class="mt-4 grid grid-cols-12 gap-4 dark:text-gray-300"
      >
        <!-- App Stores -->
        <div
          class="col-span-12 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:col-span-4"
          v-if="downloadMetadata[selectedOS].stores.length !== 0"
        >
          <h3 class="text-xl font-bold dark:text-white">
            {{ t("download.appStores") }}
          </h3>
          <p class="dark:text-gray-400">
            {{ t("download.appStoresDescription") }}
          </p>

          <div
            v-for="(store, index) in downloadMetadata[selectedOS].stores"
            :key="index"
            class="mt-4"
          >
            <div v-html="store" class="inline-block"></div>
          </div>
        </div>

        <!-- Binaries -->
        <div
          class="col-span-12 rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:col-span-4"
          v-if="downloadMetadata[selectedOS].binaries.length !== 0"
        >
          <h3 class="text-xl font-bold dark:text-white">
            {{ t("download.binaries") }}
          </h3>
          <p class="mb-4 dark:text-gray-400">
            {{ t("download.binariesDescription") }}
          </p>

          <div
            v-for="binary in downloadMetadata[selectedOS].binaries"
            :key="binary.name"
            class="mt-2"
          >
            <TextButton
              :href="binary.url"
              icon="material-symbols:download"
              class="dark:text-gray-300"
            >
              {{ binary.name }}
            </TextButton>
          </div>

          <TextButton
            href="https://github.com/localsend/localsend/releases"
            icon="material-symbols:history"
            class="mt-2 dark:text-gray-300"
          >
            {{ t("download.allReleases") }}
          </TextButton>
        </div>

        <!-- Package Managers -->
        <div
          class="col-span-12 rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
          :class="
            downloadMetadata[selectedOS].stores.length !== 0
              ? 'md:col-span-4'
              : 'md:col-span-8'
          "
          v-if="downloadMetadata[selectedOS].packageManagers.length !== 0"
        >
          <h3 class="text-xl font-bold dark:text-white">
            {{ t("download.packageManagers") }}
          </h3>
          <p class="dark:text-gray-400">
            {{ t("download.packageManagersDescription") }}
          </p>

          <div
            v-for="packageManager in downloadMetadata[selectedOS]
              .packageManagers"
            :key="packageManager.name"
            class="mt-4"
          >
            <b class="dark:text-white">{{ packageManager.name }}:</b>
            <div
              class="mt-2 rounded-lg bg-gray-200 p-2 text-sm dark:bg-gray-700 dark:text-gray-300"
            >
              <div class="relative">
                <code>
                  <span
                    v-for="(command, index) in packageManager.commands"
                    :key="index"
                    class="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                    @click="() => copyToClipboard(command)"
                  >
                  <span class="text-gray-400 dark:text-gray-500 select-none">
                    &dollar; </span>{{ command }}<br />
                  </span>
                  <button @click="copyToClipboard(packageManager.commands)" class="absolute top-0 right-0 text-gray-400 hover:text-gray-700 dark:hover:text-white">
                    <Icon name="i-lucide-copy" class="w-5 h-5" />
                  </button>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="height: 300px"></div>

      <!-- Snackbar -->
      <div
        class="absolute bottom-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-teal-950 px-4 py-2 text-white transition-opacity"
        :class="copyToClipboardSnackbar ? 'opacity-100' : 'hidden'"
      >
        {{ t("download.copiedToClipboard") }}
      </div>
    </template>
  </SecondaryLayout>
</template>

<script setup lang="ts">
import TextButton from "~/components/TextButton.vue";
import SecondaryLayout from "~/components/layout/SecondaryLayout.vue";
import {requestGithubAssets} from "~/utils/requestGithubAssets";

definePageMeta({
  title: "download.seo.title",
  description: "download.seo.description",
});

const { t, locale } = useI18n();

enum OS {
  windows = "Windows",
  macos = "macOS",
  linux = "Linux",
  android = "Android",
  ios = "iOS",
}

function detectOS(): OS {
  const userAgent = navigator.userAgent;
  const substrings = ["Win", "Macintosh", "X11", "Android", "iP"];
  const idx = substrings.findIndex((s) => userAgent.includes(s));
  return idx !== -1 ? Object.values(OS)[idx] : OS.windows;
}

const selectedOS = ref<OS | null>(null);

interface PackageManager {
  name: string;
  commands: string[];
}

interface Binaries {
  name: string;
  url: string;
}

interface Download {
  stores: string[];
  binaries: Binaries[];
  packageManagers: PackageManager[];
}

const appleStore = `<a href="https://apps.apple.com/us/app/localsend/id1661733229">
    <img alt="Download on the App Store" src="${
      new URL("~/assets/img/badges/apple-store-badge.svg", import.meta.url).href
    }" style="height: 64px">
</a>`;

const nix = {
  name: "Nix",
  commands: [
    "# Edit /etc/nixos/configuration.nix",
    "programs.localsend.enable = true;",
    "# Then run",
    "sudo nixos-rebuild switch"
  ],
};

const assetsMap: Ref<{ [key: string]: string }> = ref({});
const fallbackUrl = "https://github.com/localsend/localsend/releases";

const downloadMetadata = computed<Record<OS, Download>>(() => {
  const downloadUrl = (extension: string) => {
    const assetUrl = assetsMap.value[extension];
    if (assetUrl) {
      if (locale.value === 'zh-CN') {
        // GitHub is partly blocked in China, so we use a mirror for the download.
        // Ref: https://github.com/localsend/localsend/issues/2250
        // https://github.com/localsend/localsend/releases/download/v1.16.1/LocalSend-1.16.1-linux-x86-64.deb
        // https://d.localsend.org/LocalSend-1.16.1-linux-x86-64.deb
        const fileName = assetUrl.split('/').pop();
        return `https://d.localsend.org/${fileName}`;
      }
      return assetUrl;
    }
    return fallbackUrl;
  };

  return {
    [OS.windows]: {
      stores: [],
      binaries: [
        {
          name: "EXE",
          url: downloadUrl("exe"),
        },
        {
          name: t("download.zip"),
          url: downloadUrl("zip"),
        },
      ],
      packageManagers: [
        {
          name: "Winget",
          commands: ["winget install localsend"],
        },
        {
          name: "Chocolatey",
          commands: ["choco install localsend"],
        },
        {
          name: "Scoop",
          commands: ["scoop bucket add extras", "scoop install localsend"],
        },
      ],
    },
    [OS.macos]: {
      stores: [appleStore],
      binaries: [
        {
          name: "DMG",
          url: downloadUrl("dmg"),
        },
      ],
      packageManagers: [
        {
          name: "Homebrew",
          commands: ["brew install --cask localsend"],
        },
        nix,
      ],
    },
    [OS.linux]: {
      stores: [],
      binaries: [
        {
          name: "TAR",
          url: downloadUrl("gz"),
        },
        {
          name: "DEB",
          url: downloadUrl("deb"),
        },
        {
          name: "AppImage",
          url: downloadUrl("AppImage"),
        },
      ],
      packageManagers: [
        {
          name: "Flathub",
          commands: [
            "flatpak install flathub org.localsend.localsend_app",
            "flatpak run org.localsend.localsend_app",
          ],
        },
        nix,
        {
          name: "Snap",
          commands: ["sudo snap install localsend"],
        },
        {
          name: "AUR",
          commands: ["yay -S localsend-bin"],
        },
      ],
    },
    [OS.android]: {
      stores: [
        `<a href='https://play.google.com/store/apps/details?id=org.localsend.localsend_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <img alt='Get it on Google Play'
               src="${
                 new URL(
                   "~/assets/img/badges/google-play-badge.svg",
                   import.meta.url
                 ).href
               }"
               style="height: 60px"
          />
        </a>`,
        `<a href="https://f-droid.org/packages/org.localsend.localsend_app">
          <img alt="Get it on F-Droid" src="${
            new URL("~/assets/img/badges/f-droid-badge.svg", import.meta.url)
              .href
          }" style="height: 60px">
        </a>`,
        `<a href="https://www.amazon.com/dp/B0BW6MP732">
          <img alt="Get it on F-Droid" src="${
            new URL(
              "~/assets/img/badges/amazon-store-badge.svg",
              import.meta.url
            ).href
          }" style="height: 59px">
        </a>`,
      ],
      binaries: [
        {
          name: "APK",
          url: downloadUrl("apk"),
        },
      ],
      packageManagers: [],
    },
    [OS.ios]: {
      stores: [appleStore],
      binaries: [],
      packageManagers: [],
    },
  };
});

const router = useRouter();

function setOS(os: OS) {
  selectedOS.value = os;

  // set to query
  router.push({ query: { os: os.toLowerCase() } });
}

const copyToClipboardSnackbar = ref(false);

function copyToClipboard(text: string | string []) {
  const textToCopy = Array.isArray(text) ? text.join('\n') : text;
  navigator.clipboard.writeText(textToCopy);
  copyToClipboardSnackbar.value = true;
  setTimeout(() => (copyToClipboardSnackbar.value = false), 3000);
}

onMounted(async () => {
  const os = (router.currentRoute.value.query.os?.toString() ?? '').toLowerCase();
  selectedOS.value = Object.values(OS).find((o) => o.toLowerCase() === os) ?? detectOS();

  const assetsMetadata = await requestGithubAssets();
  assetsMap.value = assetsMetadata.reduce<{ [key: string]: string }>(
    (acc, asset) => {
      const key = asset.name.split(".").pop();
      if (!key) {
        // Skip assets without extension
        return acc;
      }

      if (key === "apk" && !asset.name.includes("arm64v8")) {
        // Skip APKs that are not for arm64v8 architecture
        return acc;
      }

      acc[key] = asset.browser_download_url;
      return acc;
    },
    {}
  );
});
</script>
