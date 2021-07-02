<template>
  <v-card flat class="transparent">
    <div class="photo-container d-flex align-center justify-center">
      <v-avatar size="180">
        <v-img
          class="photo-frame"
          src="fotoperfil.png"
          lazy-src="fotoperfil.png"
          alt="photo"
          aspect-ratio="1"
        ></v-img>
      </v-avatar>
      <div class="circle-container">
        <div class="circle-item"></div>
        <div class="circle-item"></div>
        <div class="circle-item"></div>
        <div class="circle-item"></div>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  mounted() {
    this.animateFramePhoto()
  },
  methods: {
    animateFramePhoto() {
      const tl = this.$gsap.timeline()
      tl.to('.circle-item', {
        duration: 2,
        borderRadius:
          'random([40%, 70%]) random([40%, 70%]) random([40%, 70%]) random([40%, 70%])',
        ease: 'linear',
        rotation: 'random(100, 360)',
        repeat: -1,
        repeatRefresh: true,
      })
    },
  },
}
</script>
<style scoped>
.photo-frame {
  border-radius: 50%;
}
.photo-container {
  position: relative;
  z-index: 2;
  height: 242px;
}
.circle-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
}

.circle-item {
  position: absolute;
  height: 190px;
  width: 190px;
  border-radius: 50%;
  background-color: var(--v-background-base);
  opacity: 0.5;
  z-index: -1;
}
</style>
