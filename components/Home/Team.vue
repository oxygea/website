<template>
  <div class="container">
    <section id="about" class="bg-black py-10 lg:pt-20 lg:pb-[90px]">
      <h2
        class="pb-4 font-bold text-2xl text-white lg:text-[42px] lg:pb-6"
        data-aos="fade"
      >
        {{ $t('team.title') }}
      </h2>
      <p
        data-aos="fade"
        class="font-normal text-xs leading-4 pb-10 text-white lg:max-w-[530px] lg:ml-[110px] lg:text-base"
      >
        {{ $t('team.desc') }}
      </p>

      <ul
        class="flex-wrap hidden lg:flex lg:ml-[110px] gap-x-[40px] gap-y-[40px]"
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
            <p class="text-white font-normal text-xs lg:text-base pt-4 pb-1">
              {{ item.name }}
            </p>
            <p class="text-white font-bold text-xxs lg:text-xs">
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
            class="cursor-pointer rounded-[100px] font-medium text-sm bg-green text-black self-center px-4 py-2 hover:bg-[#18A790] transition-all duration-300"
            @click="$nuxt.$emit('openModalContact')"
          >
            {{ $t('team.part') }}
          </p>
        </li>
      </ul>

      <VueSlickCarousel v-bind="slickOptions" class="lg:!hidden">
        <div
          v-for="(item, index) in teamData"
          :key="index"
          class="!flex flex-col justify-between h-[196px] w-full max-w-[100px] mr-4"
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
  </div>
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
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
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
