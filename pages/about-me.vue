<template>
  <div class="flex flex-col flex-grow justify-center">
    <div class="flex items-center">
      <div class="container">
        <h1>Hello.</h1>
        <p style="font-weight: 500; font-size: 2.2em">I'm Marc Mortensen.</p>
        <p>
          A sotware developer interested in web development and Computer vision.
          Some of my work is open source and publicly available on
          <a href="https://github.com/marcmortensen" target="_blank">GitHub</a>.
        </p>
        <p>
          Outside of programming, i enjoy video games, memes and reading.
          Currently located in Girona (Spain), feel free to drop me an email at
          marcmortensen77[at]gmail[dot]com.
        </p>
      </div>
      <div class="hidden sm:block p-10">
        <img
          class="w-full"
          alt="Marc Mortensen"
          :src="require('~/assets/img/MarcMortensen.jpeg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
const header = {
  imagePath: require('~/assets/img/MarcMortensen.jpeg'),
  alt: 'Marc Mortensen',
};

export default {
  layout: 'imgHeader',
  created() {
    this.$store.commit('page/setName', 'about-me');
    this.$store.commit('page/setHeader', header);
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
h1 {
  font-size: 4.5em;
  font-weight: 500;
  margin-bottom: 0;
}

.links {
  padding-top: 15px;
}

p {
  font-size: 1.3em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 26em;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
