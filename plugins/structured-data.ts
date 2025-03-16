import { defineNuxtPlugin, useHead } from '#app'

export default defineNuxtPlugin(() => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LocalSend',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows, macOS, Linux, Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'A free, open-source app for sharing files between nearby devices without internet connection.',
    url: 'https://localsend.org',
    author: {
      '@type': 'Organization',
      name: 'LocalSend',
      url: 'https://github.com/localsend'
    },
    license: 'https://github.com/localsend/localsend/blob/main/LICENSE',
    softwareVersion: 'latest',
    screenshot: 'https://localsend.org/img/screenshot-pc.webp',
    image: 'https://localsend.org/img/logo-512.png',
    downloadUrl: 'https://localsend.org/download',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000'
    }
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LocalSend',
    url: 'https://localsend.org',
    logo: 'https://localsend.org/img/logo-512.png',
    sameAs: [
      'https://github.com/localsend/localsend'
    ]
  }

  useHead({
    script: [
      {
        key: 'structured-data-software',
        type: 'application/ld+json',
        children: JSON.stringify(websiteSchema)
      },
      {
        key: 'structured-data-organization',
        type: 'application/ld+json',
        children: JSON.stringify(organizationSchema)
      }
    ]
  })
}) 