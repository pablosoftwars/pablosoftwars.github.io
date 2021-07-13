<template>
  <div>
    <canvas id="mycanvas"></canvas>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      bgDark: 'rgba(12, 12, 12, 0.04)',
      bgLight: 'rgba(213, 213, 213, 0.04)',
      lineDark: 'rgba(12, 12, 12, 0.5)',
      lineLight: 'rgba(212, 212, 212, 0.5)',
      canvas: null,
      animateReq: null,
      ctx: null,
      wave: {
        y: 500,
        length: 0.01,
        amplitude: 80,
        frequency: 0.01,
        increment: 0,
      },
    }
  },
  computed: {
    ...mapState({
      stateWaveActive: (state) => state.wallpaper.waveActive,
    }),
    bgColorTheme() {
      if (this.wave.amplitude === 0) {
        return this.$vuetify.theme.isDark
          ? 'rgba(12,12,12,1)'
          : 'rgba(213,213,213,1)'
      }
      return this.$vuetify.theme.isDark ? this.bgDark : this.bgLight
    },
    lineColorTheme() {
      if (this.wave.amplitude === 0) {
        return 'transparent'
      }
      return this.$vuetify.theme.isDark ? this.lineLight : this.lineDark
    },
  },
  mounted() {
    this.canvas = document.getElementById('mycanvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.wave.y = this.canvas.height / 2

    this.animate()
  },
  methods: {
    animate() {
      this.animateReq = requestAnimationFrame(this.animate)
      if (this.stateWaveActive) {
        if (this.wave.amplitude !== 80) {
          this.wave.amplitude += 1
        }
      } else if (this.wave.amplitude !== 0) {
        this.wave.amplitude -= 1
      }
      this.createWave()
    },
    createWave() {
      this.ctx.beginPath()
      this.ctx.fillStyle = this.bgColorTheme
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.moveTo(0, this.canvas.height / 2)
      // this.ctx.lineTo(this.canvas.width, this.canvas.height / 2)
      for (let i = 0; i < this.canvas.width; i++) {
        this.ctx.lineTo(
          i,
          this.wave.y +
            Math.sin(i * this.wave.length + this.wave.increment) *
              this.wave.amplitude *
              Math.sin(this.wave.increment)
        )
      }
      this.ctx.strokeStyle = this.lineColorTheme
      this.ctx.stroke()
      this.wave.increment += this.wave.frequency
    },
  },
}
</script>
<style>
#mycanvas {
  position: fixed;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
