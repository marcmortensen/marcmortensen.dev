<template>
  <div>
    <p>Project Displayer</p>
  </div>
</template>

<script>
export default {
  props: {
    projectTitle: {
      type: String,
      required: true,
    },
    nextProject: {
      type: String,
      required: true,
    },
    previousProject: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
