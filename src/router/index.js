// src/router/index.js
import HomeComponent from "@/components/HomeComponent.vue";
import ProjectDetails from "@/components/ProjectDetails.vue";
import ProjectPreviewComponent from "@/components/ProjectPreviewComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectPreviewComponent,
  },
  {
    path: "/projects/:id", // dynamic route with 'id'
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true, // this will pass the 'id' as a prop to the component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
