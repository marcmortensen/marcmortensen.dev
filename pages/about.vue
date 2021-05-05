<template>
  <div class="lg:min-h-screen">
    <div
      class="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4 content-center pt-13"
    >
      <div
        class="row-start-2 row-span-2 lg:col-start-1 lg:row-start-1 flex items-center justify-center lg:w-full lg:h-screen-height-header lg:sticky lg:top-header"
      >
        <div
          class="h-4/5 w-4/5 py-5 sm:h-3/4 sm:w-3/4 lg:flex lg:justify-end lg:h-full lg:w-full lg:py-10"
        >
          <img
            alt="Marc Mortensen"
            :srcset="require('~/assets/img/MarcMortensen.jpg').srcSet"
            class="object-contain w-full h-full"
          />
        </div>
      </div>
      <div
        class="self-end row-start-1 col-start-1 lg:row-span-1 lg:row-start-1 lg:col-start-2"
      >
        <div class="py-5 lg:px-10 flex flex-col justify-center items-center">
          <h1 class="font-medium mb-0 text-65">Hello.</h1>
          <p class="font-medium text-30">I'm Marc Mortensen.</p>
        </div>
      </div>
      <div class="row-start-4 lg:row-span-1 lg:row-start-2 lg:col-start-2">
        <div class="flex flex-col justify-center py-5 items-center lg:px-10">
          <div class="font-light text-18 px-2 sm:px-5 my-4 max-w-lg">
            <p>
              A sotware developer passionate in web development and computer
              vision. Some of my work is open source and publicly available on
              <AppLink
                :href="githubProfileUrl"
                target="_blank"
                rel="noreferrer"
                class="hover:text-primary font-semibold"
                >Github.</AppLink
              >
            </p>
            <p class="my-4">
              Outside of programming, I enjoy reading, sports, video games and
              memes. Currently located in Girona (Spain).
            </p>
          </div>
          <p>You can find me at:</p>
          <div class="flex">
            <AppLink :href="`mailto:${email}`" target="_blank" rel="noreferrer"
              ><AppIcon class="w-10 h-10 text-black p-2 hover:text-primary">
                <IconMail /> </AppIcon
            ></AppLink>
            <AppLink :href="linkedinProfileUrl" target="_blank" rel="noreferrer"
              ><AppIcon class="w-10 h-10 text-black p-2 hover:text-primary">
                <IconLinkedin /> </AppIcon
            ></AppLink>

            <AppLink :href="githubProfileUrl" target="_blank" rel="noreferrer"
              ><AppIcon class="w-10 h-10 text-black p-2 hover:text-primary">
                <IconGithub /> </AppIcon
            ></AppLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink/index.vue';
import AppIcon from '@/components/AppIcon/index.vue';
import IconLinkedin from '@/components/Icon/Linkedin/index.vue';
import IconGithub from '@/components/Icon/Github/index.vue';
import IconMail from '@/components/Icon/Mail/index.vue';
export default {
  components: {
    AppLink,
    AppIcon,
    IconLinkedin,
    IconGithub,
    IconMail,
  },
  data() {
    return {
      githubProfileUrl: process.env.githubProfileUrl,
      email: process.env.email,
      linkedinProfileUrl: process.env.linkedinProfileUrl,
    };
  },
  created() {
    this.$store.commit('page/setName', 'about');
  },
  head() {
    return {
      title: 'About me | Marc Mortensen',
      description: 'Know more about what am I passionate about and my hobbies.',
    };
  },
};
</script>
