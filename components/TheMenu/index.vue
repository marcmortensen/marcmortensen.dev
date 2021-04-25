<template>
  <div
    class="h-screen w-full flex flex-col fixed bg-white pt-13 justify-center"
  >
    <nav class="overflow-y-auto">
      <ul class="px-12 py-16">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="h-16 border-t border-gray-dark"
        >
          <AppLink
            class="transition-opacity duration-150 flex h-full w-full items-center hover:text-black opacity-60 hover:opacity-100"
            v-bind="section"
            :class="
              currentPage === section.route
                ? 'text-primary opacity-100'
                : 'text-black'
            "
            ><div
              class="uppercase text-15 tracking-150 truncate text-center w-full"
            >
              {{ section.label }}
            </div></AppLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink/index.vue';
export default {
  components: {
    AppLink,
  },
  data() {
    return {
      sections: [
        { to: '/', label: 'Marc Moretnsen', route: '/' },
        { to: '/about', label: 'About', route: 'about' },
        {
          href: 'mailto:marcmortensen1994@gmail.com',
          label: 'Contact me',
          target: '_blank',
          rel: 'noreferrer',
        },
      ],
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
