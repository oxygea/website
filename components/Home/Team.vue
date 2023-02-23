<template>
  <section id="about" class="bg-black !py-10">
    <h2 class="pb-4 font-bold text-2xl text-white container">Time Oxygea</h2>
    <p class="font-normal text-xs leading-4 pb-10 text-white container">
      Estamos com você para cocriar novos caminhos para um futuro sustentável.
    </p>
    <VueSlickCarousel v-bind="slickOptions" class="mt-10 pl-[20px]">
      <div
        v-for="(item, index) in teamData"
        :key="index"
        class="!flex flex-col justify-between h-[196px] w-full max-w-[100px]"
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
            :alt="`Imagem team ${c}`"
            :title="`Team ${c}`"
            class="w-[100px] h-[100px]"
          />
          <p class="text-white font-normal text-xs pt-4 pb-1">
            {{ item.name }}
          </p>
          <p class="text-white font-bold text-xs">{{ item.job }}</p>
        </div>
        <svg-icon name="linkedin2" class="w-[18px] h-[18px]" />
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
        slidesToScroll: 2,
        infinite: false,
      },
    }
  },
}
</script>
