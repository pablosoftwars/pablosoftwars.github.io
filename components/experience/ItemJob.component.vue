<template>
  <v-card flat class="transparent rounded-xl fill-height">
    <v-card-title>
      <p class="caja-title">Experiencia</p>
    </v-card-title>
    <v-card-text>
      <v-card
        v-for="(item, i) in listExperience"
        :key="i"
        class="slide-right transparent"
        flat
      >
        <v-card-text :class="['d-flex', 'justify-' + item.justifyItem]">
          <v-card flat class="transparent" max-width="500">
            <v-card-title class="pb-0 d-flex flex-column align-start">
              <p class="cajita teal--text text--darken-2 mb-0">
                {{ item.name }}
              </p>
              <p class="title pb-0 blue-grey--text text--darken-4">
                {{ item.position }}
              </p>
            </v-card-title>
            <v-card-text>
              <p class="title font-weight-light">
                {{ item.detalle }}
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
          position: 'Remplazo temporal en Soporte Tecnico',
          detalle:
            'Mantenimiento e instalacion de impresoras, compartir archivos dentro del dominio además de otras tareas',
        },
        {
          justifyItem: 'center',
          name: 'Caja Petrolera de Salud',
          position: 'Pasante en el area Desarrollo de aplicaciones',
          detalle:
            'Investigacion y desarrollo de aplicacion movil con Android Studio',
        },
        {
          justifyItem: 'end',
          name: 'Tigo Money',
          position: 'Pasante Soporte Tecnico',
          detalle:
            'Gestion de inventario, configuracion, envio y recepcion de dispositivos mobiprint`s',
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
  border-bottom: 8px solid #37474f;
}
</style>
