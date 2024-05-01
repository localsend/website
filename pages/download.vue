<template>
  <SecondaryLayout :sub-title="t('download.title')">
    <template v-slot:tabs>
      <!-- OS Buttons -->
      <div class="mt-8 flex flex-wrap justify-center">
        <AppButton v-for="os in OS" :key="os" class="mx-2 mb-4" @click="selectedOS = os" :dark="selectedOS !== os">
          {{ os }}
        </AppButton>
      </div>
    </template>

    <template v-slot:content>
      <h3 class="text-center text-2xl">{{ t('download.subTitle', {'os': selectedOS}) }}</h3>

      <div v-if="selectedOS" class="mt-4 grid grid-cols-12 gap-4">
        <!-- App Stores -->
        <div class="col-span-12 md:col-span-4 bg-gray-100 p-4 rounded-lg"
             v-if="downloadMetadata[selectedOS].stores.length !== 0">
          <h3 class="text-xl font-bold">{{ t('download.appStores') }}</h3>
          <p>{{ t('download.appStoresDescription') }}</p>

          <div v-for="(store, index) in downloadMetadata[selectedOS].stores" :key="index" class="mt-4">
            <div v-html="store" class="inline-block"></div>
          </div>
        </div>

        <!-- Binaries -->
        <div class="col-span-12 md:col-span-4 bg-gray-100 p-4 rounded-lg"
             v-if="downloadMetadata[selectedOS].binaries.length !== 0">
          <h3 class="text-xl font-bold">{{ t('download.binaries') }}</h3>
          <p class="mb-4">{{ t('download.binariesDescription') }}</p>

          <div v-for="binary in downloadMetadata[selectedOS].binaries" :key="binary.name" class="mt-2">
            <TextButton :href="binary.url" icon="material-symbols:download">
              {{ binary.name }}
            </TextButton>
          </div>

          <TextButton href="https://github.com/localsend/localsend/releases" icon="material-symbols:history"
                      class="mt-2">
            {{ t('download.allReleases') }}
          </TextButton>
        </div>

        <!-- Package Managers -->
        <div class="col-span-12 bg-gray-100 p-4 rounded-lg"
             :class="downloadMetadata[selectedOS].stores.length !== 0 ? 'md:col-span-4' : 'md:col-span-8'"
             v-if="downloadMetadata[selectedOS].packageManagers.length !== 0">
          <h3 class="text-xl font-bold">{{ t('download.packageManagers') }}</h3>
          <p>{{ t('download.packageManagersDescription') }}</p>

          <div v-for="packageManager in downloadMetadata[selectedOS].packageManagers" :key="packageManager.name"
               class="mt-4">
            <b>{{ packageManager.name }}:</b>
            <div class="mt-2 bg-gray-200 p-2 rounded-lg text-sm">
              <code>
                  <span v-for="(command, index) in packageManager.commands" :key="index"
                        class="hover:bg-gray-300 cursor-pointer"
                        @click="() => copyToClipboard(command)">
                    <span class="text-gray-400">&gt;</span> {{ command }}<br>
                  </span>
              </code>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="height: 300px"></div>

      <!-- Snackbar -->
      <div class="absolute bottom-12 transform left-1/2 -translate-x-1/2 bg-teal-950 text-white px-4 py-2 rounded-lg transition-opacity"
           :class="copyToClipboardSnackbar ? 'opacity-100' : 'opacity-0'">
        {{ t('download.copiedToClipboard') }}
      </div>
    </template>
  </SecondaryLayout>
</template>

<script setup lang="ts">
import TextButton from "~/components/TextButton.vue";
import SecondaryLayout from "~/components/layout/SecondaryLayout.vue";

definePageMeta({
  title: 'download.seo.title',
  description: 'download.seo.description',
})

const {t} = useI18n()

enum OS {
  windows = 'Windows',
  macos = 'macOS',
  linux = 'Linux',
  android = 'Android',
  ios = 'iOS'
}

