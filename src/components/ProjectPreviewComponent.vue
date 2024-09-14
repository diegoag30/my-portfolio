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
    <v-col v-for="i in projects_index" :key="i">
      <ProjectItemComponent
        :project_id="i"
        :title="$t(`projects.${i}.title`)"
        :brief="$t(`projects.${i}.brief`)"
        :tags="getTagsForProject(i)"
        :img_path="`images/project_${i}_image_0.png`"
        class="pa-2 ma-2"
      />
    </v-col>
  </v-container>
  <FooterComponent />
</template>

<script setup>
import { computed } from "vue";
import FooterComponent from "./FooterComponent.vue";
import ProjectItemComponent from "./ProjectItemComponent.vue";

const projects_index = computed(() => {
  return Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]
});

const tags = {
  0: [
    { content: "Python", color: "green-darken-2" },
    { content: "Vue", color: "green-accent-3" },
    { content: "Api", color: "light-blue-darken-1" },
    { content: "Flask", color: "green-darken-2" },
  ],
  1: [
    { content: "Vue", color: "green-accent-3" },
    { content: "JavaScript", color: "yellow-lighten-1" },
  ],
  2: [
    { content: "Next", color: "blue-grey-darken-2" },
    { content: "TypeScript", color: "light-blue-darken-4" },
    { content: "JavaScript", color: "yellow-lighten-1" },
    { content: "Api", color: "light-blue-darken-1" },
  ],
};

// Function to get tags based on projectId
const getTagsForProject = (projectId) => {
  return tags[projectId] || [];
};
</script>
