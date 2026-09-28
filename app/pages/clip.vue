<script setup lang="ts">
// App Clip invocation fallback: advertise the signed App Clip without reading its bearer query.
definePageMeta({ layout: false })

useHead({
  title: 'Send with LocalSend',
  meta: [
    {
      name: 'apple-itunes-app',
      content: 'app-id=1661733229, app-clip-bundle-id=org.localsend.localsendApp.Clip, app-clip-display=card',
    },
    { name: 'referrer', content: 'no-referrer' },
    { property: 'og:title', content: 'Send with LocalSend' },
    { property: 'og:image', content: 'https://localsend.org/img/logo.png' },
  ],
})

onNuxtReady(() => {
  // secretQueryScrubber — removes hotspot/session capability fields from browser history.
  window.history.replaceState(null, document.title, '/clip')
})
</script>

<template>
  <main class="clip-page">
    <img class="clip-logo" src="/img/logo.png" alt="LocalSend" width="96" height="96">
    <h1>Send with LocalSend</h1>
    <p>Open the LocalSend App Clip card above to send photos and videos to the nearby Android phone.</p>
    <a class="clip-download" href="https://apps.apple.com/us/app/localsend/id1661733229">Get the full LocalSend app</a>
  </main>
</template>

<style scoped>
.clip-page {
  min-height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  color: #17213a;
  background: #f7f9ff;
}

.clip-logo {
  border-radius: 1.5rem;
}

.clip-page p {
  max-width: 34rem;
  color: #526078;
}

.clip-download {
  display: inline-block;
  padding: .8rem 1.2rem;
  border-radius: 999px;
  color: white;
  background: #315ff4;
  text-decoration: none;
  font-weight: 600;
}
</style>
