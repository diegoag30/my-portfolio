import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import es from "./locales/es.json";

// Vuetify
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

// Create the i18n instance with translation data
const i18n = createI18n({
  locale: "es", // Set default language
  messages: {
    es,
  },
});
createApp(App).use(i18n).use(vuetify).use(router).mount("#app");
