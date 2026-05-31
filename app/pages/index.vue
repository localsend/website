<template>
  <div :key="$route.fullPath">
    <SectionHero />

    <SectionStats />

    <SectionSponsors />

    <SectionFeatures />

    <SectionHowItWorks />

    <SectionCommunity />

    <SectionTestimonials />

    <SectionPress />

    <SectionFaq />

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
