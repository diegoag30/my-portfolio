<template>
  <v-card class="mx-auto" max-width="800" variant="text" elevation="16">
    <v-img
      class="align-end text-white border-md border-dashed border-opacity rounded"
      height="400"
      :src="img_path"
      cover
    >
    </v-img>

    <v-card-title class="pt-4"> {{ title }} </v-card-title>
    <v-chip class="ma-2" color="success"> Server Status </v-chip>
    <v-card-text>
      <div>{{ brief }}</div>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn
        color="primary"
        density="comfortable"
        size="x-large"
        variant="flat"
        class="text-none"
        rounded="lg"
        text="Explorar"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// in <script setup>
export default {
  props: {
    title: String,
    brief: String,
    img_path: String,
  },
};
</script>

<style></style>
