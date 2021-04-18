<template>
  <nav
    class="sticky w-full h-13 top-0 border-b bg-white flex justify-evenly items-center"
  >
    <NuxtLink
      to="/"
      class="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white hover:text-primary"
      :class="currentPage === '/' ? 'text-primary' : 'text-black'"
    >
      Marc Mortensen
    </NuxtLink>

    <NuxtLink
      to="/about-me"
      class="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white hover:text-primary"
      :class="currentPage === 'about-me' ? 'text-primary' : 'text-black'"
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
