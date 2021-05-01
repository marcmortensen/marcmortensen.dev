<template>
  <header
    class="z-10 fixed w-full top-0 flex h-13 lg:bg-white lg:border-b lg:border-gray-dark"
  >
    <div class="flex-grow"></div>
    <nav class="hidden lg:block">
      <ul class="h-full flex items-center">
        <li v-for="(route, index) in routes" :key="index" class="h-full">
          <AppLink
            v-bind="route"
            class="transition-opacity duration-150 flex h-full items-center px-4 hover:opacity-100 opacity-60"
            ><div
              :class="
                currentPage === route.route
                  ? 'text-primary opacity-100'
                  : 'text-black'
              "
              class="uppercase text-15 tracking-150 truncate hover:text-black focus:text-black"
            >
              {{ route.label }}
            </div></AppLink
          >
        </li>
      </ul>
    </nav>

    <button
      class="lg:hidden h-full w-16 cursor-pointer relative focus:outline-none text-black"
      :title="showMenu ? 'Close' : 'Open'"
      @click="$emit('toggle-menu')"
    >
      <div
        class="transition-opacity duration-150 absolute inset-0 flex justify-center items-center text-gray-dark"
        :class="showMenu ? 'opacity-100' : 'opacity-0'"
      >
        <AppIcon class="w-10 h-10 text-black p-2">
          <IconClose />
        </AppIcon>
      </div>
      <div
        class="transition-opacity duration-150 absolute inset-0 flex justify-center items-center text-gray-dark"
        :class="showMenu ? 'opacity-0' : 'opacity-100'"
      >
        <AppIcon class="w-10 h-10 text-black bg-white p-2 rounded-full border">
          <IconMenu class="w-8 h-8" />
        </AppIcon>
      </div>
    </button>
  </header>
</template>

<script>
import AppIcon from '@/components/AppIcon/index.vue';
import AppLink from '@/components/AppLink/index.vue';
import IconClose from '@/components/Icon/Close/index.vue';
import IconMenu from '@/components/Icon/Menu/index.vue';
import { routes } from '@/utils/menu.js';

export default {
  components: {
    AppIcon,
    IconMenu,
    AppLink,
    IconClose,
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
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
};
</script>
