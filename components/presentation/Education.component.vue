<template>
  <v-card flat class="transparent rounded-xl fill-height">
    <v-card-title>
      <span class="caja-title">Educacion</span>
    </v-card-title>
    <v-card-text class="px-5">
      <v-row>
        <v-col class="d-flex flex-wrap justify-space-around">
          <v-card
            v-for="(item, i) in listEducation"
            :key="i"
            flat
            class="iconsStudy transparent text-center"
          >
            <v-icon size="100">{{ item.icon }}</v-icon>
            <v-card-title
              class="
                py-0
                d-flex
                align-center
                justify-center
                teal--text
                text--darken-2
              "
            >
              {{ item.name }}
            </v-card-title>
            <v-list shaped dense color="transparent">
              <v-list-item
                v-for="(grades, k) in item.grades"
                :key="k"
                class="title font-weight-light"
              >
                <v-list-item-icon>
                  <v-icon>mdi-blur</v-icon>
                </v-list-item-icon>
                {{ grades }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      listEducation: [
        {
          icon: '$vuetify.icons.donboscoicon',
          name: 'Colegio Don Bosco',
          grades: ['Primaria', 'Secundaria', 'Bachiller en Humanidades'],
        },
        {
          icon: '$vuetify.icons.mamamargaritaicon',
          name: 'Instituto Mama Margarita',
          grades: ['Operador en Computadora', 'Operador en Internet'],
        },
        {
          icon: '$vuetify.icons.utepsaicon',
          name: 'Universidad Utepsa',
          grades: ['Egresado de Ingenieria de Sistemas'],
        },
      ],
    }
  },
  mounted() {
    this.animateIconsEstudy()
  },
  methods: {
    animateIconsEstudy() {
      this.$gsap.from('.iconsStudy', {
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
