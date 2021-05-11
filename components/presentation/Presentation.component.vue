<template>
  <v-card flat color="transparent" class="rounded-xl fill-height">
    <v-card-title>
      <span class="caja-title">Presentacion</span>
    </v-card-title>
    <v-card-text>
      <div class="mx-5 title font-weight-light">
        <p v-for="(item, i) in parrafo" :key="i" class="paragraphStudy">
          {{ item }}
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      parrafo: [
        'Egresado de la carrera de ingenieria de sistemas en busca de oportunidades laborales con crecimiento profesional, para poner en practica todo lo aprendido y poder formar parte de su equipo de trabajo entorno a la vocacion y asi poder dar buenos resultados en los objetivos y metas generales de la empresa u organizacion',
        'Me considero una persona responsable, dinamico y creativo con facilidad de adaptacion a trabajos bajo presion con alta disponibilidad para adquirir nuevos conocimientos',
      ],
      parrafo1:
        'Egresado de la carrera de ingenieria de sistemas en busca de oportunidades laborales con crecimiento profesional, para poner en practica todo lo aprendido y poder formar parte de su equipo de trabajo entorno a la vocacion y asi poder dar buenos resultados en los objetivos y metas generales de la empresa u organizacion',
      parrafo2:
        'Me considero una persona responsable, dinamico y creativo con facilidad de adaptacion a trabajos bajo presion con alta disponibilidad para adquirir nuevos conocimientos',
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
