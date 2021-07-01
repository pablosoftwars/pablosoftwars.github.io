<template>
  <v-menu rounded="xl" offset-y class="menu-config">
    <template #activator="{ on }">
      <v-btn aria-label="Menu de configuraciones" icon v-on="on">
        <v-icon>$vuetify.icons.cogicon</v-icon>
      </v-btn>
    </template>
    <v-card style="background: transparent">
      <v-list
        :color="
          $vuetify.theme.isDark
            ? 'rgba(12, 12, 12, 0.5)'
            : 'rgba(213, 213, 213, 0.5)'
        "
      >
        <v-list-item>
          <v-list-item-title>Configuracion</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-checkbox
            v-model="chckboxWallpaper"
            label="Sonido de Fondo"
            color="primary"
            @change="switchSoundWallpaper()"
          ></v-checkbox>
        </v-list-item>
        <v-list-item>
          <v-checkbox
            v-model="chckboxEffects"
            label="Sonido Interactivo"
            color="primary"
            @change="switchSoundEffect()"
          ></v-checkbox>
        </v-list-item>
        <v-list-item>
          <v-checkbox v-model="$vuetify.theme.dark" label="Modo Noche">
          </v-checkbox>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      audioWallpaper: null,
      audioEffectsClick: null,
      audioEffectsHover: null,
      chckboxWallpaper: false,
      chckboxEffects: true,
      chckboxThemeDark: false,
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
  },
  methods: {
    ...mapMutations({
      mutateStateSoundWallpaper: 'audio/changeStateSoundWallpaper',
      mutateStateSoundEffect: 'audio/changeStateSoundEffect',
    }),
    switchSoundEffect() {
      this.mutateStateSoundEffect()
    },
    switchSoundWallpaper() {
      if (this.chckboxWallpaper) {
        this.playWallpaper()
      } else {
        this.stopWallpaper()
      }
    },
    playHover() {
      if (this.stateSoundEffect) {
        this.audioEffectsHover.play()
        this.audioEffectsHover.volume = 0.2
      }
    },
    stopHover() {
      if (this.stateSoundEffect) {
        this.audioEffectsHover.currentTime = 0
        this.audioEffectsHover.pause()
      }
    },
    playClick() {
      if (this.stateSoundEffect) {
        this.audioEffectsClick.play()
        this.audioEffectsClick.volume = 0.2
      }
    },
    stopClick() {
      if (this.stateSoundEffect) {
        this.audioEffectsClick.currentTime = 0
        this.audioEffectsClick.pause()
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
.v-menu__content {
  border: 1px solid var(--v-secondary-base);
  backdrop-filter: blur(8px);
}
</style>
