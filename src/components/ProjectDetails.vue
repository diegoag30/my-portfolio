<template>
  <div>Hello from {{ projectId }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
// Get the route object
const route = useRoute();

// Extract the projectId from the route params
const projectId = computed(() => parseInt(route.params.id, 10));
</script>
