<template>
  <v-card flat class="primary rounded-xl pb-2">
    <v-card flat color="transparent">
      <v-card-title class="font-weight-black">
        <span class="caja-title">lenguajes</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <div v-for="(item, i) in listPrimary" :key="i" class="mt-4">
              <v-progress-circular
                color="teal darken-4"
                :value="item.value"
                size="100"
                width="10"
              >
                <v-icon x-large>{{ item.icon }}</v-icon>
              </v-progress-circular>
              <div class="text-center">
                <p class="title">{{ item.text }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat class="transparent">
      <v-card-title class="font-weight-black">
        <span class="caja-title">otras habilidades</span>
      </v-card-title>
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
              color="teal darken-4"
            >
              <v-icon x-large>{{ dataProgressCircle.icon }}</v-icon>
            </v-progress-circular>
            <p class="title text-uppercase mt-4">
              {{ dataProgressCircle.text }}
            </p>
            <p class="mt-n3">
              {{ dataProgressCircle.detalle }}
            </p>
          </v-col>

          <v-col cols="12" md="4" sm="4">
            <v-responsive class="overflow-y-auto" height="50vh">
              <v-list rounded color="transparent">
                <v-list-item-group
                  v-model="selectedItem"
                  active-class="tealdarken4-texto"
                >
                  <v-list-item
                    v-for="(item, i) in listSecondary"
                    :key="i"
                    two-line
                    @click="setProgressSkill(item)"
                    @mouseenter="
                      $vuetify.breakpoint.mobile ? '' : playSoundHover()
                    "
                  >
                    <v-list-item-icon>
                      <v-icon large>{{ item.icon }}</v-icon>
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
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import gsap from 'gsap'
export default {
  name: 'CardSkill',
  data() {
    return {
      valor: 0,
      tweenedNumber: 0,
      selectedItem: 1,
      valueProgress: 0,
      dataProgressCircle: {
        value: 0,
        text: '',
        detalle: '',
        icon: '',
      },
      listPrimary: [
        {
          icon: '$vuetify.icons.phpicon',
          text: 'php',
          detalle: 'Experiencia en Backend',
          value: '0',
        },
        {
          icon: '$vuetify.icons.jsicon',
          text: 'javascript',
          detalle: 'Experiencia en Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.sqlicon',
          text: 'sql',
          detalle: 'Manejo de Base de datos',
          value: '0',
        },
      ],
      listSecondary: [
        {
          icon: '$vuetify.icons.vueicon',
          text: 'vuejs',
          detalle: 'Libreria de javascript enfocada en Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.vuetifyicon',
          text: 'vuetify',
          detalle: 'Framework enfocado en de Material Design',
          value: '0',
        },
        {
          icon: '$vuetify.icons.nuxticon',
          text: 'nuxt',
          detalle: 'Framework para Vue enfocado en Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.laravelicon',
          text: 'laravel',
          detalle: 'Framework php para Backend',
          value: '0',
        },
        {
          icon: '$vuetify.icons.postmanicon',
          text: 'postman',
          detalle: 'Herramienta de monitoreo API para backend',
          value: '0',
        },
        {
          icon: '$vuetify.icons.htmlicon',
          text: 'html',
          detalle: 'Lenguaje de marcado Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.sassicon',
          text: 'sass',
          detalle: 'Lenguaje de hojas de estilo Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.cssicon',
          text: 'css',
          detalle: 'Lenguaje de hojas de estilo Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.bootstrapicon',
          text: 'bootstrap',
          detalle: 'Framework enfocado en de Material Design',
          value: '0',
        },
        {
          icon: '$vuetify.icons.archicon',
          text: 'arch',
          detalle: 'Sistema Operativo Linux',
          value: '0',
        },
        {
          icon: '$vuetify.icons.w10icon',
          text: 'windows',
          detalle: 'Sistem Operativo Windows',
          value: '0',
        },
        {
          icon: '$vuetify.icons.photoshopicon',
          text: 'photoshop',
          detalle: 'Editor de fotografìas',
          value: '0',
        },
        {
          icon: '$vuetify.icons.inkscapeicon',
          text: 'gimp',
          detalle: 'Editor de graficos vectoriales',
          value: '0',
        },
        {
          icon: '$vuetify.icons.gimpicon',
          text: 'gimp',
          detalle: 'Editor de fotografìas',
          value: '0',
        },
        {
          icon: '$vuetify.icons.giticon',
          text: 'git',
          detalle: 'Software de control de versiones',
          value: '0',
        },
        {
          icon: '$vuetify.icons.githubicon',
          text: 'github',
          detalle: 'Servicio web de control de versiones',
          value: '0',
        },
        {
          icon: '$vuetify.icons.gitlabicon',
          text: 'gitlab',
          detalle: 'Servicio web de control de versiones',
          value: '0',
        },
      ],
    }
  },
  computed: {
    animatedValor() {
      return this.tweenedNumber.toFixed(0)
    },
  },
  watch: {
    valor(newValue) {
      gsap.to(this.$data, {
        duration: 1,
        tweenedNumber: newValue,
      })
    },
  },
  mounted() {
    const self = this
    window.setTimeout(function () {
      self.setListPrimary()
      self.setListSecondary()
    }, 200)
    this.dataProgressCircle = this.listSecondary[this.selectedItem]
  },
  methods: {
    setProgressSkill(item) {
      this.dataProgressCircle = {
        value: item.value,
        text: item.text,
        detalle: item.detalle,
        icon: item.icon,
      }
      this.playSoundClick()
    },
    setListPrimary() {
      this.listPrimary[0].value = 75 // php
      this.listPrimary[1].value = 65 // js
      this.listPrimary[2].value = 75 // sql
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
      this.audio = new Audio(require('@/assets/sounds/hoverlist.ogg'))
      this.audio.play()
      this.audio.volume = 0.4
    },
    playSoundClick() {
      this.audio = new Audio(require('@/assets/sounds/writetext.ogg'))
      this.audio.play()
      this.audio.volume = 0.4
    },
  },
}
</script>
<style scoped>
.tealdarken4-texto {
  color: #004d40;
}
</style>
