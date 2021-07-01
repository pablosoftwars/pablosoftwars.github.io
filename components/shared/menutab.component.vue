<template>
  <div class="d-flex rounded-xl">
    <v-tabs color="primary" show-arrows background-color="transparent">
      <v-tab
        v-for="(item, i) in lista"
        :key="i"
        :to="item.url"
        router
        class="font-weight-black"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
export default {
  props: {
    lista: {
      type: Array,
      default: () => [
        {
          icon: 'mdi-apps',
          title: 'title1',
          url: '/presentation',
        },
      ],
    },
    listaConfig: {
      type: Array,
      default: () => [
        {
          chckboxEffects: true,
          label: 'Sonido Interactivo',
          color: '',
        },
        {
          chckboxWallpaper: false,
          label: 'Sonido de Fondo',
          color: '',
        },
      ],
    },
  },
  mounted() {
    window.console.log(this.listaRuta)
  },
}
</script>
