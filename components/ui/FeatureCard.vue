<template>
  <div
    :class="[
      'feature-card group relative rounded-2xl transition-all duration-300',
      paddingClasses,
      backgroundClasses,
      borderClasses,
      hoverClasses,
      shadowClasses,
    ]"
  >
    <!-- Hover gradient overlay -->
    <div v-if="hoverGradient" class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="relative">
      <!-- Icon -->
      <div v-if="icon" :class="iconContainerClasses">
        <Icon :name="icon" :class="iconClasses" />
      </div>

      <!-- Custom icon slot -->
      <div v-else-if="$slots.icon" class="mb-4">
        <slot name="icon" />
      </div>

      <!-- Title -->
      <h3 v-if="title" :class="titleClasses">
        {{ title }}
      </h3>

      <!-- Description -->
      <p v-if="description" :class="descriptionClasses">
        {{ description }}
      </p>

      <!-- Content slot -->
      <div v-if="$slots.default">
        <slot />
      </div>

      <!-- Footer slot -->
      <div v-if="$slots.footer" class="mt-4">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'bordered' | 'filled' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  hover?: 'lift' | 'glow' | 'border' | 'none';
  hoverGradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'bordered',
  size: 'md',
  hover: 'lift',
  hoverGradient: true,
});

const paddingClasses = computed(() => {
  const sizeMap = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };
  return sizeMap[props.size];
});

const backgroundClasses = computed(() => {
  const variantMap = {
    default: 'bg-transparent',
    bordered: 'bg-white dark:bg-gray-800/50',
    filled: 'bg-gray-50 dark:bg-gray-800',
    glass: 'bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg',
  };
  return variantMap[props.variant];
});

const borderClasses = computed(() => {
  if (props.variant === 'default') return '';
  return 'border border-gray-200 dark:border-gray-700';
});

const hoverClasses = computed(() => {
  const hoverMap = {
    lift: 'hover:scale-105 hover:-translate-y-1',
    glow: 'hover:shadow-xl hover:shadow-teal-500/5',
    border: 'hover:border-teal-500/50 dark:hover:border-teal-500/50',
    none: '',
  };
  return hoverMap[props.hover];
});

const shadowClasses = computed(() => {
  if (props.variant === 'default') return '';
  return 'hover:shadow-xl hover:shadow-teal-500/5';
});

const iconContainerClasses = computed(() => {
  return [
    'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110',
    'bg-teal-100 dark:bg-teal-950/50',
  ];
});

const iconClasses = computed(() => {
  return 'text-2xl text-teal-600 dark:text-teal-400';
});

const titleClasses = computed(() => {
  return 'text-xl font-semibold text-gray-900 dark:text-white mb-2';
});

const descriptionClasses = computed(() => {
  return 'text-gray-600 dark:text-gray-400';
});
</script>

<style scoped>
.feature-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }
.feature-card:nth-child(5) { animation-delay: 0.5s; }
.feature-card:nth-child(6) { animation-delay: 0.6s; }
.feature-card:nth-child(7) { animation-delay: 0.7s; }
.feature-card:nth-child(8) { animation-delay: 0.8s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>