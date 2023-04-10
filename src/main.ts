/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { requestAssets } from "@/plugins/githubfetcher";

const app = createApp(App);

app.provide("assets", await requestAssets());

registerPlugins(app)

app.mount('#app')
