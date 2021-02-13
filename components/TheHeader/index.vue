<template>
  <nav
    class="z-10 fixed w-full top-0 flex h-13 bg-white border-b border-solid border-gray-dark"
  >
    <NuxtLink
      to="/project-overview"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
    >
      Projects
    </NuxtLink>

    <NuxtLink
      to="/about-me"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
    >
      About Me
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.getters['page/getName'];
    },
  },
};
</script>

<style></style>
