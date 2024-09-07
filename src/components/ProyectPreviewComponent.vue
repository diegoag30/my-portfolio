<template>
  <v-container>
    <v-col>
      <ProyectItemComponent
        title="titulo1"
        brief="ajsjdhfb"
        img_path="images/cdve_1.png"
        class="pa-2 ma-2"
      />

      <ProyectItemComponent
        title="titulo2"
        brief="ajsjdhfb"
        img_path="images/quiz_game_app_1.png"
        class="pa-2 ma-2"
      />

      <v-responsive width="100%"></v-responsive>

      <ProyectItemComponent
        title="titulo3"
        brief="ajsjdhfb"
        img_path="images/currency_tracker_app_1.png"
        class="pa-2 ma-2"
      />
    </v-col>
  </v-container>
</template>

<script setup>
import ProyectItemComponent from "./ProyectItemComponent.vue";
</script>

<style></style>
