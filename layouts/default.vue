<template>
  <v-app dark>
    <preload v-show="mostrarPreload"></preload>
    <v-main class="containers">
      <wallpaper></wallpaper>

      <v-container :class="[mostrarPreload ? 'layout-blur' : '']">
        <v-card
          class="rounded-xl transparent overflow-hidden flex-grow-1"
          height="95vh"
        >
          <v-app-bar flat color="transparent">
            <span class="caja-title font-weight-bold">Curriculum</span>
            <span class="caja-title-space"></span>
            <span class="caja-title-space"></span>
            <span class="caja-title-space"></span>
            <v-spacer></v-spacer>
            <v-card flat color="transparent">
              <div v-if="$vuetify.breakpoint.mobile" class="text-center">
                <v-menu rounded="lg" absolute offset-y>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      outlined
                      aria-label="Menu de rutas y configuracion de sonido"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>$vuetify.icons.menuicon</v-icon>
                    </v-btn>
                  </template>
                  <v-list color="rgba(230, 230, 230, 0.9)">
                    <v-list-item-group
                      v-model="selectedListRoutes"
                      color="teal darken-2"
                    >
                      <v-list-item
                        v-for="(item, i) in listRoutes"
                        :key="i"
                        :to="item.to"
                        router
                        @mouseenter="
                          $vuetify.breakpoint.mobile ? 'playHover()' : ''
                        "
                        @click="playClick()"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                  <hr />
                  <v-list color="rgba(230, 230, 230, 0.9)">
                    <v-list-item-title>
                      <v-icon>$vuetify.icons.cogicon</v-icon> Configuracion
                    </v-list-item-title>
                    <v-list-item>
                      <v-checkbox
                        v-model="chckboxWallpaper"
                        label="sonido de fondo"
                        color="teal darken-2"
                        @change="switchSoundWallpaper()"
                      ></v-checkbox>
                    </v-list-item>
                    <v-list-item>
                      <v-checkbox
                        v-model="chckboxEffects"
                        label="sonido interactivo"
                        color="teal darken-2"
                        @change="switchSoundEffect()"
                      ></v-checkbox>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div v-else class="text-center">
                <v-tabs
                  color="teal darken-2"
                  show-arrows
                  background-color="transparent"
                >
                  <v-tab
                    v-for="(item, i) in listRoutes"
                    :key="i"
                    :to="item.to"
                    router
                    class="font-weight-black"
                    @mouseenter="$vuetify.breakpoint.mobile ? '' : playHover()"
                    @click="playClick()"
                  >
                    {{ item.title }}
                  </v-tab>
                  <v-menu rounded="lg" offset-y :close-on-content-click="false">
                    <template #activator="{ on, attrs }">
                      <v-btn
                        icon
                        aria-label="configuracion de sonido"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>$vuetify.icons.cogicon</v-icon>
                      </v-btn>
                    </template>
                    <v-list color="rgba(230, 230, 230, 0.8)">
                      <v-list-item>
                        <v-checkbox
                          v-model="chckboxWallpaper"
                          label="sonido de fondo"
                          color="teal darken-2"
                          @change="switchSoundWallpaper()"
                        ></v-checkbox>
                      </v-list-item>
                      <v-list-item>
                        <v-checkbox
                          v-model="chckboxEffects"
                          label="sonido interactivo"
                          color="teal darken-2"
                          @change="switchSoundEffect()"
                        ></v-checkbox>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-tabs>
              </div>
            </v-card>
          </v-app-bar>
          <v-responsive class="overflow-y-auto" max-height="100vh">
            <nuxt />
            <br />
            <br />
            <br />
            <br />
          </v-responsive>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Preload from '~/components/preload.vue'
import Wallpaper from '~/components/wallpaper.vue'

export default {
  components: {
    Preload,
    Wallpaper,
  },
  transition: 'scale-transition',
  data() {
    return {
      mostrarPreload: true,
      audioWallpaper: null,
      audioEffectsClick: null,
      audioEffectsHover: null,
      chckboxWallpaper: false,
      chckboxEffects: true,
      playStop: false,
      selectedListRoutes: 0,
      listRoutes: [
        {
          icon: 'mdi-apps',
          title: 'Bienvenido',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'Presentacion',
          to: '/presentation',
        },
        {
          icon: 'mdi-apps',
          title: 'Habilidades',
          to: '/skill',
        },
        {
          icon: 'mdi-house',
          title: 'Experiencia',
          to: '/experience',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      stateSoundWallpaper: (state) => state.audio.stateSoundWallpaper,
      stateSoundEffect: (state) => state.audio.stateSoundEffect,
    }),
  },
  mounted() {
    this.loadAudio()
    this.$nextTick(() => {
      setTimeout(() => {
        this.mostrarPreload = false
      }, 300)
    })
  },
  methods: {
    ...mapMutations({
      mutateStateSoundWallpaper: 'audio/changeStateSoundWallpaper',
      mutateStateSoundEffect: 'audio/changeStateSoundEffect',
    }),
    switchSoundWallpaper() {
      if (this.chckboxWallpaper) {
        this.playWallpaper()
      } else {
        this.stopWallpaper()
      }
    },
    switchSoundEffect() {
      this.mutateStateSoundEffect()
    },
    playHover() {
      if (this.stateSoundEffect) {
        this.audioEffectsHover.play()
        this.audioEffectsHover.volume = 0.2
      }
    },
    playClick() {
      if (this.stateSoundEffect) {
        this.audioEffectsClick.play()
        this.audioEffectsClick.volume = 0.2
      }
    },
    playWallpaper() {
      this.audioWallpaper.play()
      this.audioWallpaper.loop = true
      this.audioWallpaper.volume = 0.2
    },
    stopWallpaper() {
      this.audioWallpaper.currentTime = 0
      this.audioWallpaper.pause()
    },
    loadAudio() {
      this.audioWallpaper = new Audio(
        require('@/assets/sounds/backgroundbucle.ogg')
      )
      this.audioEffectsClick = new Audio(require('@/assets/sounds/click.ogg'))
      this.audioEffectsHover = new Audio(
        require('@/assets/sounds/hoverlist.ogg')
      )
    },
  },
}
</script>
<style scoped>
main {
  background-color: #e6e6e6;
}
</style>
