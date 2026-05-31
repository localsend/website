<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'gradient';
  align?: 'left' | 'center' | 'right';
  color?: 'default' | 'muted' | 'accent';
}

const props = withDefaults(defineProps<Props>(), {
  as: 'p',
  variant: 'body',
  align: 'left',
  color: 'default',
});

const classes = computed(() => {
  const variantClasses = {
    h1: 'text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-4xl lg:text-5xl font-bold',
    h3: 'text-3xl lg:text-4xl font-bold',
    h4: 'text-2xl lg:text-3xl font-semibold',
    body: 'text-base lg:text-lg',
    caption: 'text-sm',
    gradient: 'text-4xl lg:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = {
    default: 'text-gray-900 dark:text-white',
    muted: 'text-gray-600 dark:text-gray-400',
    accent: 'text-teal-600 dark:text-teal-400',
  };

  return [variantClasses[props.variant], alignClasses[props.align], colorClasses[props.color]];
});
</script>