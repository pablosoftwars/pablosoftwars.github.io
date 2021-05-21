<template>
  <v-card flat class="transparent rounded-xl pb-2">
    <v-card flat color="transparent">
      <v-card-title class="font-weight-black">
        <span class="caja-title">lenguajes</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="d-flex flex-wrap justify-space-around">
            <div v-for="(item, i) in listPrimary" :key="i" class="mt-4">
              <v-progress-circular
                color="teal darken-2"
                :value="item.value"
                size="100"
                width="10"
                class="mx-5"
              >
                <v-icon color="blue-grey darken-4" x-large>
                  {{ item.icon }}
                </v-icon>
              </v-progress-circular>
              <div class="text-center">
                <p class="title">{{ item.text }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
export default {
  name: 'CardSkill',
  data() {
    return {
      listPrimary: [
        {
          icon: '$vuetify.icons.phpicon',
          text: 'php',
          detalle: 'Experiencia en Backend',
          value: '0',
        },
        {
          icon: '$vuetify.icons.jsicon',
          text: 'javascript',
          detalle: 'Experiencia en Fronted',
          value: '0',
        },
        {
          icon: '$vuetify.icons.sqlicon',
          text: 'sql',
          detalle: 'Manejo de Base de datos',
          value: '0',
        },
      ],
    }
  },
  mounted() {
    const self = this
    window.setTimeout(function () {
      self.setListPrimary()
    }, 200)
  },
  methods: {
    setListPrimary() {
      this.listPrimary[0].value = 75 // php
      this.listPrimary[1].value = 65 // js
      this.listPrimary[2].value = 75 // sql
    },
  },
}
</script>
<style scoped>
.tealdarken4-texto {
  color: #004d40;
}
</style>
