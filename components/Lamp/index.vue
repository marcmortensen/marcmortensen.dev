<template>
  <div class="transform rotate-180" :style="cssVars">
    <div class="lightbulb__container">
      <div class="lightbulb__bulb">
        <div class="lightbulb__bulb_inside"></div>
        <div class="lightbulb__bulb_bottom"></div>
      </div>
      <div class="lightbulb__base"></div>
      <div :class="on ? 'lightbulb__glow' : ''"></div>
      <div class="lightbulb__spiral"></div>
    </div>
  </div>
</template>

<script>
import { colorShade } from '@/utils/color';
export default {
  props: {
    bgColor: {
      type: String,
      mandatory: true,
      default: null,
    },
    lightColor: {
      type: String,
      mandatory: true,
      default: null,
    },
    reflectionColor: {
      type: String,
      mandatory: true,
      default: null,
    },
    on: {
      type: Boolean,
      mandatory: true,
      default: false,
    },
  },
  computed: {
    cssVars() {
      return {
        '--bg-color': this.bgColor,
        '--light': this.on
          ? colorShade(this.lightColor, 20)
          : colorShade(this.lightColor, -20),
        '--reflection': this.reflectionColor,
      };
    },
  },
};
</script>

<style scoped>
.lightbulb__container {
  position: relative;
  width: 15rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
.lightbulb__container .lightbulb__bulb {
  position: relative;
  width: 13rem;
  height: 13rem;
  background: var(--light);
  border-radius: 50%;
}
.lightbulb__container .lightbulb__bulb_inside {
  position: absolute;
  right: 1rem;
  top: 2rem;
  width: 8rem;
  height: 8rem;
  border-right: 1.15rem solid var(--reflection);
  border-radius: 50%;
  transform: rotateZ(-20deg);
}
.lightbulb__container .lightbulb__bulb_bottom {
  position: absolute;
  width: 10rem;
  height: 4rem;
  bottom: -1.5rem;
  left: calc(50% - 5rem);
  background: var(--light);
  border-radius: 0 0 1rem 1rem;
}
.lightbulb__container .lightbulb__bulb::before,
.lightbulb__container .lightbulb__bulb::after {
  content: '';
  display: block;
  position: absolute;
  z-index: 10;
  top: 73%;
  width: 8rem;
  height: 8rem;
  background: var(--bg-color);
}
.lightbulb__container .lightbulb__bulb::before {
  left: -41%;
  border-top-right-radius: 50%;
}
.lightbulb__container .lightbulb__bulb::after {
  right: -41%;
  border-top-left-radius: 50%;
}
.lightbulb__container .lightbulb__base {
  z-index: 30;
  position: absolute;
  bottom: 1.75rem;
  width: 7.25rem;
  height: 2.5rem;
  background: #888f98;
  border-radius: 0.5rem;
}
.lightbulb__container .lightbulb__glow {
  z-index: 20;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(-15%) scale(0.5);
  filter: blur(5rem);
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  background: radial-gradient(var(--light) 25%, transparent 80%);
  animation: glow 5s ease infinite;
}
.lightbulb__container .lightbulb__spiral {
  width: 5rem;
  height: 1.5rem;
  background: #7a828c;
  border-radius: 0.5rem;
  background-image: linear-gradient(180deg, transparent 45%, #565c64 10%);
  background-size: 50% 30%;
  margin-bottom: 5px;
}
@keyframes glow {
  0% {
    transform: translateX(-50%) translateY(-15%) scale(0.5);
  }
  50% {
    transform: translateX(-50%) translateY(-15%) scale(1.15);
  }
  100% {
    transform: translateX(-50%) translateY(-15%) scale(0.5);
  }
}
</style>
