<template>
  <div class="" style="background-color: antiquewhite">
    <base-text-arc
      :text="titleProject"
      class-name="title-cellCounter"
      @mouseover.native="mouseOver"
      @mouseleave.native="mouseLeave"
    />
    <p>{{ 'applyZoom is ' + applyZoom }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleProject: 'CELL COUNTER',
      applyZoom: false,
    };
  },
  created() {
    this.$store.commit('page/setName', 'project-overview/cell-counter');
  },
  methods: {
    mouseOver() {
      this.applyZoom = true;
    },
    mouseLeave() {
      this.applyZoom = false;
    },
  },
};
</script>
<style>
.title-cellCounter {
  color: #111;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
}
</style>
