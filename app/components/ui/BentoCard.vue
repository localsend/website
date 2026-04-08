<template>
    <div :class="[
        'group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
        'transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 hover:-translate-y-1',
        colSpanClass
    ]">
        <div class="h-full flex flex-col p-8">
            <!-- Icon -->
            <div
                class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400">
                <Icon :name="icon" class="text-2xl" />
            </div>

            <!-- Content -->
            <div class="flex-1">
                <h3 class="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ title }}
                </h3>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {{ description }}
                </p>
            </div>

            <!-- Optional Visual Slot (for images/gradients at bottom) -->
            <div v-if="$slots.visual"
                class="mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                <slot name="visual" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    icon: string;
    span?: 1 | 2 | 3;
}

const props = withDefaults(defineProps<Props>(), {
    span: 1
});

const colSpanClass = computed(() => {
    const map: Record<number, string> = {
        1: 'col-span-1',
        2: 'col-span-1 md:col-span-2',
        3: 'col-span-1 md:col-span-3',
    };
    return map[props.span];
});
</script>