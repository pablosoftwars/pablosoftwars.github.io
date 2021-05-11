<template>
  <v-container color="transparent">
    <main-language></main-language>
    <br />
    <other-skill></other-skill>
    <br />
    <br />
    <br />
    <br />
  </v-container>
</template>
<script>
import MainLanguage from '~/components/skill/MainLanguage.component.vue'
import OtherSkill from '~/components/skill/OtherSkill.component.vue'
export default {
  components: {
    MainLanguage,
    OtherSkill,
  },
  transition: 'slide-x-transition',
}
</script>
