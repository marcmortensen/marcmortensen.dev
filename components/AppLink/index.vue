<template>
  <component
    :is="component"
    v-bind="{ ...$attrs, ...props }"
    :class="component != 'div' ? 'hover:text-primary' : ''"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    component() {
      if (this.to) {
        return 'NuxtLink';
      } else if (this.href) {
        return 'a';
      }
      return 'div';
    },
    props() {
      return {
        ...(this.to
          ? {
              to: this.to,
            }
          : {}),
        ...(this.href
          ? {
              href: this.href,
            }
          : {}),
      };
    },
  },
};
</script>
