<template>
  <v-card flat class="transparent text-center">
    <v-card-actions class="d-flex align-center justify-center">
      <v-tooltip v-for="(item, i) in listContact" :key="i" bottom color="teal">
        <template #activator="{ on, attrs }">
          <v-btn
            color="blue-grey darken-4"
            outlined
            x-large
            class="mx-5 iconos"
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
          icon: 'mdi-gmail',
          tooltip: 'Email: pablquir@gmail.com',
          url: 'mailto:pablquir@gmail.com',
        },
        {
          icon: 'mdi-phone',
          tooltip: 'Whatsapp: 591 75544663',
          url: 'https://wa.me/59175544663',
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
        y: -10,
        opacity: 0,
        stagger: 0.2,
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
