<template>
  <v-speed-dial direction="top" absolute bottom right transition="none">
    <template v-slot:activator>
      <v-btn fab class="primary">
        <v-icon>$vuetify.icons.menuicon</v-icon>
      </v-btn>
    </template>
    <div>
      <v-list
        rounded
        :color="
          $vuetify.theme.isDark
            ? 'rgba(12, 12, 12, 0.5)'
            : 'rgba(230, 230, 230, 0.5)'
        "
        elevation="4"
        style="border: 1px solid var(--v-secondary-base)"
        class="menu-float rounded-xl"
      >
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in lista"
            :key="i"
            :to="item.url"
            @click="setAnimation(item.animate)"
            class="title"
            router
          >
            <v-list-item-title class="text-uppercase">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-speed-dial>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    lista: {
      type: Array,
      default: () => [
        {
          icon: '$vuetify.icons.menuicon',
          title: 'title',
          url: '/presentation',
        },
      ],
    },
  },
  computed: {
    ...mapState({
      stateWaveActive: (state) => state.wallpaper.waveActive,
    }),
  },
  methods: {
    ...mapMutations({
      switchWaveActive: 'wallpaper/changeWaveActive',
    }),
    setAnimation(val) {
      if (val) {
        this.switchWaveActive(val)
      } else {
        this.switchWaveActive(val)
      }
    },
  },
}
</script>
<style scoped>
.container-menu-float {
  position: relative;
}
.menu-float-dark {
  background: rgba(12, 12, 12, 0.5);
}
.menu-float-light {
  background: rgba(213, 213, 213, 0.5);
}
.menu-float {
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-radius: 20px;
  position: absolute;
  bottom: 16px;
  right: 0px;
  backdrop-filter: blur(8px);
}
</style>
