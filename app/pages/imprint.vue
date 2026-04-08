<template>
  <div>
    <UiSection title="Impressum" description="Legal Notice / Anbieterkennzeichnung" size="lg" spacing="xl">
      <div class="max-w-2xl mx-auto text-left">
        <!-- Info Box -->
        <div class="mb-12 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Zuletzt aktualisiert: 28. April 2024</p>
          <p class="text-base font-medium text-gray-900 dark:text-white">
            English: The imprint ("Impressum") is a legal notice that is required by German law.
          </p>
        </div>

        <!-- Legal Content -->
        <div class="space-y-12">
          <!-- Address -->
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Angaben gemäß § 5 TMG</h2>
            <div class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>Tien Do Nam</p>
              <p>{{ imprintStreet }}</p>
              <p>{{ imprintCity }}</p>
              <p>Deutschland</p>
            </div>
          </div>

          <!-- Representative -->
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Vertreten durch</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Tien Do Nam
            </p>
          </div>

          <!-- Contact -->
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Kontakt</h2>
            <div class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <p>
                <span class="font-medium text-gray-900 dark:text-white">E-Mail:</span>
                <a href="mailto:support@localsend.org"
                  class="ml-2 text-teal-600 dark:text-teal-400 hover:underline">support@localsend.org</a>
              </p>
              <p>
                <span class="font-medium text-gray-900 dark:text-white">Web:</span>
                <a href="https://tienisto.com/contact" target="_blank" rel="noopener"
                  class="ml-2 text-teal-600 dark:text-teal-400 hover:underline">Kontaktformular</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const imprintStreet = process.env.IMPRINT_STREET;
const imprintCity = process.env.IMPRINT_CITY;
</script>

<style scoped>
h1 {
  font-size: 1.2rem;
  font-weight: bold;
}

h2 {
  font-weight: bold;
}
</style>
