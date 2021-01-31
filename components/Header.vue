<template>
  <nav class="flex items-center justify-between flex-no-wrap p-6">
    <client-only>
      <NuxtLink
        v-if="pageName === 'about-me'"
        to="/project-overview/cell-counter"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
      >
        Projects
      </NuxtLink>

      <NuxtLink
        v-if="pageName !== 'about-me'"
        to="/about-me"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
      >
        About Me
      </NuxtLink>
    </client-only>
  </nav>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
