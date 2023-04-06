<template>
  <v-app>
    <v-main>
      <router-view />
      <v-footer class="pa-0" v-show="showFooter">
        <v-sheet color="grey-lighten-4" class="pt-8 pb-8 pl-12 pr-2" style="width: 100%">
          <v-row no-gutters>

            <!-- License and Copywrite -->
            <v-col cols="12" class="text-center">
              <p class="text-body-2">Licensed under the <a href="https://opensource.org/licenses/MIT" class="text-decoration-none text-teal" target="_blank">MIT License</a></p>
              <p class="text-body-2">&copy; 2022 - {{ year }} Tien Do Nam and LocalSend contributors</p>
            </v-col>

            <!-- Links -->
            <v-col cols="12" class="pt-8 d-flex justify-center align-center">
                <v-btn variant="text" href="https://github.com/localsend/localsend" target="_blank">Github</v-btn>•
                <v-btn variant="text" to="/privacy">Privacy</v-btn>•
                <v-btn variant="text" to="/terms-of-service">Terms</v-btn>•
                <v-btn variant="text" to="/contact">Contact</v-btn>
            </v-col>

            <!-- Disclaimer -->
            <v-col cols="12" class="pt-4 pl-12 pr-12">
              <p class="d-block mt-12 text-grey text-body-2 text-center">
                This website and LocalSend is not affiliated with, endorsed by, or in any way associated with the brands mentioned on this site.
                <br>
                All trademarks, logos, and brand names are the property of their respective owners. We are using these references for informational purposes only.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const year = new Date().getFullYear();

const showFooter = ref(false);

onMounted(() => {
  // Show footer after a delay
  setTimeout(() => {
    showFooter.value = true;
  }, 500);
});
</script>
