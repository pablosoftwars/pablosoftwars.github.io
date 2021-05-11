<template>
  <canvas id="mycanvas"></canvas>
</template>
<script>
export default {
  data() {
    return {
      test: 'prueba',
      canvas: null,
      ctx: null,
      wave: {
        y: 500,
        length: 0.01,
        amplitude: 80,
        frequency: 0.01,
      },
    }
  },
  mounted() {
    const lienzo = document.getElementById('mycanvas')
    const context = lienzo.getContext('2d')

    this.ctx = context
    this.canvas = lienzo

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.wave.y = this.canvas.height / 2

    this.increment = this.wave.frequency

    this.animate()
  },
  methods: {
    animate() {
      window.requestAnimationFrame(this.animate)

      this.ctx.fillStyle = 'rgba(230, 230, 230, 0.04)'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.moveTo(0, this.canvas.height / 2)

      for (let i = 0; i < this.canvas.width; i++) {
        this.ctx.lineTo(
          i,
          this.wave.y +
            Math.sin(i * this.wave.length + this.increment) *
              this.wave.amplitude *
              Math.sin(this.increment)
        )
      }
      this.ctx.strokeStyle = 'hsl(200, 19%, 18%)'
      this.ctx.stroke()
      this.increment += this.wave.frequency
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
