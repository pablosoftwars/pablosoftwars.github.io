<template>
  <svg
    version="1.1"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref="linedot"
      d="M100 0 V100"
      fill="none"
      :stroke="colorLine"
      stroke-width="2"
      stroke-dasharray="5, 5"
      stroke-linecap="round"
    />
  </svg>
</template>
<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 200,
    },
    height: {
      type: [Number, String],
      default: 200,
    },
    colorLine: {
      type: String,
      default: 'black',
    },
  },
  mounted() {
    this.lineAnimate()
  },
  methods: {
    lineAnimate() {
      const gsap = this.$gsap
      const pathdot = this.$refs.linedot
      const l = pathdot.getTotalLength()

      gsap.to(pathdot, 5, { strokeDashoffset: -l, ease: 'linear', repeat: -1 })
    },
  },
}
</script>
