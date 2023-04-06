<template>
  <page-layout sub-title="Downloads">
    <template v-slot:tabs>
      <!-- OS Buttons -->
      <v-col cols="12" class="pt-6 d-flex justify-center flex-wrap">
        <v-btn v-for="e in OS" variant="tonal" size="x-large" class="ma-2 text-none"
               :color="selectedOS === e ? 'primary' : undefined"
               @click="selectedOS = e">
          {{ e }}
        </v-btn>
      </v-col>
    </template>

    <template v-slot:content>
      <h1 class="text-h6 text-sm-h6 text-center">{{ selectedOS }} Downloads</h1>

      <div v-if="selectedOS === OS.windows" class="text-center pa-2">
        Due to certificate changes, you need to uninstall v1.7.0 or earlier before installing v1.8.0 or later.
      </div>

      <v-row no-gutters align="stretch" class="mt-2">
        <!-- App Stores -->
        <v-col cols="12" md="4" class="pa-2" v-if="downloadMetadata[selectedOS].stores.length !== 0">
          <v-sheet color="teal-lighten-4" class="fill-height pa-4" rounded>
            <h1 class="text-h6 text-sm-h6">App Stores</h1>
            <p>Recommended for most users.</p>

            <div v-for="s in downloadMetadata[selectedOS].stores" v-html="s">
            </div>
          </v-sheet>
        </v-col>

        <!-- Binaries -->
        <v-col cols="12" md="4" class="pa-2" v-if="downloadMetadata[selectedOS].binaries.length !== 0">
          <v-sheet color="teal-lighten-4 pa-4" class="fill-height" rounded>
            <h1 class="text-h6 text-sm-h6">Binaries</h1>
            <p class="d-block mb-4">Download for offline usage.</p>

            <div v-for="b in downloadMetadata[selectedOS].binaries" class="mt-2">
              <v-btn variant="text" :prepend-icon="mdiDownload" :href="b.url">
                {{ b.name }}
              </v-btn>
            </div>

            <v-btn variant="text" :prepend-icon="mdiHistory" class="mt-2"
                   href="https://github.com/localsend/localsend/releases">
              All Releases
            </v-btn>
          </v-sheet>
        </v-col>

        <!-- Package Managers -->
        <v-col cols="12" :md="downloadMetadata[selectedOS].stores.length !== 0 ? 4 : 8" class="pa-2" v-if="downloadMetadata[selectedOS].packageManagers.length !== 0">
          <v-sheet color="teal-lighten-4 pa-4" class="fill-height" rounded>
            <h1 class="text-h6 text-sm-h6">Package Managers</h1>
            <p>Enjoy automatic updates.</p>

            <div v-for="p in downloadMetadata[selectedOS].packageManagers" class="mt-4">
              <b>{{ p.name }}:</b>
              <v-sheet color="teal-lighten-4">
                <code style="font-size: 0.8em">
                  <template v-for="c in p.commands">
                    $ {{ c }}<br>
                  </template>
                </code>
              </v-sheet>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </template>
  </page-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiDownload, mdiHistory } from '@mdi/js'
import PageLayout from "@/layouts/PageLayout.vue";

enum OS {
  windows = 'Windows',
  macos = 'MacOS',
  linux = 'Linux',
  android = 'Android',
  ios = 'iOS'
}

const selectedOS = ref<OS>(OS.windows);

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

const downloadMetadata: Record<OS, Download> = {
  [OS.windows]: {
    stores: [],
    binaries: [
      {
        name: 'MSIX',
        url: 'https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.msix',
      },
      {
        name: 'ZIP (Portable)',
        url: 'https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0-windows.zip',
      },
    ],
    packageManagers: [
      {
        name: 'Winget',
        commands: ['winget install localsend'],
      },
      {
        name: 'Scoop',
        commands: ['scoop install localsend'],
      },
    ],
  },
  [OS.macos]: {
    stores: [appleStore],
    binaries: [
      {
        name: 'DMG',
        url: 'https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.dmg',
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
        name: 'AppImage',
        url: 'https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.AppImage',
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
        url: 'https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.apk',
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

</script>
