<template>
  <div class="bg-white">
    <div class="w-full max-h-3/4 h-full flex justify-end">
      <div class="w-full flex h-full justify-center">
        <div class="h-16 lg:h-32 w-full flex justify-center relative z-20">
          <div class="border lg:border-4 h-full text-black bg-black"></div>
          <div class="absolute top-full -mt-20 lg:-mt-12">
            <Lamp
              class="scale-50 lg:scale-75"
              bg-color="#ffffff"
              :light-color="ligthColorGood"
              reflection-color="#FCFCF7"
              :on="active"
            />
          </div>
        </div>
        <div class="h-64 w-full flex justify-center relative">
          <div class="border lg:border-4 h-full text-black z-20 bg-black"></div>
          <div class="absolute top-full -mt-20 lg:-mt-11">
            <Lamp
              class="scale-50 lg:scale-75"
              bg-color="#ffffff"
              :light-color="ligthColorNeutral"
              reflection-color="#FCFCF7"
              :on="active"
            />
          </div>
        </div>
        <div class="h-32 lg:h-128 w-full flex justify-center relative">
          <div class="border lg:border-8 h-full text-black bg-black"></div>
          <div class="absolute top-full -mt-20 lg:-mt-12">
            <Lamp
              class="scale-50 lg:scale-100"
              bg-color="#ffffff"
              :light-color="ligthColorBad"
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
import { LampTypes } from '@/config/lamp';
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
  data() {
    return {
      ligthColorGood: LampTypes.GOOD.color,
      ligthColorBad: LampTypes.BAD.color,
      ligthColorNeutral: LampTypes.NEUTRAL.color,
    };
  },
};
</script>

<style>
.project-background-scale {
  transform: scale(1.2);
  transform-origin: top center;
}
</style>
