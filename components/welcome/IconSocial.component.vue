<template>
  <v-card flat class="transparent text-center">
    <v-card-actions class="d-flex flex-wrap align-center justify-center">
      <v-tooltip v-for="(item, i) in listContact" :key="i" bottom color="teal">
        <template #activator="{ on, attrs }">
          <v-btn
            :aria-label="item.description"
            color="blue-grey darken-4"
            outlined
            x-large
            class="mx-5 my-2 iconos"
            icon
            link
            :href="item.url"
            v-bind="attrs"
            v-on="on"
            @mouseenter="$vuetify.breakpoint.mobile ? '' : playSoundHover()"
            @click="playSoundClick()"
          >
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ item.tooltip }}</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      audioEffectsClick: null,
      audioEffectsHover: null,
      listContact: [
        {
          icon: '$vuetify.icons.gmailicon',
          tooltip: 'Email: pablquir@gmail.com',
          url: 'mailto:pablquir@gmail.com',
          description: 'link de correo gmail',
        },
        {
          icon: '$vuetify.icons.whatsappicon',
          tooltip: 'Whatsapp: 591 75544663',
          url: 'https://wa.me/59175544663',
          description: 'link de mensajeria whatsapp',
        },
        {
          icon: '$vuetify.icons.githubicon',
          tooltip: 'https://github.com/pablosoftwars/pablosoftwars.github.io',
          url: 'https://github.com/pablosoftwars/pablosoftwars.github.io',
          description: 'link de red social para desarrolloadores github',
        },
        {
          icon: '$vuetify.icons.linkedinicon',
          tooltip: 'https://www.linkedin.com/in/pablo-quiroz-7b6181176',
          url: 'https://www.linkedin.com/in/pablo-quiroz-7b6181176',
          description: 'link de red social de curriculums linkedin',
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
    this.animateIconsSocial()
  },
  methods: {
    animateIconsSocial() {
      this.$gsap.from('.iconos', {
        opacity: 0,
        scale: 2,
        stagger: 0.3,
        ease: 'bounce',
      })
    },
    playSoundHover() {
      if (this.stateSoundEffect) {
        this.audioEffectsHover.currentTime = 0
        this.audioEffectsHover.play()
        this.audioEffectsHover.volume = 0.2
      }
    },
    playSoundClick() {
      if (this.stateSoundEffect) {
        this.audioEffectsClick.currentTime = 0
        this.audioEffectsClick.play()
        this.audioEffectsClick.volume = 0.2
      }
    },
    loadAudio() {
      this.audioEffectsHover = new Audio(
        require('@/assets/sounds/hoverlist.ogg')
      )
      this.audioEffectsClick = new Audio(require('@/assets/sounds/click.ogg'))
    },
  },
}
</script>