function detectOS(): OS {
  const userAgent = navigator.userAgent;
  const substrings = ["Win", "Macintosh", "X11", "Android", "iP"]
  const idx = substrings.findIndex(s => userAgent.includes(s));
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
    <img alt="Download on the App Store" src="${new URL('~/assets/img/badges/apple-store-badge.svg', import.meta.url).href}" style="height: 64px">
</a>`;

const nix = {
  name: 'Nix',
  commands: [
    'nix-shell -p localsend',
    'pkgs.localsend # Config',
  ],
};

const assetsMap: Ref<{ [key: string]: string }> = ref({});
const fallbackUrl = "https://github.com/localsend/localsend/releases";

const downloadMetadata = computed<Record<OS, Download>>(() => {
  return {
    [OS.windows]: {
      stores: [],
      binaries: [
        {
          name: 'EXE',
          url: assetsMap.value['exe'] ?? fallbackUrl,
        },
        {
          name: t('download.zip'),
          url: assetsMap.value['zip'] ?? fallbackUrl,
        },
      ],
      packageManagers: [
        {
          name: 'Winget',
          commands: ['winget install localsend'],
        },
        {
          name: 'Chocolatey',
          commands: ['choco install localsend'],
        },
        {
          name: 'Scoop',
          commands: [
            'scoop bucket add extras',
            'scoop install localsend',
          ],
        },
      ],
    },
    [OS.macos]: {
      stores: [appleStore],
      binaries: [
        {
          name: 'DMG',
          url: assetsMap.value['dmg'] ?? fallbackUrl,
        },
      ],
      packageManagers: [
        {
          name: 'Homebrew',
          commands: [
            'brew tap localsend/localsend',
            'brew install localsend',
          ],
        },
        nix,
      ],
    },
    [OS.linux]: {
      stores: [],
      binaries: [
        {
          name: 'TAR',
          url: assetsMap.value['gz'] ?? fallbackUrl,
        },
        {
          name: 'DEB',
          url: assetsMap.value['deb'] ?? fallbackUrl,
        },
        {
          name: 'AppImage',
          url: assetsMap.value['AppImage'] ?? fallbackUrl,
        }
      ],
      packageManagers: [
        {
          name: 'Flathub',
          commands: [
            'flatpak install flathub org.localsend.localsend_app',
            'flatpak run org.localsend.localsend_app',
          ],
        },
        {
          name: 'AUR',
          commands: ['yay -S localsend-bin'],
        },
        nix,
      ]
    },
    [OS.android]: {
      stores: [
        `<a href='https://play.google.com/store/apps/details?id=org.localsend.localsend_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <img alt='Get it on Google Play'
               src="${new URL('~/assets/img/badges/google-play-badge.svg', import.meta.url).href}"
               style="height: 60px"
          />
        </a>`,
        `<a href="https://f-droid.org/packages/org.localsend.localsend_app">
          <img alt="Get it on F-Droid" src="${new URL('~/assets/img/badges/f-droid-badge.svg', import.meta.url).href}" style="height: 60px">
        </a>`,
        `<a href="https://www.amazon.com/dp/B0BW6MP732">
          <img alt="Get it on F-Droid" src="${new URL('~/assets/img/badges/amazon-store-badge.svg', import.meta.url).href}" style="height: 59px">
        </a>`,
      ],
      binaries: [
        {
          name: 'APK',
          url: assetsMap.value['apk'] ?? fallbackUrl,
        }
      ],
      packageManagers: [],
    },
    [OS.ios]: {
      stores: [appleStore],
      binaries: [],
      packageManagers: [],
    }
  };
});

const copyToClipboardSnackbar = ref(false);

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  copyToClipboardSnackbar.value = true;
  setTimeout(() => copyToClipboardSnackbar.value = false, 3000);
}

onMounted(async () => {
  selectedOS.value = detectOS();

  const assetsMetadata = await requestGithubAssets();
  assetsMap.value = assetsMetadata.reduce<{ [key: string]: string }>((acc, obj) => {
    const key = obj.name.split(".").pop();
    if (key) {
      acc[key] = obj.browser_download_url;
    }
    return acc;
  }, {});
});
</script>
