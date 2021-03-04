<template>
  <div class="bg-gray">
    <div class="w-full max-h-3/4 h-full flex justify-end">
      <div class="w-full flex h-full justify-center">
        <div class="h-16 lg:h-32 w-full flex justify-center relative z-20">
          <div class="border-2 lg:border-4 h-full text-black"></div>
          <div class="absolute top-full -mt-20 lg:-mt-12">
            <Lamp
              class="scale-50 lg:scale-75"
              bg-color="#d4d4d4"
              light-color="#FEFFBE"
              reflection-color="#FCFCF7"
              :on="active"
            />
          </div>
        </div>
        <div class="h-64 w-full flex justify-center relative">
          <div class="border-2 lg:border-4 h-full text-black z-0"></div>
          <div class="absolute top-full -mt-20 lg:-mt-12">
            <Lamp
              class="scale-50 lg:scale-75"
              bg-color="#d4d4d4"
              light-color="#ff0000"
              reflection-color="#FCFCF7"
              :on="active"
            />
          </div>
        </div>
        <div class="h-32 md:h-128 w-full flex justify-center relative">
          <div class="border-2 lg:border-8 h-full text-black"></div>
          <div class="absolute top-full -mt-20 lg:-mt-12">
            <Lamp
              class="scale-50 lg:scale-100"
              bg-color="#d4d4d4"
              light-color="#007300"
              reflection-color="#FCFCF7"
              :on="active"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lamp from '@/components/Lamp/index.vue';
export default {
  components: {
    Lamp,
  },
  props: {
    active: {
      type: Boolean,
      mandatory: true,
      default: false,
    },
  },
};
</script>

<style>
.project-background-scale {
  transform: scale(1.2);
  transform-origin: top center;
}
</style>
