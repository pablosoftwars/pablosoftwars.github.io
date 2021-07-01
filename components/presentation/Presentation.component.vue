<template>
  <v-card flat color="transparent">
    <div class="d-flex">
      <div :class="[$vuetify.breakpoint.mobile ? 'ml-1' : 'ml-4', 'box-title']">
        <span class="title">Presentacion</span>
      </div>
    </div>
    <v-divider class="ml-4"></v-divider>
    <v-card-text class="px-5">
      <p v-for="(item, i) in parrafo" :key="i" class="title paragraphStudy">
        {{ item }}
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      parrafo: [
        'Egresado de la carrera de ingeniería de sistemas en busca de oportunidades laborales con crecimiento profesional, para poner en practica todo lo aprendido y poder formar parte de su equipo de trabajo entorno a la vocación y asi poder dar buenos resultados en los objetivos y metas generales de la empresa u organización',
        'Me considero una persona responsable, dinámico y creativo con facilidad de adaptación y alta disponibilidad para adquirir nuevos conocimientos',
      ],
    }
  },
  mounted() {
    this.animateParrafos()
  },
  methods: {
    animateParrafos() {
      this.$gsap.from('.paragraphStudy', {
        y: -20,
        opacity: 0,
        stagger: 0.2,
        ease: 'power',
        delay: 0.3,
      })
    },
  },
}
</script>
