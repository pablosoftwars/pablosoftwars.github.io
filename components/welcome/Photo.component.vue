<template>
  <v-card flat class="transparent">
    <div class="photo-container d-flex align-center justify-center">
      <img class="photo-frame" src="~/static/profile-photo.png" alt="photo" />
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
  height: 150px;
  width: 150px;
}
.photo-container {
  position: relative;
  z-index: 2;
  height: 242px;
}
.photo-background {
  position: absolute;
  left: 50%;
  z-index: -1;
  border-radius: 50%;
  overflow: hidden;
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
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: 2px solid black;
  z-index: -1;
}
</style>
