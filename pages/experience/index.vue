<template>
  <v-container>
    <item-job></item-job>
  </v-container>
</template>
<script>
import ItemJob from '~/components/experience/ItemJob.component.vue'
export default {
  head: {
    titleTemplate: '%s | Experiencia Laboral',
  },
  components: {
    ItemJob,
  },
  data() {
    return {}
  },
}
</script>
