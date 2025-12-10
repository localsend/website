<template>
  <div :key="$route.fullPath">
    <!-- Hero Section -->
    <SectionHero />

    <!-- Stats Section (Real Data) -->
    <SectionStats />

    <!-- Sponsors Section -->
    <SectionSponsors />

    <!-- Features Bento Grid -->
    <SectionFeatures />

    <!-- How It Works (Timeline Style) -->
    <SectionHowItWorks />

    <!-- Testimonials Section -->
    <SectionTestimonials />

    <!-- Press / Mentions Section -->
    <SectionPress />

    <!-- Video Section -->
    <div class="max-w-[720px] mx-auto border rounded-xl border-gray-200/10" v-if="locale !== 'zh-CN'">
      <!-- YouTube video; a clickable screenshot is used to ease network usage on devices. -->
      <!-- We disable We disable this for mainland China because YouTube is not available there. -->
      <a :href="youtubeVideo" target="_blank" rel="noopener noreferrer">
        <img class="aspect-video" src="~/assets/img/video-preview.webp" width="720" alt="{{ t('home.video') }}"
          :class="'animate-fade-in-up rounded-xl'" />
      </a>
    </div>

    <!-- FAQ Section -->
    <SectionFaq />

    <!-- CTA Section -->
    <SectionCta />
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

// New Data for Testimonials
const reviews = computed(() => [
  {
    text: t('home.testimonials.review1'),
    author: "Alex Chen",
    role: t('home.testimonials.roles.developer')
  },
  {
    text: t('home.testimonials.review2'),
    author: "Sarah Miller",
    role: t('home.testimonials.roles.creator')
  },
  {
    text: t('home.testimonials.review3'),
    author: "David Wilson",
    role: t('home.testimonials.roles.advocate')
  }
]);

// New Data for FAQ
const faqs = computed(() => [
  {
    q: t('home.faq.q1'),
    a: t('home.faq.a1')
  },
  {
    q: t('home.faq.q2'),
    a: t('home.faq.a2')
  },
  {
    q: t('home.faq.q3'),
    a: t('home.faq.a3')
  },
  {
    q: t('home.faq.q4'),
    a: t('home.faq.a4')
  }
]);

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

@keyframes rotating {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
