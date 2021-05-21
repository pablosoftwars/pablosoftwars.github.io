<template>
  <v-container>
    <presentation></presentation>
    <br />
    <education></education>
  </v-container>
</template>
<script>
import Presentation from '~/components/presentation/Presentation.component.vue'
import Education from '~/components/presentation/Education.component.vue'
export default {
  components: {
    Presentation,
    Education,
  },
  transition: 'slide-x-transition',
}
</script>
