<template>
  <div class="">
    <div
      id="start-project"
      class="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-2 content-center min-h-screen relative overflow-x-hidden"
    >
      <div
        :class="
          !hasScrolledPastFristPage
            ? ' z-20 h-3/4 absolute lg:fixed lg:mr-4'
            : ' z-50 h-20 top-0 bg-white lg:h-full fixed lg:mr-4'
        "
        class="order-2 w-full lg:row-span-2 lg:h-screen overflow-y-scroll overflow-x-hidden lg:overflow-y-hidden lg:top-0 lg:right-0 lg:w-1/2"
      >
        <div class="order-1 lg:order-2 w-full h-20 lg:h-full lg:max-h-full">
          <div class="w-full h-full flex justify-end">
            <div class="w-full flex h-full justify-center">
              <div
                class="lg:h-128 flex justify-center relative w-1/3 z-10"
                :class="!hasScrolledPastFristPage ? 'h-36' : ' h-4'"
              >
                <div class="border lg:border-8 h-full bg-black"></div>
                <div
                  class="absolute top-full lg:-mt-12"
                  :class="!hasScrolledPastFristPage ? '-mt-20' : ' -mt-32'"
                >
                  <Lamp
                    :class="!hasScrolledPastFristPage ? 'scale-50' : 'scale-25'"
                    class="lg:scale-100"
                    bg-color="#fff"
                    :light-color="LampTypes.GOOD.color"
                    reflection-color="#FCFCF7"
                    :on="
                      lamps.filter((lamptype) => lamptype === LampTypes.GOOD.id)
                        .length > 0
                    "
                  />
                </div>
              </div>
              <div
                class="lg:h-52 flex justify-center relative w-1/3"
                :class="!hasScrolledPastFristPage ? 'h-72' : ' h-4'"
              >
                <div class="border lg:border-8 h-full bg-black"></div>
                <div
                  class="absolute top-full lg:-mt-12"
                  :class="!hasScrolledPastFristPage ? '-mt-20' : ' -mt-32'"
                >
                  <Lamp
                    :class="!hasScrolledPastFristPage ? 'scale-50' : 'scale-25'"
                    class="lg:scale-75"
                    bg-color="#fff"
                    :light-color="LampTypes.NEUTRAL.color"
                    reflection-color="#FCFCF7"
                    :on="
                      lamps.filter(
                        (lamptype) => lamptype === LampTypes.NEUTRAL.id
                      ).length > 0
                    "
                  />
                </div>
              </div>
              <div
                class="lg:h-80 flex justify-center relative w-1/3"
                :class="!hasScrolledPastFristPage ? 'h-32' : ' h-4'"
              >
                <div class="border lg:border-2 h-full bg-black"></div>
                <div
                  class="absolute top-full lg:-mt-24"
                  :class="!hasScrolledPastFristPage ? '-mt-20' : ' -mt-32'"
                >
                  <Lamp
                    :class="!hasScrolledPastFristPage ? 'scale-50' : 'scale-25'"
                    class="lg:scale-50"
                    bg-color="#fff"
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
      <div
        class="z-30 lg:z-50 row-start-4 lg:row-span-2 lg:row-start-1 lg:col-start-1"
      >
        <AppLink to="/" class="bg-red">
          <AppScrollMark
            class="z-50 text-black hover:text-primary top-0 left-5"
            :downwards="false"
            display-text="RETURN"
          />
        </AppLink>
        <div
          class="relative flex flex-col justify-around lg:whitespace-nowrap h-screen items-center"
        >
          <div class="absolute bottom-16 left-16 lg:pt-32 lg:relative">
            <h2 class="text-25 sm:text-40 xl:text-100">
              {{ project.title }}
            </h2>
            <p class="text-15 sm:text-20 xl:text-40">
              {{ project.shortDescription }}
            </p>
          </div>
          <span
            class="absolute lg:relative text-100 lg:text-65 xl:text-100 bottom-2 right-0 text-opacity-80 md:text-opacity-100 lg:self-center text-gray-dark md:text-black lg:text-white lg:bg-primary lg:rounded-full lg:w-28 lg:h-28 xl:w-40 xl:h-40 text-center"
            >{{ `0${project.index + 1}` }}</span
          >

          <AppScrollMark class="bottom-10 left-5 text-black" />
        </div>
        <div class="z-20">
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
                  The aim of this project was to experience first hand all the
                  hype with AI. Because AI can be very abstract and difficult to
                  grasp, I wanted something somewhat easy to understand and easy
                  to apply, so I chose sentiments analysis. How can I make a
                  program that understands a message and it's able to classify
                  it into these 3 categories:
                  <span
                    class="text-lamp-type-good"
                    @mouseenter="lamps = [LampTypes.GOOD.id]"
                    @mouseleave="lamps = []"
                    >good</span
                  ><span>, </span>
                  <span
                    class="text-lamp-type-neutral"
                    @mouseenter="lamps = [LampTypes.NEUTRAL.id]"
                    @mouseleave="lamps = []"
                    >neutral</span
                  ><span>,</span>

                  <span
                    class="text-lamp-type-bad"
                    @mouseenter="lamps = [LampTypes.BAD.id]"
                    @mouseleave="lamps = []"
                    >bad</span
                  ><span>. </span>
                </p>
                <p>
                  I had to start somewhere, so I simplified the problem instead
                  of texts of various sizes I would do tweets that are much more
                  compact and follow a set of rules. After reading, I understood
                  that they key of a good AI relies on a good set of data, so I
                  started creating my own dataset with tweets after some minutes
                  I figured that there should already some publicly available
                  databases with tweets already classified. And yes, after some
                  searching, I got 1.500.000 tweets classified. With these
                  tweets I could start training my model and then testing it,
                  here are some examples:
                </p>
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
          <div
            class="min-screen-height-header-extra lg:min-h-screen-height-header flex flex-col p-5 justify-end"
          >
            <div class="text-20">
              <div class="text-35 my-5">Conclusions:</div>
              <p>
                The results were pretty awesome, for the most part it worked as
                expected, but there were some behaviours to iron out, for
                example, I exclusively rely on the neural network to do all the
                work, I could really use another algorithm to work alongside to
                find a solution using other methods such as dictionaries or
                other neural networks.
              </p>
              <p>
                As for sentences, ironic or sarcastic are pretty much out of the
                scope of this project as it adds another whole level of
                complexity, but I would lie if I don't smirk when "I love to pay
                taxes" is marked as positive sentence.
              </p>
            </div>
            <div class="text-20 mb-56">
              <div class="text-35 mb-5 mt-20">End note:</div>
              <p>
                Sentiment analysis is not new, and it is still being used to
                gather data on product reviews or opinions on a topic, there is
                a huge interest in getting this kind of information. On the web
                there are tons of information on how to approach this problem, I
                would recommend don't get hasty and play with it, it's fun once
                you get the hang of it!
              </p>
            </div>
            <AppLink :to="{ path: '/', query: { section: nextProject.id } }">
              <AppScrollMark
                display-text="NEXT PROJECT"
                class="bottom-10 left-5 text-black hover:text-primary"
              />
            </AppLink>

            <AppLink to="/">
              <AppActionMark
                display-text="RETURN"
                class="bottom-10 left-1/3 text-black hover:text-primary"
              />
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lamp from '@/components/Lamp/index.vue';
import AppScrollMark from '@/components/AppScrollMark';
import AppActionMark from '@/components/AppActionMark/index.vue';
import AppLink from '@/components/AppLink/index.vue';
import ProjectIntro from '@/components/Project/Intro/index.vue';
import { sentimentAnalysis } from '@/utils/project';
import { LampTypes } from '@/config/lamp';
import { projects } from '@/utils/projectsOverview';

export default {
  components: {
    Lamp,
    AppScrollMark,
    ProjectIntro,
    AppActionMark,
    AppLink,
  },
  data() {
    return {
      project: sentimentAnalysis,
      lamps: [],
      LampTypes,
    };
  },
  computed: {
    hasScrolledPastFristPage() {
      return this.$store.getters['hasScrolledPastFirstPage/getScroll'];
    },
    currentProjectIndex() {
      return this.$store.getters['lastProjectSeen/getIndex'];
    },
    nextProject() {
      return this.currentProjectIndex < projects.length - 1
        ? projects[this.currentProjectIndex + 1]
        : projects[0];
    },
  },
  created() {
    this.$store.commit('lastProjectSeen/setIndex', sentimentAnalysis.index);
  },
  head() {
    return {
      title: 'Sentiment Analysis | Marc Mortensen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My attempt at making a machine comprehend sentences',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'My attempt at making a machine comprehend sentences',
        },
      ],
    };
  },
  layout: 'project',
};
</script>
