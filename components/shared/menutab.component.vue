<template>
  <div class="d-flex rounded-xl">
    <v-tabs color="primary" show-arrows background-color="transparent">
      <v-tab
        v-for="(item, i) in lista"
        :key="i"
        :to="item.url"
        @click="getAnimation(item.animate)"
        router
        class="font-weight-black"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    lista: {
      type: Array,
      default: () => [
        {
          icon: 'mdi-apps',
          title: 'title1',
          url: '/presentation',
          animate: 1,
        },
      ],
    },
    listaConfig: {
      type: Array,
      default: () => [
        {
          chckboxEffects: true,
          label: 'Sonido Interactivo',
          color: '',
        },
        {
          chckboxWallpaper: false,
          label: 'Sonido de Fondo',
          color: '',
        },
      ],
    },
  },
  computed: {
    ...mapState({
      stateWaveActive: (state) => state.wallpaper.waveActive,
    }),
  },
  methods: {
    ...mapMutations({
      switchWaveActive: 'wallpaper/changeWaveActive',
    }),
    getAnimation(val) {
      if (val) {
        this.switchWaveActive(val)
      } else {
        this.switchWaveActive(val)
      }
    },
  },
}
</script>
