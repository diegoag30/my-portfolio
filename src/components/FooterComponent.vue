<template>
  <v-footer class="pa-4 opacity-60">
    <v-container>
      <v-row justify="center">
        <v-col class="text-center" cols="12" sm="3">
          <v-row align="center" justify="center">
            <v-icon class="mr-2">mdi-linkedin</v-icon>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              class="text-white"
            >
              /diegoag30
            </a>
          </v-row>
        </v-col>

        <v-col class="text-center" cols="12" sm="3">
          <v-row align="center" justify="center">
            <v-icon class="mr-2">mdi-github</v-icon>
            <a
              href="https://github.com/your-username"
              target="_blank"
              class="text-white"
            >
              /diegoag30
            </a>
          </v-row>
        </v-col>

        <v-col class="text-center" cols="12" sm="3">
          <v-row align="center" justify="center">
            <v-icon class="mr-2">mdi-phone</v-icon>
            <span class="text-white">+56991234951</span>
          </v-row>
        </v-col>

        <v-col class="text-center" cols="12" sm="3">
          <v-row align="center" justify="center">
            <v-icon class="mr-2">mdi-email</v-icon>
            <a href="mailto:your-email@example.com" class="text-white no-wrap">
              diego.pablo.aguilar@gmail.com
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script></script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.no-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 80%;
}
</style>
