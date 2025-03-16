import { defineNuxtPlugin, useHead, useRoute } from '#imports'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  
  // Add canonical URL to all pages
  useHead({
    link: [
      {
        rel: 'canonical',
        href: `https://localsend.org${route.path === '/' ? '' : route.path}`,
      }
    ]
  })
}) 