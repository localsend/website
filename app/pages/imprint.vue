<template>
  <div>
    <PageHeader title="Impressum" description="Legal Notice / Anbieterkennzeichnung" />

    <section class="legal section pt-0">
        <div class="container">
            <div class="card legal-content">
                <div class="mb-8 p-6 rounded-2xl" style="background: rgba(130, 213, 200, 0.05); border: 1px solid rgba(130, 213, 200, 0.1);">
                    <p class="text-muted mb-2">Zuletzt aktualisiert: 28. April 2024</p>
                    <p>English: The imprint ("Impressum") is a legal notice that is required by German law.</p>
                </div>

                <h2>Angaben gemäß § 5 TMG</h2>
                <div class="address-info mb-8">
                    <p>Tien Do Nam</p>
                    <p>{{ imprintStreet }}</p>
                    <p>{{ imprintCity }}</p>
                    <p>Deutschland</p>
                </div>

                <h2>Vertreten durch</h2>
                <p>Tien Do Nam</p>

                <h2>Kontakt</h2>
                <div class="contact-methods">
                    <p><strong>E-Mail:</strong> <a href="mailto:support@localsend.org" class="accent">support@localsend.org</a></p>
                    <p><strong>Web:</strong> <a href="https://tienisto.com/contact" target="_blank" rel="noopener" class="accent">Kontaktformular</a></p>
                </div>
            </div>
        </div>
    </section>
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
