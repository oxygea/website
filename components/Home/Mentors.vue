<template>
  <section class="bg-white !py-10">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-[42px] lg:pb-6">
        {{ $t('mentors.title') }}
      </h2>
      <p
        class="font-normal text-xs leading-4 pb-10 lg:text-base lg:ml-[110px] lg:max-w-[530px]"
      >
        {{ $t('mentors.desc') }}
      </p>
      <p class="font-bold text-xs lg:hidden">
        {{ $t('mentors.filter.title') }}
      </p>
    </div>

    <div class="hidden lg:flex container items-center !pb-10">
      <p class="font-bold text-xs ml-[110px] w-full mr-6 min-w-max">
        {{ $t('mentors.filter.title') }}
      </p>

      <VueSlickCarousel v-bind="slickOptions" class="flex items-center w-full">
        <div
          v-for="(item, index) of filters"
          :key="index"
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2 cursor-pointer"
          :class="[
            {
              'bg-black': selectFilter === item,
              'text-white': selectFilter === item,
            },
          ]"
          @click.prevent="selectFilter = item"
        >
          {{ $t(`mentors.filter.${item}`) }}
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container !pr-0 !pb-10 !pt-2 lg:hidden">
      <VueSlickCarousel v-bind="slickOptions" class="flex items-center w-full">
        <div
          v-for="(item, index) of filters"
          :key="index"
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === item,
              'text-white': selectFilter === item,
            },
          ]"
          @click.prevent="selectFilter = item"
        >
          {{ $t(`mentors.filter.${item}`) }}
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container">
      <div class="lg:ml-[110px]">
        <div
          v-for="(mentor, index) of mentors"
          :key="index"
          class="relative mentor flex justify-between w-full items-center py-4 lg:justify-start lg:gap-[10%]"
          @click="($event) => setSelectedMentor(mentor.id)"
          @mouseenter="($event) => setSelectedMentor(mentor.id)"
        >
          <p
            class="font-medium text-xs lg:min-w-[200px]"
            :class="[
              {
                'text-[#9D9D9D]': mentor.id !== selectedMentor,
              },
            ]"
          >
            {{ mentor.name }}
          </p>

          <p
            class="hidden font-medium text-xs lg:block"
            :class="[
              {
                'text-[#9D9D9D]': mentor.id !== selectedMentor,
              },
            ]"
          >
            {{ $t(`mentors.filter.${mentor.vertical}`) }}
          </p>

          <nuxt-img
            preload
            :src="`mentors/${mentor.image}`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="100px sm:100vw lg:300px"
            aria-hidden
            class="w-16 h-16 lg:absolute lg:w-[180px] lg:h-[220px] z-10 right-[15%]"
            :class="[
              {
                hidden: mentor.id !== selectedMentor,
              },
            ]"
          />

          <a
            class="flex items-center min-w-max gap-2 cursor-pointer lg:ml-auto"
            :class="[
              {
                hidden: mentor.id !== selectedMentor,
                'color-[#9D9D9D]': mentor.id !== selectedMentor,
              },
            ]"
          >
            <span class="font-bold text-sm">{{
              $t('mentors.filter.more')
            }}</span>
            <svg-icon name="arrowCircle" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeMentors',
  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        variableWidth: true,
      },
      selectFilter: 'all',
      filters: [
        'all',
        'sustainability',
        'technology',
        'biochemistry',
        'humanResources',
      ],
      selectedMentor: 2,
      mentors: [
        {
          id: 1,
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          id: 2,
          name: 'Jorge Soto',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          id: 3,
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
      ],
    }
  },
  methods: {
    setSelectedMentor(name) {
      this.selectedMentor = name
    },
  },
}
</script>

<style lang="postcss" scoped>
.mentor {
  @apply border-b border-gray;

  &:last-of-type {
    @apply border-none;
  }
}
</style>
