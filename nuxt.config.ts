// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
        autoImport: false
    },
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Roboto: true,
        }
    }
});
