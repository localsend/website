<template>
  <div class="min-h-screen p-12">
    <NuxtLink :to="localePath({ path: '/' })" class="inline-block mb-4">
      <div class="flex items-center">
        <img
            src="~/assets/img/logo-512.png" alt="LocalSend Logo"
            style="height: 40px"
            class="inline-block"
        />
        <span class="text-3xl font-bold ml-2">LocalSend</span>
      </div>
    </NuxtLink>
    <slot></slot>
    <div class="mt-4">
      <NuxtLink :to="localePath({ path: '/' })">
        <TextButton icon="material-symbols:arrow-back">
          {{ $t('homepageButton') }}
        </TextButton>
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
