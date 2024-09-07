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
    <v-row class="d-flex justify-center flex-wrap" align="center">
      <div v-for="tag in tags" :key="tag.id">
        <v-chip class="ma-2" :color="tag.color"> {{ tag.content }} </v-chip>
      </div>
    </v-row>
    <v-card-text>
      <p class="text-justify">{{ brief }}</p>
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
    tags: Array,
    img_path: String,
  },
};
</script>

<style></style>
