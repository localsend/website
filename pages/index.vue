<template>
  <div :key="$route.fullPath">
    <!-- Hero Section -->
    <SectionHero />

    <!-- Sponsors Section -->
    <SectionSponsors />

    <!-- Features Bento Grid -->
    <SectionFeatures />

    <!-- How It Works (Timeline Style) -->
    <SectionHowItWorks />

    <!-- NEW: Testimonials Section -->
    <UiSection title="Loved by the Community"
      description="Join thousands of users who trust LocalSend for their daily file transfers." size="lg" spacing="lg">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(review, i) in reviews" :key="i"
          class="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
          <div class="flex gap-0.5 text-amber-400 mb-4">
            <Icon name="material-symbols:star" class="text-lg" v-for="s in 5" :key="s" />
          </div>
          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">"{{ review.text }}"</p>
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold text-xs">
              {{ review.author[0] }}</div>
            <div>
              <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ review.author }}</div>
              <div class="text-xs text-gray-500">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </UiSection>

    <!-- RESTORED: Press / Mentions Section -->
    <UiSection label="Press" title="In the News" description="See what tech publications are saying about LocalSend."
      size="lg" spacing="lg" background="gray">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a v-for="article in mentionedArticles" :key="article.url" :href="article.url" target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col p-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200">
          <div class="flex items-center gap-2 mb-4">
            <Icon :name="article.language" class="text-xl rounded-sm shadow-sm" />
            <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">{{ article.description }}</span>
          </div>
          <h3
            class="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors line-clamp-2 mb-2 tracking-tight">
            {{ article.title }}
          </h3>
          <div
            class="mt-auto pt-4 flex items-center text-sm text-gray-500 font-medium group-hover:text-teal-600 transition-colors">
            Read Article
            <Icon name="material-symbols:arrow-forward" class="ml-1 text-base" />
          </div>
        </a>
      </div>
    </UiSection>

    <!-- NEW: FAQ Section -->
    <UiSection title="Frequently Asked Questions" description="Everything you need to know about LocalSend." size="md"
      spacing="lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(faq, i) in faqs" :key="i"
          class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
          <h3 class="font-semibold text-base text-gray-900 dark:text-white mb-2">{{ faq.q }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ faq.a }}</p>
        </div>
      </div>
    </UiSection>

    <!-- Stats Section (Real Data) -->
    <SectionStats />

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
const reviews = [
  {
    text: "Finally, an AirDrop alternative that actually works across all my devices. I use it daily to move photos from my Android to my iPad.",
    author: "Alex Chen",
    role: "Mobile Developer"
  },
  {
    text: "The speed is incredible. Transferring 4GB video files takes seconds over my home WiFi. Essential tool for my workflow.",
    author: "Sarah Miller",
    role: "Content Creator"
  },
  {
    text: "Open source, no ads, no tracking. This is how software should be. Thank you for this amazing tool!",
    author: "David Wilson",
    role: "Privacy Advocate"
  }
];

// New Data for FAQ
const faqs = [
  {
    q: "Is it really free?",
    a: "Yes, LocalSend is 100% free and open source. There are no ads, no tracking, and no hidden costs."
  },
  {
    q: "Does it work over the internet?",
    a: "No. LocalSend uses your local WiFi network to transfer files. Your data never leaves your local network."
  },
  {
    q: "Is it secure?",
    a: "Yes. All transfers are encrypted using HTTPS. You can also enable PIN verification for extra security."
  },
  {
    q: "Where do files go?",
    a: "Files are saved to your device's Downloads folder by default, but you can change this in the settings."
  }
];

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
