<template>
  <LegalLayout>
    <h1>Impressum</h1>
    <p>Zuletzt aktualisiert: 28. April 2024</p>
    <br>
    <b>English: The imprint ("Impressum") is a legal notice that is required by German law.</b>

    <br><br>
    <h2>Angaben gemäß § 5 TMG</h2>
    <p>Tien Do Nam</p>
    <p>Endersstr. 5</p>
    <p>04177 Leipzig</p>
    <p>Deutschland</p>

    <br>
    <h2>Vetreten durch:</h2>
    <p>Tien Do Nam</p>

    <br>
    <h2>Kontakt:</h2>
    <p>E-Mail: support@localsend.org</p>
    <p>oder zum <a href="https://tienisto.com/contact" class="underline">Kontaktformular</a></p>
  </LegalLayout>
</template>

<script setup lang="ts">
import LegalLayout from "~/components/layout/LegalLayout.vue";

defineI18nRoute(false);
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
