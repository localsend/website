<template>
  <div>
    <div class="flex min-h-screen items-center justify-center pt-12 md:pt-0">
      <div style="max-width: 1800px" class="grid grid-cols-12">
        <!-- Logo and text -->
        <div
          class="col-span-12 grid grid-cols-12 pb-12 sm:col-span-12 md:col-span-8 md:pb-0 lg:col-span-7"
        >
          <div
            class="col-span-12 mt-0 flex items-center justify-center md:col-span-4 md:justify-end lg:mt-2"
          >
            <img
              id="logo"
              src="~/assets/img/logo-512.png"
              alt="LocalSend Logo"
              class="h-52 object-contain md:h-40 lg:h-40 xl:h-48 2xl:h-56"
            />
          </div>

          <div
            class="col-span-12 flex items-center justify-center md:col-span-8 md:justify-start lg:pl-2"
          >
            <div>
              <h1
                class="text-center text-5xl font-black dark:text-white sm:text-5xl md:text-start xl:text-7xl 2xl:text-8xl"
              >
                LocalSend
              </h1>
              <h2
                class="slogan mt-2 px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"
              >
                {{ t("home.slogan1") }}
              </h2>
              <h2
                class="slogan px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"
              >
                {{ t("home.slogan2") }}
              </h2>

              <div
                class="buttons mt-4 flex flex-wrap justify-center gap-4 px-4 md:justify-start md:px-0 xl:mt-6"
              >
                <NuxtLink :to="localePath({ path: '/download' })">
                  <AppButton
                    icon="material-symbols:arrow-downward"
                    :dark="true"
                  >
                    {{ t("home.download") }}
                  </AppButton>
                </NuxtLink>
                <NuxtLink :to="localePath({ path: '/community' })">
                  <AppButton icon="material-symbols:group" :dark="true">
                    {{ t("home.community") }}
                  </AppButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Screenshots -->
        <div
          class="col-span-12 grid grid-cols-3 gap-8 px-8 sm:col-span-12 md:col-span-4 lg:col-span-5"
        >
          <div
            class="col-span-3 flex items-center justify-center md:col-span-1"
          >
            <img
              src="/img/screenshot-iphone.webp"
              alt="iPhone Screenshot"
              class="h-96 object-contain"
            />
          </div>
          <div
            class="col-span-3 flex items-center justify-center md:col-span-2"
          >
            <img
              src="/img/screenshot-pc.webp"
              alt="PC Screenshot"
              class="h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- End of hero section -->

    <div
      class="m-auto mt-4 flex max-w-screen-lg flex-col items-center px-4 lg:px-12"
    >
      <h2 class="text-3xl font-bold dark:text-white">
        {{ t("home.features.title") }}
      </h2>
      <div
        class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-12"
      >
        <FeatureCard
          :title="t('home.features.decentralized')"
          :description="t('home.features.decentralizedDescription')"
          icon="material-symbols:share"
        />
        <FeatureCard
          :title="t('home.features.crossPlatform')"
          :description="t('home.features.crossPlatformDescription')"
          icon="material-symbols:devices"
        />
        <FeatureCard
          :title="t('home.features.free')"
          :description="t('home.features.freeDescription')"
          icon="material-symbols:volunteer-activism"
        />
        <FeatureCard
          :title="t('home.features.openSource')"
          :description="t('home.features.openSourceDescription')"
          icon="material-symbols:code"
        />
        <FeatureCard
          :title="t('home.features.secure')"
          :description="t('home.features.secureDescription')"
          icon="material-symbols:lock"
        />
        <FeatureCard
          :title="t('home.features.easy')"
          :description="t('home.features.easyDescription')"
          icon="material-symbols:gesture"
        />
      </div>

      <h2 class="mt-24 text-center text-3xl font-bold dark:text-white">
        {{ t("home.mentioned") }}
      </h2>
      <InfiniteHorizontalScroll
        class="mt-8 w-full [&_a]:mx-4 [&_img]:max-w-none"
      >
        <div v-for="article in mentionedArticles" :key="article.title">
          <MentionedCard
            :title="article.title"
            :description="article.description"
            :language="article.language"
            :url="article.url"
          />
        </div>
      </InfiniteHorizontalScroll>

      <div class="mt-8" v-if="locale !== 'zh-CN'">
        <!-- YouTube video; a clickable screenshot is used to ease network usage on devices. -->
        <!-- We disable We disable this for mainland China because YouTube is not available there. -->
        <a :href="youtubeVideo" target="_blank" rel="noopener noreferrer">
          <img src="~/assets/img/video-preview.webp" width="560" alt="{{ t('home.video') }}">
        </a>
      </div>

      <h2 class="mt-24 text-center text-3xl font-bold dark:text-white">
        {{ t("home.get") }}
      </h2>
      <div class="mb-36 mt-8 flex items-center justify-center gap-4">
        <NuxtLink :to="localePath({ path: '/download' })">
          <AppButton icon="material-symbols:download" :dark="true">
            {{ t("home.download") }}
          </AppButton>
        </NuxtLink>
      </div>

      <TextButton
        href="https://github.com/localsend/website"
        target="_blank"
        icon="material-symbols:build"
        class="mb-8 dark:text-gray-300"
      >
        {{ t("improveWebsite") }}
      </TextButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "home.seo.title",
  description: "home.seo.description",
});

