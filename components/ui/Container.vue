<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: true,
});

const classes = computed(() => {
  const sizeMap = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1800px]',
    full: 'max-w-full',
  };

  return [
    sizeMap[props.size],
    'mx-auto',
    props.padding && 'px-4 lg:px-8',
  ];
});
</script>