<template>
  <page-layout :sub-title="$t('download.title')">
    <template v-slot:tabs>
      <!-- OS Buttons -->
      <v-col cols="12" class="pt-6 d-flex justify-center flex-wrap">
        <v-btn v-for="e in OS" v-bind:key="e" variant="tonal" size="x-large" class="ma-2 text-none"
               :color="selectedOS === e ? 'primary' : undefined"
               @click="selectedOS = e">
          {{ e }}
        </v-btn>
      </v-col>
    </template>

    <template v-slot:content>
      <h1 class="text-h6 text-sm-h6 text-center">{{ $t('download.subTitle', {'os': selectedOS})  }}</h1>

      <div v-if="selectedOS === OS.windows" class="text-center pa-2">
        {{ $t('download.windowsNotice') }}
      </div>

      <v-row no-gutters align="stretch" class="mt-2">
        <!-- App Stores -->
        <v-col cols="12" md="4" class="pa-2" v-if="downloadMetadata[selectedOS].stores.length !== 0">
          <v-sheet color="teal-lighten-4" class="fill-height pa-4" rounded>
            <h1 class="text-h6 text-sm-h6">{{ $t('download.appStores') }}</h1>
            <p>{{ $t('download.appStoresDescription') }}</p>

            <div v-for="(s, index) in downloadMetadata[selectedOS].stores" v-bind:key="index" v-html="s">
            </div>
          </v-sheet>
        </v-col>

        <!-- Binaries -->
        <v-col cols="12" md="4" class="pa-2" v-if="downloadMetadata[selectedOS].binaries.length !== 0">
          <v-sheet color="teal-lighten-4 pa-4" class="fill-height" rounded>
            <h1 class="text-h6 text-sm-h6">{{ $t('download.binaries') }}</h1>
            <p class="d-block mb-4">{{ $t('download.binariesDescription') }}</p>

            <div v-for="b in downloadMetadata[selectedOS].binaries" v-bind:key="b.name" class="mt-2">
              <v-btn variant="text" :prepend-icon="mdiDownload" :href="b.url">
                {{ b.name }}
              </v-btn>
            </div>

            <v-btn variant="text" :prepend-icon="mdiHistory" class="mt-2"
                   href="https://github.com/localsend/localsend/releases">
              {{ $t('download.allReleases') }}
            </v-btn>
          </v-sheet>
        </v-col>

        <!-- Package Managers -->
        <v-col cols="12" :md="downloadMetadata[selectedOS].stores.length !== 0 ? 4 : 8" class="pa-2"
               v-if="downloadMetadata[selectedOS].packageManagers.length !== 0">
          <v-sheet color="teal-lighten-4 pa-4" class="fill-height" rounded>
            <h1 class="text-h6 text-sm-h6">{{ $t('download.packageManagers') }}</h1>
            <p>{{ $t('download.packageManagersDescription') }}</p>

            <div v-for="p in downloadMetadata[selectedOS].packageManagers" v-bind:key="p.name" class="mt-4">
              <b>{{ p.name }}:</b>
              <v-sheet color="teal-lighten-4">
                <code style="font-size: 0.8em">
                  <span v-for="(c, index) in p.commands" v-bind:key="index" class="copy-text" @click="() => copyToClipboard(c)">
                    <span class="text-grey-darken-1">&gt;</span> {{ c }}<br>
                  </span>
                </code>
              </v-sheet>
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-snackbar v-model="copyToClipboardSnackbar">
        {{  t('download.copiedToClipboard')  }}
        <template v-slot:actions>
          <v-btn variant="text" @click="copyToClipboardSnackbar = false">
            <v-icon>{{ mdiClose }}</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </page-layout>
</template>

<script setup lang="ts">
import {computed, onMounted, Ref, ref} from 'vue';
import {mdiDownload, mdiHistory, mdiClose} from '@mdi/js'
import PageLayout from "@/layouts/PageLayout.vue";
import {useI18n} from "vue-i18n";
import {requestGithubAssets} from "@/helper/requestGithubAssets";

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

const selectedOS = ref<OS>(detectOS());

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

const appleStore = `<a href="https://apps.apple.com/us/app/localsend/id1661733229" class="d-block ma-4">
    <img alt="Download on the App Store" src="${new URL('@/assets/badges/apple-store-badge.svg', import.meta.url).href}" height="64">
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
          name: 'MSIX',
          url: assetsMap.value['msix'] ?? fallbackUrl,
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
          commands: ['scoop bucket add extras; scoop install localsend'],
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
               src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
               height="90"
          />
        </a>`,
        `<a href="https://f-droid.org/packages/org.localsend.localsend_app">
          <img alt="Get it on F-Droid" src="${new URL('@/assets/badges/f-droid-badge.png', import.meta.url).href}" height="90">
        </a>`,
        `<a href="https://www.amazon.com/dp/B0BW6MP732" class="d-block pl-4 pr-4 pt-4">
          <img alt="Get it on F-Droid" src="${new URL('@/assets/badges/amazon-store-badge.png', import.meta.url).href}" height="60">
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
}

onMounted(async () => {
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

<style>
.copy-text:hover {
  cursor: pointer;
  background-color: #26A69A;
}
</style>
