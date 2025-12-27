<template>
    <UiSection label="Press" :title="t('home.press.title')" :description="t('home.press.description')" size="md"
        spacing="lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a v-for="article in mentionedArticles" :key="article.url" :href="article.url" target="_blank"
                rel="noopener noreferrer"
                class="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

                <!-- Subtle Gradient Background on Hover -->
                <div
                    class="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/5 group-hover:to-blue-500/5 transition-all duration-300 -z-10">
                </div>

                <!-- Flag & Source -->
                <div class="flex items-center gap-3 mb-4">
                    <div class="flex-none w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300"
                        :class="article.bgClass">
                        <Icon :name="article.language" class="text-2xl" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <span
                            class="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 truncate">
                            {{ article.description }}
                        </span>
                    </div>
                </div>

                <!-- Article Title -->
                <h3
                    class="font-semibold text-base text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-3 mb-auto leading-snug tracking-tight">
                    {{ article.title }}
                </h3>

                <!-- Read More Link -->
                <div
                    class="mt-5 pt-4 border-gray-100 dark:border-gray-800 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <span>{{ t('home.press.readArticle') }}</span>
                    <Icon name="material-symbols:arrow-forward"
                        class="text-base transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </a>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();

interface MentionedArticle {
    title: string;
    description: string;
    language: string;
    url: string;
    bgClass: string;
}

const mentionedArticles: MentionedArticle[] = [
    {
        title: "LocalSend: An Open-Source AirDrop Alternative For Everyone!",
        description: "It's FOSS",
        language: "twemoji:flag-united-states",
        url: "https://news.itsfoss.com/localsend/",
        bgClass: "bg-blue-50/50 dark:bg-blue-950/20",
    },
    {
        title: "Mit Localsend lassen sich Dateien schnell im WLAN teilen",
        description: "DataCenter-Insider",
        language: "twemoji:flag-germany",
        url: "https://www.datacenter-insider.de/mit-localsend-lassen-sich-dateien-schnell-im-wlan-teilen-a-a3b134cc1f9960fbfced8c556ed239b8/",
        bgClass: "bg-yellow-50/50 dark:bg-yellow-950/20",
    },
    {
        title:
            "LocalSend – 无联网,开源跨平台的局域网文件互传工具[2023年的第一个精选]",
        description: "APPINN",
        language: "twemoji:flag-china",
        url: "https://www.appinn.com/localsend/",
        bgClass: "bg-red-50/50 dark:bg-red-950/20",
    },
    {
        title:
            "Cette application universelle offre un partage de fichiers inspiré d'AirDrop à tous vos appareils",
        description: "01net",
        language: "twemoji:flag-france",
        url: "https://www.01net.com/astuces/cette-application-universelle-offre-un-partage-de-fichiers-inspire-dairdrop-a-tous-vos-appareils.html",
        bgClass: "bg-blue-50/50 dark:bg-blue-950/20",
    },
    {
        title:
            "クロスプラットフォームに対応したファイル共有ソフト！「LocalSend」。",
        description: "gigafree.net",
        language: "twemoji:flag-japan",
        url: "https://www.gigafree.net/internet/share/LocalSend.html",
        bgClass: "bg-red-50/50 dark:bg-red-950/20",
    },
    {
        title: "LocalSend: Transfiere archivos del móvil al ordenador, y viceversa",
        description: "Neoteo",
        language: "twemoji:flag-spain",
        url: "https://www.neoteo.com/localsend-transfiere-archivos-del-movil-al-ordenador-y-viceversa/",
        bgClass: "bg-yellow-50/50 dark:bg-yellow-950/20",
    },
    {
        title:
            "LocalSend — бесплатная программа для обмена файлами и текстом через WiFi",
        description: "alexandertokarev.ru",
        language: "twemoji:flag-russia",
        url: "https://alexandertokarev.ru/all/localsend-besplatnaya-programma-dlya-obmena-faylami-cherez-wifi/",
        bgClass: "bg-blue-50/50 dark:bg-blue-950/20",
    },
    {
        title: "대용량 파일 전송 끝판왕 크로스플랫폼 LocalSend",
        description: "naver.com",
        language: "twemoji:flag-south-korea",
        url: "https://m.blog.naver.com/vavaras/223352646162",
        bgClass: "bg-blue-50/50 dark:bg-blue-950/20",
    },
    {
        title:
            "Invia file in modo sicuro sulla rete locale con l'app LocalSend multipiattaforma",
        description: "Guidetti Informatica",
        language: "twemoji:flag-italy",
        url: "https://www.guidetti-informatica.net/2023/03/invia-file-in-modo-sicuro-sulla-rete-locale-con-lapp-localsend-multipiattaforma/",
        bgClass: "bg-green-50/50 dark:bg-green-950/20",
    },
];
</script>