<template>
    <UiSection :title="t('home.faq.title')" :description="t('home.faq.description')" size="md" spacing="lg">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div v-for="(faq, i) in faqs" :key="i"
                class="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden transition-all duration-300"
                :class="{ 'shadow-md border-gray-300 dark:border-gray-700': openIndex === i, 'shadow-sm hover:shadow-md': openIndex !== i }">

                <!-- Question Button -->
                <button @click="toggleFaq(i)"
                    class="w-full px-4 py-4 flex items-center justify-between text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/10">
                    <h3 class="font-semibold text-base text-gray-900 dark:text-white pr-6 flex-1">
                        {{ faq.q }}
                    </h3>
                    <div class="flex-none w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300"
                        :class="{ 'rotate-180 bg-teal-100 dark:bg-teal-900/30': openIndex === i }">
                        <Icon name="material-symbols:keyboard-arrow-down" class="text-lg transition-colors"
                            :class="openIndex === i ? 'text-teal-600 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400'" />
                    </div>
                </button>

                <!-- Answer Content -->
                <div class="overflow-hidden transition-all duration-300"
                    :style="{ maxHeight: openIndex === i ? `${heights[i]}px` : '0px' }">
                    <div :ref="(el) => setAnswerRef(el, i)" class="px-4 pb-4">
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ faq.a }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();

const faqs = computed(() => [
    {
        q: t('home.faq.q1'),
        a: t('home.faq.a1')
    },
    {
        q: t('home.faq.q2'),
        a: t('home.faq.a2')
    },
    {
        q: t('home.faq.q3'),
        a: t('home.faq.a3')
    },
    {
        q: t('home.faq.q4'),
        a: t('home.faq.a4')
    },
    {
        q: t('home.faq.q5'),
        a: t('home.faq.a5')
    },
    {
        q: t('home.faq.q6'),
        a: t('home.faq.a6')
    }
]);

// Only one item can be open at a time, start with first one open
const openIndex = ref<number | null>(0);
const answerRefs = ref<Map<number, HTMLElement>>(new Map());
const heights = ref<number[]>([]);

const setAnswerRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    if (el && '$el' in el) {
        answerRefs.value.set(index, el.$el as HTMLElement);
    } else if (el instanceof HTMLElement) {
        answerRefs.value.set(index, el);
    }
};

const toggleFaq = (index: number) => {
    if (openIndex.value === index) {
        openIndex.value = null; // Close if clicking the open one
    } else {
        openIndex.value = index; // Open the clicked one
    }
};

// Calculate heights after mount
onMounted(() => {
    nextTick(() => {
        heights.value = Array.from({ length: faqs.value.length }, (_, i) => {
            const el = answerRefs.value.get(i);
            return el?.scrollHeight || 0;
        });
    });
});

// Recalculate heights when content changes
watch(() => faqs.value, () => {
    nextTick(() => {
        heights.value = Array.from({ length: faqs.value.length }, (_, i) => {
            const el = answerRefs.value.get(i);
            return el?.scrollHeight || 0;
        });
    });
}, { deep: true });
</script>