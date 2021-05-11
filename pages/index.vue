<template>
  <v-container>
    <photo></photo>
    <br />
    <profession></profession>
    <icon-social></icon-social>
  </v-container>
</template>
<script>
import Photo from '~/components/welcome/Photo.component.vue'
import Profession from '~/components/welcome/Profession.component.vue'
import IconSocial from '~/components/welcome/IconSocial.component.vue'
export default {
  components: {
    Photo,
    Profession,
    IconSocial,
  },
  transition: 'scroll-x-transition',
}
</script>
