<template>
  <v-card flat color="transparent">
    <v-card flat color="transparent">
      <div class="d-flex">
        <div
          :class="[$vuetify.breakpoint.mobile ? 'ml-1' : 'ml-4', 'box-title']"
        >
          <span class="title">Idiomas</span>
        </div>
      </div>
      <v-divider class="ml-4"></v-divider>
      <v-card-text>
        <v-row>
          <v-col class="d-flex flex-wrap justify-space-around">
            <div class="text-center title">
              Español (Nativo) - Ingles Tecnico (Básico)
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <br />
    <br />
  </v-card>
</template>
