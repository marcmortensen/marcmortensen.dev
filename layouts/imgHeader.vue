<template>
  <div class="min-h-screen overflow-x-hidden flex flex-grow flex-col">
    <main class="h-screen flex flex-col-reverse sm:flex-col">
      <div class="header">
        <client-only>
          <img
            class="sm:hidden block w-full profilePicture"
            :alt="header.alt"
            :src="header.imagePath"
          />
          <Header
            :page-name="pageName"
            class="w-full sm:relative left-0 top-0"
          ></Header>
        </client-only>
      </div>
      <Nuxt class="" />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    pageName() {
      return this.$store.getters['page/getName'];
    },
    header() {
      return this.$store.getters['page/getHeader'];
    },
  },
};
</script>

<style>
html {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

.profilePicture {
  object-fit: cover;

  width: 100%;
  height: 200px;
}
</style>
