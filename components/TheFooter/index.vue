<template>
  <footer>
    <div class="border-t border-gray-dark">
      <div class="py-6 px-4 container flex">
        <div class="hidden sm:block text-12 tracking-90">
          {{ `© ${new Date().getFullYear()} Marc Mortensen. Built with` }}
          <AppLink :href="githubProject" target="_blank" rel="noreferrer">
            {{ 'Vue & Nuxt.' }}
          </AppLink>
        </div>
        <div class="flex-grow hidden sm:block" />
        <div
          class="text-12 tracking-90 text-center sm:text-right flex-grow sm-flex-grow-0"
        >
          <template v-for="(link, index) in bottomLinks">
            <AppLink :key="link.key" v-bind="link.props">{{
              link.text
            }}</AppLink
            ><span
              v-if="index !== bottomLinks.length - 1"
              :key="index"
              class="px-1"
              >|</span
            >
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLink from '@/components/AppLink/index.vue';

export default {
  components: {
    AppLink,
  },
  data() {
    return {
      githubProject: `${process.env.githubProfileUrl}/marcmortensen.dev`,
    };
  },
  computed: {
    bottomLinks() {
      return [
        {
          key: 'legalNoticeAndCookies',
          props: {
            to: 'legal-notice',
          },
          text: 'Legal notice & Cookies',
        },
        {
          key: 'sitemap',
          props: {
            href: '/sitemap.xml',
            target: '_blank',
          },
          text: 'Sitemap',
        },
      ];
    },
  },
};
</script>
