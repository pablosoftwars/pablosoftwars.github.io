<template>
  <div class="d-flex">
    <!-- <span -->
    <!--   :class="[ -->
    <!--     $vuetify.theme.isDark ? 'caja-title-light' : 'caja-title-dark', -->
    <!--     'font-weight-bold', -->
    <!--   ]" -->
    <!-- > -->
    <!--   {{ title }} -->
    <!-- </span> -->
    <!-- <span -->
    <!--   v-for="i in 4" -->
    <!--   :key="i" -->
    <!--   :class="[ -->
    <!--     $vuetify.theme.isDark -->
    <!--       ? 'caja-title-space-light' -->
    <!--       : 'caja-title-space-dark', -->
    <!--   ]" -->
    <!-- ></span> -->
    <div class="box-title">
      <span class="title">{{ title }}</span>
    </div>
    <div class="box-item-square">
      <div class="item-square"></div>
      <div class="item-square"></div>
      <div class="item-square"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Curriculum',
    },
  },
}
</script>
<style scoped>
.box-item-square {
  position: relative;
  display: flex;
  margin-left: 21px;
}
.item-square {
  border-radius: 3px;
  background-color: var(--v-secondary-base);
  padding: 4px;
  height: 100%;
  width: 20px;
  margin-right: 4px;
  transform: skew(30deg);
}
</style>