const { t, locale } = useI18n();
const localePath = useLocalePath();

onMounted(() => {
  // legacy redirects (remove after next store update)
  if (window.location.hash === "#/privacy") {
    navigateTo("/privacy");
  }

  if (window.location.hash === "#/terms-of-service") {
    navigateTo("/terms");
  }

  if (window.location.hash === "#/contact") {
    navigateTo("/contact");
  }
});

interface MentionedArticle {
  title: string;
  description: string;
  language: string;
  url: string;
}

const mentionedArticles: MentionedArticle[] = [
  {
    title: "LocalSend: An Open-Source AirDrop Alternative For Everyone!",
    description: "It's FOSS",
    language: "twemoji:flag-united-states",
    url: "https://news.itsfoss.com/localsend/",
  },
  {
    title: "Mit Localsend lassen sich Dateien schnell im WLAN teilen",
    description: "DataCenter-Insider",
    language: "twemoji:flag-germany",
    url: "https://www.datacenter-insider.de/mit-localsend-lassen-sich-dateien-schnell-im-wlan-teilen-a-a3b134cc1f9960fbfced8c556ed239b8/",
  },
  {
    title:
      "LocalSend – 无联网，开源跨平台的局域网文件互传工具[2023年的第一个精选]",
    description: "APPINN",
    language: "twemoji:flag-china",
    url: "https://www.appinn.com/localsend/",
  },
  {
    title:
      "Cette application universelle offre un partage de fichiers inspiré d’AirDrop à tous vos appareils",
    description: "01net",
    language: "twemoji:flag-france",
    url: "https://www.01net.com/astuces/cette-application-universelle-offre-un-partage-de-fichiers-inspire-dairdrop-a-tous-vos-appareils.html",
  },
  {
    title:
      "クロスプラットフォームに対応したファイル共有ソフト！「LocalSend」。",
    description: "gigafree.net",
    language: "twemoji:flag-japan",
    url: "https://www.gigafree.net/internet/share/LocalSend.html",
  },
  {
    title: "LocalSend: Transfiere archivos del móvil al ordenador, y viceversa",
    description: "Neoteo",
    language: "twemoji:flag-spain",
    url: "https://www.neoteo.com/localsend-transfiere-archivos-del-movil-al-ordenador-y-viceversa/",
  },
  {
    title:
      "LocalSend — бесплатная программа для обмена файлами и текстом через WiFi",
    description: "alexandertokarev.ru",
    language: "twemoji:flag-russia",
    url: "https://alexandertokarev.ru/all/localsend-besplatnaya-programma-dlya-obmena-faylami-cherez-wifi/",
  },
  {
    title: "대용량 파일 전송 끝판왕 크로스플랫폼 LocalSend",
    description: "naver.com",
    language: "twemoji:flag-south-korea",
    url: "https://m.blog.naver.com/vavaras/223352646162",
  },
  {
    title:
      "Invia file in modo sicuro sulla rete locale con l’app LocalSend multipiattaforma",
    description: "Guidetti Informatica",
    language: "twemoji:flag-italy",
    url: "https://www.guidetti-informatica.net/2023/03/invia-file-in-modo-sicuro-sulla-rete-locale-con-lapp-localsend-multipiattaforma/",
  },
];

const youtubeVideo = computed(() => {
  switch (locale.value) {
    case "de":
      return "https://www.youtube.com/watch?v=qfXkF-W09zk";
    default:
      return "https://www.youtube.com/watch?v=2ITezMkbAqE";
  }
});
</script>

<style scoped>
#logo {
  animation: rotating 40s linear infinite;
}

.slogan {
  opacity: 0;
  animation: fadeIn 0.2s 0.3s forwards ease-out;
}

.buttons {
  opacity: 0;
  animation: fadeIn 0.2s 0.5s forwards ease-out;
}

@keyframes rotating {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
  }
}
</style>
