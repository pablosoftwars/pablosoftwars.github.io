<template>
  <v-card flat class="transparent pb-2">
    <v-card flat class="transparent">
      <div class="d-flex">
        <div
          :class="[$vuetify.breakpoint.mobile ? 'ml-1' : 'ml-4', 'box-title']"
        >
          <span class="title">Otras Habilidades</span>
        </div>
      </div>
      <v-divider class="ml-4"></v-divider>

      <br />

      <v-card-text>
        <v-row no-gutters class="mx-5">
          <v-col
            cols="12"
            md="8"
            sm="8"
            class="d-flex flex-column align-center justify-center"
          >
            <v-progress-circular
              size="200"
              width="40"
              :value="dataProgressCircle.value"
              color="primary"
            >
              <v-icon x-large>
                {{ dataProgressCircle.icon }}
              </v-icon>
            </v-progress-circular>
            <div class="mt-4">
              <v-chip outlined>
                <span class="mr-2 primary--text title font-weight-bold">
                  {{ dataProgressCircle.type }}
                </span>
                <v-divider vertical></v-divider>
                <span class="ml-2 title">
                  {{ dataProgressCircle.text }}
                </span>
              </v-chip>
            </div>
            <span class="title mt-4">
              {{ dataProgressCircle.detalle }}
            </span>
          </v-col>

          <v-col cols="12" md="4" sm="4">
            <v-card
              class="rounded-xl overflow-y-auto"
              style="background: transparent"
              outlined
            >
              <v-responsive class="overflow-y-auto transparent" height="50vh">
                <v-list rounded class="transparent">
                  <v-list-item-group
                    v-model="selectedItem"
                    active-class="primary--text"
                  >
                    <v-list-item
                      v-for="(item, i) in listSecondary"
                      :key="i"
                      two-line
                      @click="setProgressSkill(item)"
                      @mouseover="
                        $vuetify.breakpoint.mobile ? '' : playSoundHover()
                      "
                      @mouseleave="
                        $vuetify.breakpoint.mobile ? '' : stopSoundHover()
                      "
                    >
                      <v-list-item-icon>
                        <v-icon large>
                          {{ item.icon }}
                        </v-icon>
                      </v-list-item-icon>
                      <v-divider vertical></v-divider>
                      <v-list-item-content>
                        <v-list-item-title
                          class="title font-weight-regular text-center"
                        >
                          {{ item.text }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      audioEffectsHover: null,
      audioEffectsClick: null,
      selectedItem: 1,
      dataProgressCircle: {
        value: 0,
        text: '',
        type: '',
        detalle: '',
        icon: '',
      },
      listSecondary: [
        {
          icon: '$vuetify.icons.vueicon',
          text: 'Vuejs',
          type: 'Librería ',
          detalle: 'Javascript reactivo enfocado en Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.vuetifyicon',
          text: 'Vuetify',
          type: 'Framework',
          detalle:
            'Diseño de Material Design para Vue enfocado en el Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.nuxticon',
          text: 'Nuxt',
          type: 'Framework',
          detalle:
            'Diseñado para dar mas poder a Vue y es de codigo abierto enfocado en Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.laravelicon',
          text: 'Laravel',
          type: 'Framework',
          detalle:
            'Framework Php para aplicaciones web, enfocado en Back-End y Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.postmanicon',
          text: 'Postman',
          type: 'App de Escritorio',
          detalle: 'Herramienta de monitoreo API para Back-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.htmlicon',
          text: 'html',
          type: 'Lenguaje',
          detalle: 'Lenguaje de marcado Fron-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.sassicon',
          text: 'sass',
          type: 'Librería ',
          detalle: 'Lenguaje de hojas de estilo Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.cssicon',
          text: 'css',
          type: 'Librería ',
          detalle: 'Lenguaje de hojas de estilo Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.bootstrapicon',
          text: 'bootstrap',
          type: 'Librería ',
          detalle: 'Kit de Herramientas enfocado en Front-End',
          value: '0',
        },
        {
          icon: '$vuetify.icons.archicon',
          text: 'arch',
          type: 'Sistema Operativo',
          detalle: 'Sistema Operativo Linux',
          value: '0',
        },
        {
          icon: '$vuetify.icons.w10icon',
          text: 'windows 10',
          type: 'Sistema Operativo',
          detalle: 'Sistema Operativo Windows',
          value: '0',
        },
        {
          icon: '$vuetify.icons.photoshopicon',
          text: 'photoshop',
          type: 'App de Escritorio',
          detalle: 'Editor de fotografìas',
          value: '0',
        },
        {
          icon: '$vuetify.icons.inkscapeicon',
          text: 'gimp',
          type: 'App de Escritorio',
          detalle: 'Editor de graficos vectoriales',
          value: '0',
        },
        {
          icon: '$vuetify.icons.gimpicon',
          text: 'gimp',
          type: 'App de Escritorio',
          detalle: 'Editor de fotografìas',
          value: '0',
        },
        {
          icon: '$vuetify.icons.giticon',
          text: 'git',
          type: 'App de Escritorio',
          detalle: 'Software de control de versiones',
          value: '0',
        },
        {
          icon: '$vuetify.icons.githubicon',
          text: 'github',
          type: 'Plataforma Web',
          detalle: 'Servicio web de alojamiento de codigo',
          value: '0',
        },
        {
          icon: '$vuetify.icons.gitlabicon',
          text: 'gitlab',
          type: 'Plataforma Web',
          detalle: 'Servicio web de alojamiento de codigo',
          value: '0',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      stateSoundEffect: (state) => state.audio.stateSoundEffect,
    }),
  },
  mounted() {
    this.loadAudio()
    const self = this
    window.setTimeout(function () {
      self.setListSecondary()
    }, 200)
    this.dataProgressCircle = this.listSecondary[this.selectedItem]
  },
  methods: {
    setProgressSkill(item) {
      this.dataProgressCircle = {
        value: item.value,
        text: item.text,
        type: item.type,
        detalle: item.detalle,
        icon: item.icon,
      }
      this.playSoundClick()
    },
    setListSecondary() {
      this.listSecondary[0].value = 60 // vuejs
      this.listSecondary[1].value = 75 // vuetify
      this.listSecondary[2].value = 80 // nuxt
      this.listSecondary[3].value = 60 // laravel
      this.listSecondary[4].value = 40 // postman
      this.listSecondary[5].value = 90 // html
      this.listSecondary[6].value = 65 // sass
      this.listSecondary[7].value = 70 // css
      this.listSecondary[8].value = 70 // bootstrap
      this.listSecondary[9].value = 70 // arch
      this.listSecondary[10].value = 80 // w10
      this.listSecondary[11].value = 75 // photoshop
      this.listSecondary[12].value = 70 // inkscape
      this.listSecondary[13].value = 70 // gimp
      this.listSecondary[14].value = 75 // git
      this.listSecondary[15].value = 80 // github
      this.listSecondary[16].value = 70 // gitlab
    },
    playSoundHover() {
      // TODO (bug 1)
      if (this.stateSoundEffect) {
        this.audioEffectsHover.play()
        this.audioEffectsHover.volume = 0.2
      }
    },
    playSoundClick() {
      if (this.stateSoundEffect) {
        this.audioEffectsClick.currentTime = 0
        this.audioEffectsClick.play()
      }
    },
    stopSoundHover() {
      this.audioEffectsHover.currentTime = 0
      this.audioEffectsHover.pause()
    },
    loadAudio() {
      this.audioEffectsClick = new Audio(
        require('@/assets/sounds/writetext.ogg')
      )
      this.audioEffectsHover = new Audio(
        require('@/assets/sounds/hoverlist.ogg')
      )
    },
  },
}
</script>
