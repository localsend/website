<template>
  <div>
    <PageHeader :title="t('download.title')"
      :description="t('download.subTitle', { os: selectedOS || 'your device' })" />

    <section id="downloads" class="downloads section pt-0">
        <div class="container">
            <div class="tabs-container">
                <div class="tabs-header">
                    <button v-for="os in OS" :key="os" 
                        class="tab-btn" 
                        :class="{ active: selectedOS === os }"
                        @click="setOS(os)">
                        {{ os }}
                    </button>
                </div>

                <div v-if="selectedOS" class="tab-content active">
                    <div class="grid grid-2">
                        <div class="download-group">
                            <div v-if="downloadMetadata[selectedOS].stores.length > 0" class="mb-12">
                                <h3>{{ t("download.appStores") }}</h3>
                                <div class="download-links">
                                    <div v-for="(store, index) in downloadMetadata[selectedOS].stores" 
                                        :key="index" 
                                        v-html="store"
                                        class="store-badge"></div>
                                </div>
                            </div>

                            <div v-if="downloadMetadata[selectedOS].binaries.length > 0">
                                <h3>{{ t("download.binaries") }}</h3>
                                <div class="download-links">
                                    <a v-for="binary in downloadMetadata[selectedOS].binaries" 
                                        :key="binary.name" 
                                        :href="binary.url" 
                                        class="card download-card">
                                        <span>{{ binary.name }}</span>
                                        <span class="material-symbols-rounded">download</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="download-group">
                            <template v-if="downloadMetadata[selectedOS].packageManagers.length > 0">
                                <h3>{{ t("download.packageManagers") }}</h3>
                                <div v-for="pm in downloadMetadata[selectedOS].packageManagers" :key="pm.name" class="terminal-card card mb-4">
                                    <div class="terminal-header">
                                        <span class="terminal-title">{{ pm.name }}</span>
                                        <button class="copy-btn" @click="copyToClipboard(pm.commands)">
                                            <span class="material-symbols-rounded">content_copy</span>
                                        </button>
                                    </div>
                                    <code v-for="(cmd, i) in pm.commands" :key="i" class="block">{{ cmd }}</code>
                                </div>
                            </template>

                            <template v-else-if="selectedOS === OS.ios || selectedOS === OS.android">
                                <div class="qr-container text-center">
                                    <div class="card qr-card mb-4" style="display: inline-block; padding: 20px;">
                                        <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://localsend.org/download?os=${selectedOS.toLowerCase()}`" 
                                            alt="QR Code" class="w-48 h-48" />
                                    </div>
                                    <h3 class="mb-2">{{ t('download.scanToInstall') }}</h3>
                                    <p class="text-muted">{{ t('download.scanDescription', { os: selectedOS }) }}</p>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="snackbar" :class="{ 'snackbar-visible': copyToClipboardSnackbar }">
        <span class="material-symbols-rounded accent">check_circle</span>
        {{ t("download.copiedToClipboard") }}
    </div>

    <SectionCta :download-url="recommendedDownloadUrl" />
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

const appleStoreUrl = "https://apps.apple.com/us/app/localsend/id1661733229";
const appleStore = `<a href="${appleStoreUrl}">
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

function applyLocaleUrl(url: string): string {
  if (locale.value === 'zh-CN') {
    const fileName = url.split('/').pop();
    return `https://d.localsend.org/${fileName}`;
  }
  return url;
}

const OS_TO_EXTENSION: Partial<Record<OS, string>> = {
  [OS.windows]: 'exe',
  [OS.macos]: 'dmg',
  [OS.linux]: 'AppImage',
  [OS.android]: 'apk',
};

const recommendedDownloadUrl = computed((): string | undefined => {
  const os = selectedOS.value;
  if (!os) return undefined;
  if (os === OS.ios) return appleStoreUrl;
  const ext = OS_TO_EXTENSION[os];
  if (!ext) return undefined;
  const assetUrl = assetsMap.value[ext];
  if (!assetUrl) return undefined;
  return applyLocaleUrl(assetUrl);
});

const downloadMetadata = computed<Record<OS, Download>>(() => {
  const downloadUrl = (extension: string) => {
    const assetUrl = assetsMap.value[extension];
    if (assetUrl) {
      return applyLocaleUrl(assetUrl);
    }
    return fallbackUrl;
  };

  return {
    [OS.windows]: {
      stores: [],
      binaries: [
        {
          name: `EXE (${t('download.installer')})`,
          url: downloadUrl("exe"),
        },
        {
          name: `${t("download.zip")} (${t('download.portable')})`,
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
