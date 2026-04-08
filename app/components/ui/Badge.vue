<template>
  <div :class="badgeClasses">
    <div v-if="pulse" class="w-2 h-2 rounded-full bg-current animate-pulse"></div>
    <Icon v-if="icon" :name="icon" class="text-sm" />
    <span><slot /></span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  pulse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  pulse: false,
});

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center gap-2 rounded-full font-medium';
  
  const variantClasses = {
    default: 'bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300',
    success: 'bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300',
    error: 'bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300',
    info: 'bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
  ];
});
</script>