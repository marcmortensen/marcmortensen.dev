<template>
  <div>
    <TheHeader class="z-70" :show-menu="showMenu" @toggle-menu="toggleMenu" />
    <Transition
      enter-active-class="transition-opacity duration-150"
      leave-active-class="transition-opacity duration-150"
      enter-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <TheMenu v-if="showMenu" class="z-60" />
    </Transition>
    <main class="min-h-screen-height-header w-full">
      <div class="">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/index.vue';
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
    showMenu() {
      this.showFloatingContactForm = false;
    },
  },
  methods: {
    toggleMenu() {
      if (this.showMenu) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>
