<template>
  <nav
    :class="!displayHeader ? 'hidden' : ''"
    class="sticky w-full h-13 z-50 top-0 border-b bg-white flex justify-evenly items-center"
  >
    <NuxtLink
      to="/"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white hover:text-primary"
      :class="currentPage === '/' ? 'text-primary' : ''"
    >
      Marc Mortensen
    </NuxtLink>

    <NuxtLink
      to="/about-me"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white hover:text-primary"
      :class="currentPage === 'about-me' ? 'text-primary' : ''"
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
    displayHeader() {
      return this.$store.getters['isAtTop/getIsAtTop'];
    },
  },
};
</script>

<style></style>
