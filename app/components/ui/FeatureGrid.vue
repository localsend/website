<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  gap: 'lg',
  animated: true,
});

const gridClasses = computed(() => {
  const columnMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-6 lg:gap-8',
  };

  return ['grid', columnMap[props.columns], gapMap[props.gap]];
});
</script>