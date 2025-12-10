<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
    <div class="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">

        <!-- Brand Column -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img src="~/assets/img/logo-512.png" alt="LocalSend" class="h-8 w-8" />
            <span class="text-lg font-bold text-gray-900 dark:text-white">LocalSend</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
            {{ t("footer.description") }}
          </p>
        </div>

        <!-- Product Column -->
        <div>
          <h3 class="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            {{ t("footer.product") }}
          </h3>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink :to="localePath('/download')"
                class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize">
                {{ t("footer.download") }}
              </NuxtLink>
            </li>
            <li>
              <a href="https://web.localsend.org" target="_blank"
                class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                {{ t("footer.webapp") }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Community Column -->
        <div>
          <h3 class="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Community</h3>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="https://github.com/localsend/localsend" target="_blank"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Icon name="fa6-brands:github" class="text-base" />
                {{ t("footer.github") }}
              </a>
            </li>
            <li>
              <a href="https://discord.gg/GSRWmQNP87" target="_blank"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Icon name="fa6-brands:discord" class="text-base" />
                {{ t("footer.discord") }}
              </a>
            </li>
            <li>
              <a href="https://reddit.com/r/localsend" target="_blank"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Icon name="fa6-brands:reddit" class="text-base" />
                {{ t("footer.reddit") }}
              </a>
            </li>
            <li>
              <a href="https://shop.localsend.org" target="_blank"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Icon name="fa6-solid:shirt" class="text-base" />
                {{ t("footer.merch") }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div>
          <h3 class="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Legal</h3>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink :to="localePath('/privacy')"
                class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize">
                {{ t("footer.privacy") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/terms')"
                class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize">
                {{ t("footer.terms") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/imprint')"
                class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize">
                {{ t("footer.imprint") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contact')"
                class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize">
                {{ t("footer.contact") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <!-- Copyright -->
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2022 - {{ year }} <a href="https://github.com/Tienisto" target="_blank"
                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors underline underline-offset-2">Tien
                Do Nam.</a>
            </p>
            <p class=" mt-2 text-xs text-gray-400 dark:text-gray-500">
              {{ t("footer.underlicense") }}
              <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank"
                class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors underline underline-offset-2">
                {{ t("footer.license") }}
              </a>
            </p>
          </div>

          <!-- Designed By -->
          <div class="text-end">
            <p class="text-sm text-gray-400 dark:text-gray-500">
              Website designed by
              <a href="https://github.com/akshayejh" target="_blank"
                class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors underline underline-offset-2">
                Akshay Jhajhra
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const { t } = useI18n();
const localePath = useLocalePath();
</script>
