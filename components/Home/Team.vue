<template>
  <section class="py-10">
    <div class="bg-black py-10 lg:pt-20 lg:pb-[40px] container">
      <h2
        class="pb-4 font-bold text-2xl text-white lg:text-[42px] lg:pb-8"
        data-aos="fade"
      >
        {{ $t('team.title') }}
      </h2>
      <p
        data-aos="fade"
        class="font-normal text-xs font-poppins leading-4 text-white lg:max-w-[530px] lg:ml-[110px] lg:text-base"
      >
        {{ $t('team.desc') }}
      </p>
    </div>
    <div class="container w-full flex items-center justify-end !pb-4 lg:hidden">
      <button
        class="next-slide rotate-180 flex items-center mr-4 justify-center border-2 border-white rounded-full min-h-[32px] min-w-[32px]"
        @click="prevSlide"
      >
        <svg-icon
          name="arrow-right"
          class="w-[9px] h-[13px] cursor-pointer text-white fill-current"
        />
      </button>
      <button
        class="next-slide flex items-center justify-center border-2 border-white rounded-full min-h-[32px] min-w-[32px]"
        @click="nextSlide"
      >
        <svg-icon
          name="arrow-right"
          class="w-[9px] h-[13px] cursor-pointer text-white fill-current"
        />
      </button>
    </div>
    <ul
      class="flex-wrap hidden lg:flex gap-x-[40px] gap-y-[40px] max-w-[1440px] lg:pb-10 lg:m-auto lg:pl-[182px] lg:pr-[70px]"
      data-aos="fade"
    >
      <li
        v-for="(item, index) in teamData"
        :key="index"
        class="team-mate flex flex-col justify-between w-full max-w-[164px] list-none grayscale hover:grayscale-0 transition-all duration-300 ease-linear"
      >
        <div>
          <nuxt-img
            preload
            :src="`team/${item.img}.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="100px sm:100vw lg:300px"
            :alt="item.name"
            :title="item.name"
            class="w-[164px] h-[164px]"
          />
          <p
            class="text-white font-normal text-xs lg:text-base pt-4 pb-1 font-poppins"
          >
            {{ item.name }}
          </p>
          <p
            class="text-white font-bold text-xxs lg:text-xs font-poppins max-w-[148px]"
          >
            {{ item.job }}
          </p>
          <a :href="`${item.linkedin}`" target="_blank">
            <svg-icon
              name="linkedin2"
              class="w-[18px] h-[18px] mt-4 opacity-0"
            />
          </a>
        </div>
      </li>
      <li
        class="w-[164px] h-[164px] bg-[#141414] flex items-center justify-center"
      >
        <p
          class="cursor-pointer rounded-[100px] font-medium text-sm bg-green text-black self-center px-4 py-2 hover:bg-[#18A790] transition-all duration-300 font-poppins"
          @click="$nuxt.$emit('openModalContact')"
        >
          {{ $t('team.part') }}
        </p>
      </li>
    </ul>

    <VueSlickCarousel
      ref="carouselTeam"
      v-bind="slickOptions"
      class="lg:!hidden"
    >
      <div
        v-for="(item, index) in teamData"
        :key="index"
        class="!flex flex-col justify-between h-[196px] w-full max-w-[100px] ml-5"
      >
        <div>
          <nuxt-img
            preload
            :src="`team/${item.img}.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="100px sm:100vw lg:300px"
            :alt="item.name"
            :title="item.name"
            class="w-[100px] h-[100px] grayscale"
          />
          <p class="text-white font-normal text-xs pt-4 pb-1">
            {{ item.name }}
          </p>
          <p class="text-white font-bold text-xs">{{ item.job }}</p>
        </div>
        <a :href="`${item.linkedin}`" target="_blank">
          <svg-icon name="linkedin2" class="w-[18px] h-[18px]" />
        </a>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import TeamJSON from '../../assets/json/team'

export default {
  name: 'HomeTeam',

  data() {
    return {
      teamData: TeamJSON,
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 2.65,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    }
  },
  methods: {
    nextSlide() {
      this.$refs.carouselTeam.next()
    },
    prevSlide() {
      this.$refs.carouselTeam.prev()
    },
  },
}
</script>

<style lang="postcss" scoped>
.team-mate {
  svg {
    transition: opacity 300ms linear;
  }

  &:hover svg {
    opacity: 1;
  }
}
</style>
