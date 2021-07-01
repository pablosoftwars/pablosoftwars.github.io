<template>
  <v-card flat class="transparent fill-height">
    <div class="d-flex">
      <div :class="[$vuetify.breakpoint.mobile ? 'ml-1' : 'ml-4', 'box-title']">
        <span class="title">Educacion</span>
      </div>
    </div>
    <v-divider class="ml-4"></v-divider>
    <v-card-text class="px-5 d-flex flex-wrap justify-space-around">
      <v-card
        v-for="(item, i) in listEducation"
        :key="i"
        flat
        class="mx-auto iconsStudy transparent text-center"
      >
        <v-icon size="100">{{ item.icon }}</v-icon>
        <v-card-title
          class="py-0 d-flex align-center justify-center primary--text"
        >
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          <v-list
            class="rounded-xl"
            style="background-color: transparent"
            outlined
            dense
          >
            <v-list-item
              v-for="(grades, k) in item.grades"
              :key="k"
              class="title font-weight-light"
            >
              <v-list-item-icon>
                <v-icon>$vuetify.icons.birreteicon</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="title font-weight-light d-flex text-left text-wrap"
                  style="line-height: 26px; align-items: start"
                >
                  {{ grades }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
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
