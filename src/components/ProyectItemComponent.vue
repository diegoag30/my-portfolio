<template>
  <v-card class="mx-auto" max-width="800">
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

    <v-card-actions>
      <v-btn color="orange" text="Share"></v-btn>

      <v-btn color="orange" text="Explore"></v-btn>
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
