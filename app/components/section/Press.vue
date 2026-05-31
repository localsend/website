<template>
    <section class="news section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">{{ t('home.press.title') }}</h2>
                <p class="section-subtitle">{{ t('home.press.description') }}</p>
            </div>
            <div class="grid grid-3">
                <a v-for="article in mentionedArticles" :key="article.url" :href="article.url" target="_blank" class="card news-card">
                    <div class="news-meta">
                        <span :class="['flag', article.flagClass]"></span>
                        <span class="source">{{ article.description }}</span>
                    </div>
                    <h3>{{ article.title }}</h3>
                    <span class="read-more">{{ t('home.press.readArticle') }} →</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

interface MentionedArticle {
    title: string;
    description: string;
    flagClass: string;
    url: string;
}

const mentionedArticles: MentionedArticle[] = [
    {
        title: "LocalSend: An Open-Source AirDrop Alternative For Everyone!",
        description: "It's FOSS",
        flagClass: "flag-us",
        url: "https://news.itsfoss.com/localsend/",
    },
    {
        title: "Mit Localsend lassen sich Dateien schnell im WLAN teilen",
        description: "DataCenter-Insider",
        flagClass: "flag-de",
        url: "https://www.datacenter-insider.de/mit-localsend-lassen-sich-dateien-schnell-im-wlan-teilen-a-a3b134cc1f9960fbfced8c556ed239b8/",
    },
    {
        title: "LocalSend – 无联网,开源跨平台的局域网文件互传工具[2023年的第一个精选]",
        description: "APPINN",
        flagClass: "flag-cn",
        url: "https://www.appinn.com/localsend/",
    },
    {
        title: "Cette application universelle offre un partage de fichiers inspiré d'AirDrop à tous vos appareils",
        description: "01net",
        flagClass: "flag-fr",
        url: "https://www.01net.com/astuces/cette-application-universelle-offre-un-partage-de-fichiers-inspire-dairdrop-a-tous-vos-appareils.html",
    },
    {
        title: "クロスプラットフォームに対応したファイル共有ソフト！「LocalSend」。",
        description: "gigafree.net",
        flagClass: "flag-jp",
        url: "https://www.gigafree.net/internet/share/LocalSend.html",
    },
    {
        title: "LocalSend: Transfiere archivos del móvil al ordenador, y viceversa",
        description: "Neoteo",
        flagClass: "flag-es",
        url: "https://www.neoteo.com/localsend-transfiere-archivos-del-movil-al-ordenador-y-viceversa/",
    },
    {
        title: "LocalSend — бесплатная программа для обмена файлами и текстом через WiFi",
        description: "alexandertokarev.ru",
        flagClass: "flag-ru",
        url: "https://alexandertokarev.ru/all/localsend-besplatnaya-programma-dlya-obmena-faylami-cherez-wifi/",
    },
    {
        title: "대용량 파일 전송 끝판왕 크로스플랫폼 LocalSend",
        description: "naver.com",
        flagClass: "flag-kr",
        url: "https://m.blog.naver.com/vavaras/223352646162",
    },
    {
        title: "Invia file in modo sicuro sulla rete locale con l'app LocalSend multipiattaforma",
        description: "Guidetti Informatica",
        flagClass: "flag-it",
        url: "https://www.guidetti-informatica.net/2023/03/invia-file-in-modo-sicuro-sulla-rete-locale-con-lapp-localsend-multipiattaforma/",
    },
];
</script>

<style scoped>
</style>