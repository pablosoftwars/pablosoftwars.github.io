<template>
  <v-container>
    <presentation></presentation>
    <br />
    <education></education>
    <br />
    <idiom></idiom>
  </v-container>
</template>
<script>
import Presentation from '~/components/presentation/Presentation.component.vue'
import Education from '~/components/presentation/Education.component.vue'
import Idiom from '~/components/presentation/Idiom.component.vue'
export default {
  head: {
    titleTemplate: '%s | Presentacion',
  },
  components: {
    Presentation,
    Education,
    Idiom,
  },
  transition: 'slide-x-transition',
}
</script>
