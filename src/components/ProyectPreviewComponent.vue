<template>
  <v-container>
    <v-col>
      <ProyectItemComponent
        :title="$t('project1.title')"
        :brief="$t('project1.brief')"
        :tags="proyect1Tags"
        img_path="images/cdve_1.png"
        class="pa-2 ma-2"
      />

      <ProyectItemComponent
        :title="$t('project2.title')"
        :brief="$t('project2.brief')"
        :tags="proyect2Tags"
        img_path="images/quiz_game_app_1.png"
        class="pa-2 ma-2"
      />

      <v-responsive width="100%"></v-responsive>

      <ProyectItemComponent
        :title="$t('project3.title')"
        :brief="$t('project3.brief')"
        :tags="proyect3Tags"
        img_path="images/currency_tracker_app_1.png"
        class="pa-2 ma-2"
      />
    </v-col>
  </v-container>
</template>

<script setup>
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
