// src/router/index.js
import HomeComponent from "@/components/HomeComponent.vue";
import ProyectPreviewComponent from "@/components/ProyectPreviewComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/proyects",
    name: "Proyects",
    component: ProyectPreviewComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
