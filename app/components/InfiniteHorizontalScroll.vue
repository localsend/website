<template>
  <div
    class="flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]"
  >
    <div
      class="flex items-center"
      :class="
        direction === 'ltr'
          ? 'infinite-animation-ltr'
          : 'infinite-animation-rtl'
      "
      aria-hidden="true"
    >
      <slot />
    </div>
    <div
      class="flex items-center"
      :class="
        direction === 'ltr'
          ? 'infinite-animation-ltr'
          : 'infinite-animation-rtl'
      "
      aria-hidden="true"
    >
      <slot />
    </div>
    <div
      class="flex items-center"
      :class="
        direction === 'ltr'
          ? 'infinite-animation-ltr'
          : 'infinite-animation-rtl'
      "
      aria-hidden="true"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
});

const direction = head.value.htmlAttrs!.dir;
</script>

<style scoped>
.infinite-animation-ltr {
  animation: infinite-scroll-ltr 25s linear infinite;
}

@keyframes infinite-scroll-ltr {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.infinite-animation-rtl {
  animation: infinite-scroll-rtl 25s linear infinite;
}

@keyframes infinite-scroll-rtl {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
