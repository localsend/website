<template>
  <div>
    <!-- Hero Section -->
    <UiSection size="xl" spacing="xl" align="center" class="pt-32 text-center relative overflow-hidden">
      <!-- Background -->
      <div
        class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      </div>
      <div
        class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-400 opacity-20 blur-[100px]">
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-6">
          {{ t('download.title') }}
        </h1>
        <p class="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          {{ t('download.subTitle', { os: selectedOS || 'your device' }) }}
        </p>
      </div>

      <!-- OS Selection Tabs -->
      <div class="mt-12 flex flex-wrap justify-center gap-3 relative z-20">
        <button v-for="os in OS" :key="os" @click="setOS(os)" :class="[
          'px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border',
          selectedOS === os
            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent shadow-lg scale-105'
            : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
        ]">
          <Icon :name="getOSIcon(os)" class="text-lg" />
          {{ os }}
        </button>
      </div>
    </UiSection>

    <!-- Download Content -->
    <UiSection v-if="selectedOS" size="md" spacing="lg" class="min-h-[500px]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <!-- Left Column: Direct Downloads & Stores -->
        <div class="lg:col-span-5 space-y-10">

          <!-- App Stores -->
          <div v-if="downloadMetadata[selectedOS].stores.length > 0" class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Icon name="material-symbols:shopping-bag" class="text-teal-500" />
              {{ t("download.appStores") }}
            </h3>
            <div class="flex flex-wrap gap-4">
              <div v-for="(store, index) in downloadMetadata[selectedOS].stores" :key="index" v-html="store"
                class="transition-transform hover:scale-105 origin-left"></div>
            </div>
          </div>

          <!-- Direct Binaries -->
          <div v-if="downloadMetadata[selectedOS].binaries.length > 0" class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Icon name="material-symbols:download" class="text-teal-500" />
              {{ t("download.binaries") }}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a v-for="binary in downloadMetadata[selectedOS].binaries" :key="binary.name" :href="binary.url"
                class="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-md transition-all group">
                <span class="font-medium text-gray-700 dark:text-gray-200">{{ binary.name }}</span>
                <Icon name="material-symbols:download"
                  class="text-gray-400 group-hover:text-teal-500 transition-colors" />
              </a>
            </div>

            <a href="https://github.com/localsend/localsend/releases" target="_blank"
              class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors mt-2">
              <Icon name="material-symbols:history" />
              {{ t("download.allReleases") }}
            </a>
          </div>
        </div>

        <!-- Right Column: Package Managers (Terminal Style) -->
        <div class="lg:col-span-7">
          <div v-if="downloadMetadata[selectedOS].packageManagers.length > 0" class="space-y-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Icon name="material-symbols:terminal" class="text-teal-500" />
              {{ t("download.packageManagers") }}
            </h3>

            <div class="grid gap-6">
              <div v-for="pm in downloadMetadata[selectedOS].packageManagers" :key="pm.name"
                class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#1e1e1e] shadow-xl">
                <!-- Terminal Header -->
                <div class="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span class="text-xs text-gray-400 font-mono font-bold">{{ pm.name }}</span>
                  <div class="w-10"></div> <!-- Spacer for centering -->
                </div>

                <!-- Terminal Content -->
                <div class="p-5 font-mono text-sm relative group">
                  <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button @click="copyToClipboard(pm.commands)"
                      class="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Copy to clipboard">
                      <Icon name="material-symbols:content-copy-outline" class="text-lg" />
                    </button>
                  </div>

                  <div v-for="(cmd, i) in pm.commands" :key="i" class="mb-2 last:mb-0">
                    <span class="text-gray-500 select-none mr-2">$</span>
                    <span class="text-gray-300">{{ cmd }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State for OS without Package Managers (like iOS) -->
          <div
            v-else-if="downloadMetadata[selectedOS].stores.length === 0 && downloadMetadata[selectedOS].binaries.length === 0"
            class="flex flex-col items-center justify-center h-64 text-center border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
            <Icon name="material-symbols:info-outline" class="text-4xl text-gray-400 mb-2" />
            <p class="text-gray-500">No additional download options available for {{ selectedOS }}.</p>
          </div>

          <!-- Mobile QR Code Card (When no package managers but stores exist) -->
          <div v-else
            class="h-full min-h-[400px] rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <!-- Background Pattern -->
            <div
              class="absolute inset-0 opacity-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]">
            </div>

            <div class="relative z-10 bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none mb-8">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://localsend.org/download"
                alt="QR Code" class="w-48 h-48" />
            </div>

            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 relative z-10">Scan to Install</h3>
            <p class="text-gray-500 dark:text-gray-400 max-w-xs relative z-10 leading-relaxed">
              Scan this QR code with your {{ selectedOS }} device to open the download page directly.
            </p>
          </div>
        </div>
      </div>
    </UiSection>

    <!-- Snackbar -->
    <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transform transition-all duration-300"
      :class="copyToClipboardSnackbar ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'">
      <div
        class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-2 font-medium">
        <Icon name="material-symbols:check-circle" class="text-teal-500" />
        {{ t("download.copiedToClipboard") }}
      </div>
    </div>

    <SectionCta />
  </div>
</template>

<script setup lang="ts">
import { requestGithubAssets } from "~/utils/requestGithubAssets";

definePageMeta({
  title: "download.seo.title",
  description: "download.seo.description",
});

const { t, locale } = useI18n();
const router = useRouter();

enum OS {
  windows = "Windows",
  macos = "macOS",
  linux = "Linux",
  android = "Android",
  ios = "iOS",
}

function getOSIcon(os: OS): string {
  switch (os) {
    case OS.windows: return 'mdi:microsoft-windows';
    case OS.macos: return 'mdi:apple';
    case OS.linux: return 'mdi:linux';
    case OS.android: return 'mdi:android';
    case OS.ios: return 'mdi:apple-ios';
    default: return 'material-symbols:devices';
  }
}

function detectOS(): OS {
  if (import.meta.server) return OS.windows;
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
    <img alt="Download on the App Store" src="${new URL("~/assets/img/badges/apple-store-badge.svg", import.meta.url).href
  }" style="height: 52px">
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
          name: "EXE (Installer)",
          url: downloadUrl("exe"),
        },
        {
          name: t("download.zip") + " (Portable)",
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
      ],
    },
    [OS.linux]: {
      stores: [],
      binaries: [
        {
          name: "TAR.GZ",
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
               src="${new URL(
          "~/assets/img/badges/google-play-badge.svg",
          import.meta.url
        ).href
        }"
               style="height: 52px"
          />
        </a>`,
        `<a href="https://f-droid.org/packages/org.localsend.localsend_app">
          <img alt="Get it on F-Droid" src="${new URL("~/assets/img/badges/f-droid-badge.svg", import.meta.url)
          .href
        }" style="height: 52px">
        </a>`,
        `<a href="https://www.amazon.com/dp/B0BW6MP732">
          <img alt="Get it on Amazon Appstore" src="${new URL(
          "~/assets/img/badges/amazon-store-badge.svg",
          import.meta.url
        ).href
        }" style="height: 52px">
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

function setOS(os: OS) {
  selectedOS.value = os;
  router.push({ query: { os: os.toLowerCase() } });
}

const copyToClipboardSnackbar = ref(false);

function copyToClipboard(text: string | string[]) {
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
      if (!key) return acc;

      if (key === "apk" && !asset.name.includes("arm64v8")) {
        return acc;
      }

      acc[key] = asset.browser_download_url;
      return acc;
    },
    {}
  );
});
</script>
