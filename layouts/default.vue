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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
