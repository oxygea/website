<!-- TODO: add animations -->
<!-- TODO: add filter -->

<template>
  <section class="bg-white py-10 lg:py-20">
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
      <p class="font-bold text-base ml-[110px] w-full mr-6 min-w-max">
        {{ $t('mentors.filter.title') }}
      </p>

      <VueSlickCarousel v-bind="slickOptions" class="flex items-center w-full">
        <div
          v-for="(item, index) of filters"
          :key="index"
          class="border-solid border border-black py-2 px-4 text-base font-bold min-w-max max-w-max rounded-[100px] mr-2 cursor-pointer"
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
      <div class="lg:ml-[110px] h-[324px] overflow-hidden lg:h-[284px]">
        <div id="mentors-list" class="transition-all duration-300">
          <div
            v-for="(mentor, index) of mentors"
            :key="index"
            class="relative transition-all duration-300 mentor flex justify-between w-full items-center py-4 lg:justify-start lg:gap-[10%] lg:min-h-0"
            :class="[
              {
                'min-h-[97px]': mentor.slug === selectedMentor,
              },
            ]"
            @click="($event) => setSelectedMentor(mentor.slug)"
          >
            <p
              class="transition-all duration-300 font-medium text-xs lg:min-w-[200px] lg:text-base lg:font-normal"
              :class="[
                {
                  'text-[#9D9D9D]': mentor.slug !== selectedMentor,
                  'lg:!font-bold': mentor.slug === selectedMentor,
                  'lg:text-lg': mentor.slug === selectedMentor,
                },
              ]"
            >
              {{ mentor.name }}
            </p>

            <p
              class="transition-all duration-300 hidden text-base lg:block"
              :class="[
                {
                  'text-[#9D9D9D]': mentor.slug !== selectedMentor,
                  'lg:text-lg': mentor.slug === selectedMentor,
                },
              ]"
            >
              {{ $t(`mentors.filter.${mentor.vertical}`) }}
            </p>

            <transition>
              <nuxt-img
                preload
                :src="`mentors/${mentor.image}`"
                format="webp"
                fit="fill"
                quality="100"
                loading="lazy"
                sizes="100px sm:100vw lg:300px"
                class="w-16 h-16 absolute left-1/2 -translate-x-[70%] lg:w-[180px] lg:h-[220px] lg:z-10 lg:right-[15%] lg:translate-x-0 transition-opacity duration-300 opacity-0"
                :class="[
                  {
                    'opacity-100': mentor.slug === selectedMentor,
                    'delay-300': mentor.slug === selectedMentor,
                  },
                ]"
              />
            </transition>

            <a
              class="transition-all duration-300 opacity-0 flex items-center min-w-max gap-2 cursor-pointer lg:ml-auto"
              :class="[
                {
                  'opacity-100': mentor.slug === selectedMentor,
                  'color-[#9D9D9D]': mentor.slug !== selectedMentor,
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
      selectedMentor: 'jorge-soto',
      selectedMentorIndex: 2,
      mentors: [
        {
          slug: 'jorge-soto',
          name: 'Jorge Soto',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          slug: 'lip-1',
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          slug: 'lip-2',
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          slug: 'lip-3',
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          slug: 'lip-4',
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
        {
          slug: 'lip-5',
          name: 'Lorem Ipsum',
          image: 'jorge-soto.png',
          vertical: 'sustainability',
          link: '',
        },
      ],
    }
  },
  methods: {
    setSelectedMentor(slug) {
      this.selectedMentor = slug

      const selectedIndex = this.mentors.findIndex(
        ({ slug: mentorSlug }) => slug === mentorSlug
      )

      const list = document.getElementById('mentors-list')

      const base = 20
      const forward = selectedIndex * base
      const backward = (this.selectedMentorIndex - selectedIndex) * base

      if (selectedIndex > this.selectedMentorIndex) {
        list.style.transform = `translateY(-${forward}px)`
      } else {
        list.style.transform = `translateY(-${
          this.selectedMentorIndex * base - backward
        }px)`
      }

      this.selectedMentorIndex = selectedIndex
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

  @media (min-width: 1024px) {
    img {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(-n + 3) {
      img {
        top: 0;
        transform: none;
      }
    }

    &:last-child {
      img {
        top: 0;
      }
    }
  }
}
</style>
