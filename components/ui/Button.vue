<template>
  <component :is="computedComponent" v-bind="computedProps" :disabled="disabled" :class="buttonClasses"
    @click="handleClick">

    <!-- Inner shadow for depth (Solid variants only) -->
    <div v-if="isSolidVariant"
      class="absolute inset-0 rounded-[inherit] shadow-inner shadow-black/5 dark:shadow-black/20 pointer-events-none" />

    <!-- Shimmer effect -->
    <div
      class="absolute inset-0 rounded-[inherit] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-0 overflow-hidden">
      <div class="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"></div>
    </div>

    <!-- Content Wrapper (Ensures content sits above effects) -->
    <div class="relative z-10 flex items-center justify-center gap-2">
      <!-- Loading spinner -->
      <div v-if="loading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Icon name="svg-spinners:ring-resize" class="text-lg" />
      </div>

      <!-- Content (Hidden when loading) -->
      <div :class="['flex items-center gap-2', loading ? 'opacity-0' : 'opacity-100']">
        <Icon v-if="icon && iconPosition === 'left'" :name="icon" :class="iconClasses" />
        <span v-if="$slots.default">
          <slot />
        </span>
        <Icon v-if="icon && iconPosition === 'right'" :name="icon" :class="iconClasses" />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a' | 'NuxtLink';
  to?: string | object;
  href?: string;
  target?: string;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconPosition: 'left',
  as: 'button',
  loading: false,
  disabled: false,
  fullWidth: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const slots = useSlots();

const computedComponent = computed(() => {
  if (props.as === 'NuxtLink') return resolveComponent('NuxtLink');
  return props.as;
});

const computedProps = computed(() => {
  if (props.as === 'NuxtLink' && props.to) return { to: props.to };
  if (props.as === 'a' && props.href) return { href: props.href, target: props.target };
  return {};
});

const isSolidVariant = computed(() => ['primary', 'secondary'].includes(props.variant));

const buttonClasses = computed(() => {
  // Base: Relative positioning, overflow hidden for effects, transitions
  const baseClasses = 'group relative inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 overflow-hidden active:scale-[0.98]';

  const variantClasses: Record<Variant, string> = {
    // Primary: Glossy Dark (Light Mode) / Glossy White (Dark Mode)
    primary: [
      'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-200',
      'text-white dark:text-gray-900',
      'shadow-lg shadow-gray-900/20 dark:shadow-black/10 border border-white/10 dark:border-black/5',
      'hover:shadow-xl hover:-translate-y-[1px]',
      'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:pointer-events-none',
      'after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/10 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none'
    ].join(' '),

    // Secondary: Glossy White (Light Mode) / Glossy Dark (Dark Mode)
    secondary: [
      'bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
      'text-gray-900 dark:text-white',
      'border border-gray-200 dark:border-gray-700',
      'shadow-md shadow-black/5',
      'hover:shadow-lg hover:-translate-y-[1px]',
      'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-white/30 before:to-transparent before:pointer-events-none dark:before:from-white/10 dark:before:via-white/5'
    ].join(' '),

    // Outline: Glassy
    outline: [
      'bg-gradient-to-br from-transparent via-white/50 to-white/30 dark:via-gray-800/30 dark:to-gray-800/50',
      'border border-gray-200 dark:border-gray-700',
      'text-gray-700 dark:text-gray-300',
      'shadow-sm',
      'hover:border-gray-300 dark:hover:border-gray-600',
      'hover:bg-white/80 dark:hover:bg-gray-800/80',
      'hover:-translate-y-[1px]',
      'backdrop-blur-sm'
    ].join(' '),

    // Ghost: Standard hover
    ghost: 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white',

    link: 'text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline p-0 h-auto',
  };

  // Dimensions without padding (padding handled separately)
  const sizeClasses: Record<Size, string> = {
    sm: 'h-8 text-xs rounded-lg',
    md: 'h-10 text-[14px] rounded-xl',
    lg: 'h-12 text-[16px] rounded-xl',
  };

  // Dynamic padding based on content (Icon vs Text)
  const paddingClasses = (() => {
    if (props.variant === 'link') return 'p-0';

    const hasIcon = !!props.icon;
    const hasText = !!slots.default;

    // Icon Only (Square)
    if (hasIcon && !hasText) {
      const iconOnlyMap: Record<Size, string> = {
        sm: 'w-8 p-0',
        md: 'w-10 p-0',
        lg: 'w-12 p-0',
      };
      return iconOnlyMap[props.size];
    }

    // Icon + Text (Slightly reduced padding to balance visual weight)
    if (hasIcon && hasText) {
      const iconTextMap: Record<Size, string> = {
        sm: 'px-3',
        md: 'px-5',
        lg: 'px-6',
      };
      return iconTextMap[props.size];
    }

    // Text Only (Standard padding)
    const textOnlyMap: Record<Size, string> = {
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    };
    return textOnlyMap[props.size];
  })();

  const widthClasses = props.fullWidth ? 'w-full' : '';

  return [
    baseClasses,
    variantClasses[props.variant],
    props.variant !== 'link' && sizeClasses[props.size],
    paddingClasses,
    widthClasses,
  ];
});

const iconClasses = computed(() => {
  const sizeMap: Record<Size, string> = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };
  return sizeMap[props.size];
});
</script>