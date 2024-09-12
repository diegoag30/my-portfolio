<template>
  <v-container>
    <v-btn
      color="secondary"
      @click="$router.go(-1)"
      class="mb-4"
      rounded
      elevation="2"
      density="comfortable"
    >
      <v-icon left>mdi-arrow-left</v-icon>
      Volver
    </v-btn>
    <v-col>
      <ProyectItemComponent
        :title="$t('projects.project1.title')"
        :brief="$t('projects.project1.brief')"
        :tags="proyect1Tags"
        img_path="images/cdve_1.png"
        class="pa-2 ma-2"
      />

      <ProyectItemComponent
        :title="$t('projects.project2.title')"
        :brief="$t('projects.project2.brief')"
        :tags="proyect2Tags"
        img_path="images/quiz_game_app_1.png"
        class="pa-2 ma-2"
      />

      <v-responsive width="100%"></v-responsive>

      <ProyectItemComponent
        :title="$t('projects.project3.title')"
        :brief="$t('projects.project3.brief')"
        :tags="proyect3Tags"
        img_path="images/currency_tracker_app_1.png"
        class="pa-2 ma-2"
      />
    </v-col>
  </v-container>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from "./FooterComponent.vue";
import ProyectItemComponent from "./ProyectItemComponent.vue";

const proyect1Tags = [
  { id: 0, content: "Python", color: "green-darken-2" },
  { id: 1, content: "Vue", color: "green-accent-3" },
  { id: 2, content: "Api", color: "light-blue-darken-1" },
  { id: 3, content: "Flask", color: "green-darken-2" },
];
const proyect2Tags = [
  { id: 0, content: "Vue", color: "green-accent-3" },
  { id: 1, content: "JavaScript", color: "yellow-lighten-1" },
];
const proyect3Tags = [
  { id: 0, content: "Next", color: "blue-grey-darken-2" },
  { id: 1, content: "TypeScript", color: "light-blue-darken-4" },
  { id: 2, content: "JavaScript", color: "yellow-lighten-1" },
  { id: 3, content: "Api", color: "light-blue-darken-1" },
];
</script>

<style></style>
