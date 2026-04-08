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
