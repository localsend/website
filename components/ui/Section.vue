<template>
  <component :is="as" :class="['relative', paddingClasses, backgroundClasses, borderClasses]">
    <div :class="containerClasses">
      <!-- Section Header -->
      <div v-if="title || description || $slots.header" :class="headerClasses">
        <slot name="header">
          <!-- Badge/Label -->
          <div v-if="label" class="flex justify-center mb-6">
            <span
              class="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:border-teal-800 dark:bg-teal-950/30 dark:text-teal-400">
              {{ label }}
            </span>
          </div>

          <!-- Title -->
          <h2 v-if="title" :class="titleClasses">
            <span v-if="gradient"
              class="bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              {{ title }}
            </span>
            <span v-else>{{ title }}</span>
          </h2>

          <!-- Description -->
          <p v-if="description" :class="descriptionClasses">
            {{ description }}
          </p>
        </slot>
      </div>

      <!-- Section Content -->
      <slot />

      <!-- Section Footer -->
      <div v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: string;
  title?: string;
  description?: string;
  label?: string;
  labelPulse?: boolean;
  gradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  align?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'white' | 'gray' | 'gradient';
  border?: 'none' | 'top' | 'bottom' | 'both';
  containerPadding?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'section',
  gradient: true,
  size: 'lg',
  align: 'center',
  spacing: 'lg',
  background: 'transparent',
  border: 'none',
  containerPadding: true,
  labelPulse: false,
});

// Container width classes
const containerClasses = computed(() => {
  const widthMap: Record<string, string> = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]', // Wider container for modern look
    full: 'max-w-full',
  };

  return [
    widthMap[props.size],
    'mx-auto',
    props.containerPadding && 'px-6 lg:px-8',
  ].filter(Boolean);
});

// Padding classes
const paddingClasses = computed(() => {
  const spacingMap: Record<string, string> = {
    sm: 'py-16',
    md: 'py-24',
    lg: 'py-32', // More breathing room
    xl: 'py-40',
  };

  return spacingMap[props.spacing];
});

// Background classes
const backgroundClasses = computed(() => {
  const bgMap: Record<string, string> = {
    transparent: '',
    white: 'bg-white dark:bg-gray-950',
    gray: 'bg-[#FAFAFA] dark:bg-[#0A0A0A]', // Specific Vercel off-white/off-black
    gradient: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900',
  };

  return bgMap[props.background];
});

// Border classes
const borderClasses = computed(() => {
  const borderMap: Record<string, string> = {
    none: '',
    top: 'border-t border-gray-200 dark:border-gray-800',
    bottom: 'border-b border-gray-200 dark:border-gray-800',
    both: 'border-y border-gray-200 dark:border-gray-800',
  };

  return borderMap[props.border];
});

// Header alignment classes
const headerClasses = computed(() => {
  const alignMap: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return [alignMap[props.align], 'mb-16 md:mb-20'];
});

// Title size classes - REFINED TYPOGRAPHY
const titleClasses = computed(() => {
  return [
    'text-2xl md:text-3xl lg:text-4xl',
    'font-medium',
    'tracking-tighter',
    'text-balance',
    'text-gray-900 dark:text-white',
    props.align === 'center' && 'mx-auto',
  ].filter(Boolean);
});

// Description classes - REFINED TYPOGRAPHY
const descriptionClasses = computed(() => {
  const widthMap: Record<string, string> = {
    sm: 'max-w-lg',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
    full: 'max-w-full',
  };

  return [
    'mt-3 text-lg md:text-[19px]', // Specific size
    'text-gray-600 dark:text-gray-400',
    'leading-relaxed',
    'font-normal',
    props.align === 'center' && 'mx-auto',
    widthMap[props.size],
  ].filter(Boolean);
});

// Footer classes
const footerClasses = computed(() => {
  return ['mt-16 md:mt-24'];
});
</script>