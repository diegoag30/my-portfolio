// /src/plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#1E1E1E",
          primary: "#af2035",
          secondary: "#4c1598",
          error: "#e00f35",
          // Add more colors as needed
        },
      },
    },
  },
});

export default vuetify;
