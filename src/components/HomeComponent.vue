<template>
  <v-layout>
    <v-main :min-height="$vuetify.display.mdAndUp ? 800 : 550">
      <v-container class="h-100 d-flex align-center justify-center">
        <div class="w-100 w-md-50 text-center">
          <h1 class="text-h4 text-md-h2 font-weight-bold my-6">
            Diego Pablo Aguilar García
          </h1>

          <div class="text-body-1 text-medium-emphasis mb-10 text-center">
            Ingeniero Comercial y programador especializado en aplicaciones
            Python. Experiencia en desarrollo móvil con Flutter, Vue.js, bases
            de datos PostgreSQL, bash scripts, FTP y módulos para el ERP Odoo.
          </div>

          <div class="d-flex ga-4 justify-center">
            <v-btn
              to="/proyects"
              tag="router-link"
              class="text-none"
              color="primary"
              flat
              rounded="lg"
              text="Ver proyectos"
            />
          </div>
        </div>

        <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
          <div
            aria-hidden="true"
            class="overflow-hidden opacity-20 w-100 h-100"
          />
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup></script>

<style scoped>
.v-bg {
  filter: blur(56px);
  pointer-events: none;
}

.v-bg > div {
  background: linear-gradient(
    to bottom right,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-error))
  );
  z-index: -10;
  clip-path: polygon(
    20% 50%,
    27% 66%,
    41% 66%,
    50% 50%,
    41% 34%,
    27% 34%,
    20% 50%,
    55% 50%,
    62% 66%,
    76% 66%,
    85% 50%,
    76% 34%,
    62% 34%,
    55% 50%,
    30% 50%,
    37% 66%,
    51% 66%,
    60% 50%,
    51% 34%,
    37% 34%,
    30% 50%
  );
}
</style>
