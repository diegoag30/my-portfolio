import { createApp } from "vue";

// Vuetify
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

createApp(App).use(vuetify).use(router).mount("#app");
