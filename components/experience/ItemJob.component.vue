<template>
  <v-card flat class="transparent fill-height">
    <div class="d-flex">
      <div :class="[$vuetify.breakpoint.mobile ? 'ml-1' : 'ml-4', 'box-title']">
        <span class="title">Experiencia</span>
      </div>
    </div>
    <v-divider class="ml-4"></v-divider>
    <v-card-text>
      <v-card
        v-for="(item, i) in listExperience"
        :key="i"
        class="slide-right transparent"
        flat
      >
        <v-card-text :class="['d-flex', 'justify-' + item.justifyItem]">
          <v-card
            outlined
            class="rounded-xl"
            style="background-color: transparent"
            max-width="500"
          >
            <v-card-title class="pb-0 d-flex flex-column align-start">
              <p class="cajita primary--text mb-0">
                {{ item.name }}
              </p>
              <p class="title secondary--text">
                {{ item.season }}
              </p>
              <p class="title pb-0 secondary--text">
                {{ item.position }}
              </p>
            </v-card-title>
            <v-card-text>
              <p class="title font-weight-light">
                {{ item.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      listExperience: [
        {
          justifyItem: 'start',
          name: 'Caja Petrolera de Salud',
          position: 'Pasante en el área Desarrollo de aplicaciones',
          season: '12/04/2016 - 30/06/2016',
          description:
            'Investigación y Planeamiento para el desarrollo de aplicación móvil con Android Studio donde se buscó la viabilidad del proyecto para soluciones de aglomeración en filas o colas',
        },
        {
          justifyItem: 'center',
          name: 'Caja Petrolera de Salud',
          position: 'Remplazo temporal en Soporte Técnico',
          season: '04/07/2016 - 30/07/2016',
          description:
            'Mantenimiento e instalación de impresoras, compartir archivos dentro del dominio, manejo de Microsoft Word y Microsoft Excel además de otras tareas',
        },
        {
          justifyItem: 'end',
          name: 'Tigo Money',
          position: 'Mobile Financial Service',
          season: '03/07/2018 - 01/02/2019',
          description:
            'Gestión de inventario con Microsoft Word y Microsoft Excel de Archivadores, configuración, envíos y recepción de dispositivos mobiprint`s(facturador electrónico)',
        },
      ],
    }
  },
  mounted() {
    this.animateExperienceItem()
  },
  methods: {
    animateExperienceItem() {
      this.$gsap.from('.slide-right', {
        x: -10,
        opacity: 0,
        stagger: 0.2,
        ease: 'none',
      })
    },
  },
}
</script>
<style scoped>
.cajita {
  border-bottom: 8px solid;
  border-bottom-color: var(--v-secondary-base);
}
</style>
