<template>
  <div>
    <div class="text-30 lg:text-65 my-1">{{ title }}</div>
    <ul class="flex mb-8">
      <li
        v-for="(technology, index) in technologies"
        :key="index"
        class="flex items-center"
      >
        <AppIcon class="w-10 h-10 mr-4 mx-2" :icon-name="technology.name"
          ><Component :is="technology.icon"
        /></AppIcon>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon/index.vue';
export default {
  components: {
    AppIcon,
  },
  props: {
    title: {
      type: String,
      mandatory: true,
      default: 'Foo Title',
    },
    technologies: {
      type: Array,
      mandatory: false,
      default: () => [],
    },
  },
};
</script>
