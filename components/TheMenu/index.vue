<template>
  <div
    class="h-screen w-full flex flex-col fixed bg-white pt-13 justify-center"
  >
    <nav class="overflow-y-auto">
      <ul class="px-12 py-16">
        <li
          v-for="(route, index) in routes"
          :key="index"
          class="h-16 border-t border-gray-dark"
        >
          <AppLink
            class="transition-opacity duration-150 flex h-full w-full items-center hover:text-black opacity-60 hover:opacity-100"
            v-bind="route"
            :class="
              currentPage === route.route
                ? 'text-primary opacity-100'
                : 'text-black'
            "
            ><div
              class="uppercase text-15 tracking-150 truncate text-center w-full"
            >
              {{ route.label }}
            </div></AppLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink/index.vue';
import { routes } from '@/utils/menu.js';
export default {
  components: {
    AppLink,
  },
  data() {
    return {
      routes,
    };
  },
  computed: {
    currentPage() {
      return this.$store.getters['page/getName'];
    },
  },
  mounted(item) {
    document.body.classList.add('menu-open');
  },
  destroyed(item) {
    document.body.classList.remove('menu-open');
  },
};
</script>
