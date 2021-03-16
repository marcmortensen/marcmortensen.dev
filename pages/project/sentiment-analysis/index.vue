<template>
  <div
    class="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-2 content-center"
  >
    <div class="order-2 lg:order-1 bg-primary mt-20 lg:mt-0">
      <div
        class="min-screen-height-header-extra lg:min-h-screen-height-header flex flex-col p-5 justify-end"
      >
        <div class="w-full h-full">
          <ProjectIntro
            :title="project.title"
            :technologies="project.technologies"
          />
          <div class="text-20 space-y-2">
            <p>
              The aim of this project was to take a look at AI, because AI can
              be a lot of things I focused on something very unique and easy to
              understand. How can i make a program that understands a message
              and it's able to classify it into 3 categories:
              <span
                class="text-lamp-type-good"
                @mouseenter="lamps = [LampTypes.GOOD.id]"
                @mouseleave="lamps = []"
                >good</span
              ><span>, </span
              ><span
                class="text-lamp-type-bad"
                @mouseenter="lamps = [LampTypes.BAD.id]"
                @mouseleave="lamps = []"
                >bad</span
              ><span>, </span>
              <span
                class="text-lamp-type-neutral"
                @mouseenter="lamps = [LampTypes.NEUTRAL.id]"
                @mouseleave="lamps = []"
                >neutral</span
              ><span>.</span>
            </p>
            <p>
              I had to start somewhere so i decided to use tweets instead of
              texts of variable size (this simplified the following steps). So
              after reading on the internet i saw that i needed to feed a lot of
              data into an AI and then the AI would simply make the connections
              needed to classify as best as posible other tweets. I tried
              creating my own dataset with tweets the only issue was that it was
              too tiresome and too slow for my taste. I wanted to go BIG, so
              after a couple of hours searching i found two public datasets of
              tweets already classied, yay! 1.500.000 tweets, now we're
              talking!.
            </p>
            <p>After the model was trained, i began testing it:</p>
          </div>
        </div>
      </div>
      <div
        class="min-h-screen flex justify-center align-middle text-center items-center"
      >
        <div class="text-20 space-y-2 px-5">
          <ul
            class="text-30 sm:text-40 md:text-50 lg:text-40 xl:text-65 space-y-7"
          >
            <li
              class="hover:text-lamp-type-good"
              @mouseenter="lamps = [LampTypes.GOOD.id]"
              @mouseleave="lamps = []"
            >
              I love my dog.
            </li>
            <li
              class="hover:text-lamp-type-bad"
              @mouseenter="lamps = [LampTypes.BAD.id]"
              @mouseleave="lamps = []"
            >
              Terrible service.
            </li>
            <li
              class="hover:text-lamp-type-neutral"
              @mouseenter="lamps = [LampTypes.NEUTRAL.id]"
              @mouseleave="lamps = []"
            >
              It's ok, I guess.
            </li>
            <li
              class="hover:text-lamp-type-bad"
              @mouseenter="lamps = [LampTypes.BAD.id]"
              @mouseleave="lamps = []"
            >
              Tomorrow is Monday.
            </li>
            <li
              class="hover:text-lamp-type-good"
              @mouseenter="lamps = [LampTypes.GOOD.id]"
              @mouseleave="lamps = []"
            >
              I love to pay taxes.
            </li>
          </ul>
        </div>
      </div>
      <div class="text-20 space-y-2 px-5">
        <div class="text-35 my-5">Conclusions:</div>
        <p>
          The results were pretty awasome, for the most part it worked as
          expected, but there were some behaviours to iron out, for example, I
          exclusevily rely on the neural network to do all the work, I could
          really use a henchman (a.k.a antother algorithm) to work alongside to
          find a solution using other methods such as diccionariries or other
          neural networks.
        </p>
        <p>
          As for sentences, ironic or sarcastic are pretty much out of the scope
          of this project it adds a whole level of complexity, but i would lie
          if i don't smirk when "I love to pay taxes" is marked as positeve.
        </p>
      </div>
      <div class="text-20 space-y-2 px-5">
        <div class="text-35 mb-5 mt-20">End note:</div>
        <p>
          Sentiment analisis is not new, and it is still being used to gather
          data on product reviews or opinions on a topic, there is a huge
          interest in getting this kind of information. On the WEB there are
          tons of infromation on how to approach this problem, i would recommend
          don't get hasty and play with it, it's fun once you get the hang of
          it!.
        </p>
      </div>

      <div
        class="h-60 md:h-80 flex justify-center text-35 space-y-2 px-5 items-end"
      >
        <span> Check next project </span>
      </div>
    </div>
    <div
      class="bg-gray order-1 lg:order-2 w-full fixed h-20 lg:min-h-screen-height-header overflow-hidden lg:sticky lg:top-header"
    >
      <div class="w-full h-full flex justify-end">
        <div class="w-full flex h-full justify-center">
          <div class="h-4 lg:h-128 flex justify-center relative w-1/3">
            <div class="border-2 lg:border-8 h-full"></div>
            <div class="absolute top-full -mt-32 lg:-mt-12">
              <Lamp
                class="scale-25 lg:scale-100"
                bg-color="#d4d4d4"
                :light-color="LampTypes.GOOD.color"
                reflection-color="#FCFCF7"
                :on="
                  lamps.filter((lamptype) => lamptype === LampTypes.GOOD.id)
                    .length > 0
                "
              />
            </div>
          </div>
          <div class="h-4 lg:h-32 flex justify-center relative w-1/3">
            <div class="border-2 lg:border-4 h-full"></div>
            <div class="absolute top-full -mt-32 lg:-mt-12">
              <Lamp
                class="scale-25 lg:scale-75"
                bg-color="#d4d4d4"
                :light-color="LampTypes.NEUTRAL.color"
                reflection-color="#FCFCF7"
                :on="
                  lamps.filter((lamptype) => lamptype === LampTypes.NEUTRAL.id)
                    .length > 0
                "
              />
            </div>
          </div>
          <div class="h-4 lg:h-80 flex justify-center relative w-1/3">
            <div class="border-2 h-full"></div>
            <div class="absolute top-full -mt-32 lg:-mt-24">
              <Lamp
                class="scale-25 lg:scale-50"
                bg-color="#d4d4d4"
                :light-color="LampTypes.BAD.color"
                reflection-color="#FCFCF7"
                :on="
                  lamps.filter((lamptype) => lamptype === LampTypes.BAD.id)
                    .length > 0
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lamp from '@/components/Lamp/index.vue';
import ProjectIntro from '@/components/Project/Intro/index.vue';
import { sentimentAnalysis } from '@/utils/project';
import { LampTypes } from '@/config/lamp';

export default {
  layout: 'project',
  components: {
    Lamp,
    ProjectIntro,
  },
  data() {
    return {
      project: sentimentAnalysis,
      lamps: [],
      LampTypes,
    };
  },
  created() {
    this.$store.commit('lastProjectSeen/setIndex', sentimentAnalysis.index);
  },
};
</script>
