<template>
  <v-app>
    <preload v-show="mostrarPreload"></preload>
    <v-main class="containers">
      <wallpaper></wallpaper>
      <v-container :class="[mostrarPreload ? 'layout-blur' : '']">
        <v-card
          style="background: transparent"
          class="rounded-xl overflow-hidden flex-grow-1"
          height="95vh"
          outlined
        >
          <v-app-bar flat color="transparent">
            <bar-title></bar-title>
            <v-spacer></v-spacer>
            <div class="d-flex">
              <tab-menu v-if="!$vuetify.breakpoint.mobile" :lista="listRoutes">
              </tab-menu>
              <config-menu></config-menu>
            </div>
          </v-app-bar>

          <v-responsive class="overflow-y-auto" max-height="95vh">
            <nuxt />
            <br />
            <br />
          </v-responsive>

          <float-menu v-if="$vuetify.breakpoint.mobile" :lista="listRoutes">
          </float-menu>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Preload from '~/components/preload.vue'
import Wallpaper from '~/components/shared/wallpaper.vue'
import BarTitle from '~/components/shared/bartitle.component.vue'
import TabMenu from '~/components/shared/menutab.component.vue'
import FloatMenu from '~/components/shared/menufloat.component.vue'
import ConfigMenu from '~/components/shared/menuconfig.component.vue'

export default {
  components: {
    Preload,
    BarTitle,
    TabMenu,
    FloatMenu,
    ConfigMenu,
    Wallpaper,
  },
  transition: 'scale-transition',
  data() {
    return {
      bgdark: 'rgba(12, 12, 12, 0.04)',
      bglight: 'rgba(213, 213, 213, 0.04)',
      mostrarPreload: true,
      audioEffectsHover: null,
      playStop: false,
      listRoutes: [
        {
          icon: 'mdi-apps',
          title: 'Bienvenido',
          url: '/',
          animate: true,
        },
        {
          icon: 'mdi-apps',
          title: 'Habilidades',
          url: '/skill',
          animate: false,
        },
        {
          icon: 'mdi-house',
          title: 'Experiencia',
          url: '/experience',
          animate: false,
        },
        {
          icon: 'mdi-apps',
          title: 'Presentacion',
          url: '/presentation',
          animate: false,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.mostrarPreload = false
      }, 300)
    })
  },
}
</script>
