<template>
  <section class="bg-black w-full section-hero">
    <VueSlickCarousel v-bind="slickOptions">
      <div class="w-full h-screen !flex flex-col relative">
        <nuxt-img
          preload
          :src="`home/01.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem 01`"
          :title="`Team 01`"
          class="w-full h-screen absolute"
        />
        <p
          class="pb-5 pl-5 text-white max-w-[297px] font-normal text-[28px] pt-5 leading-8 tracking-tight"
        >
          Do start aos grandes investimentos, te acompanhamos em todas as etapas
          do desenvolvimento de negócios inovadores.
        </p>
        <span
          class="text-violet ml-5 font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >Nossos programas</span
        >
        <div class="w-[197px] flex items-center gap-4 pt-5 self-end mr-5">
          <p class="text-white">01</p>
          <hr class="text-white w-full" />
          <svg-icon name="arrowCircleRight" class="w-[32px] h-[32px]" />
        </div>
      </div>
      <div class="w-full h-screen !flex flex-col relative">
        <nuxt-img
          preload
          :src="`home/02.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem 02`"
          :title="`Team 02`"
          class="w-full h-screen absolute"
        />
        <p
          class="pb-5 pl-5 text-white max-w-[297px] font-normal text-[28px] pt-20 leading-8 tracking-tight"
        >
          A conexão com o ecossistema faz a diferença. A gente acredita em fazer
          junto, local e globalmente.
        </p>
        <span
          class="text-violet ml-5 font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >Nossos parceiros</span
        >
        <div class="w-[197px] flex items-center gap-4 pt-5 self-end mr-5">
          <p class="text-white">02</p>
          <hr class="text-white w-full" />
          <svg-icon name="arrowCircleRight" class="w-[32px] h-[32px]" />
        </div>
      </div>
      <div class="w-full h-screen !flex flex-col relative">
        <nuxt-img
          preload
          :src="`home/03.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem 03`"
          :title="`Team 03`"
          class="w-full h-screen absolute"
        />
        <p
          class="pb-5 pl-5 text-white max-w-[297px] font-normal text-[28px] pt-20 leading-8 tracking-tight"
        >
          Investimos em startups para mudar o futuro da indústria, da tecnologia
          e da sustentabilidade.
        </p>
        <span
          class="text-violet ml-5 font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >Nossos mentores</span
        >
        <div class="w-[197px] flex items-center gap-4 pt-5 self-end mr-5">
          <p class="text-white">03</p>
          <hr class="text-white w-full" />
          <svg-icon name="arrowCircleRight" class="w-[32px] h-[32px]" />
        </div>
      </div>
      <div class="w-full h-screen !flex flex-col relative">
        <nuxt-img
          preload
          :src="`home/04.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem 04`"
          :title="`Team 04`"
          class="w-full h-screen absolute"
        />
        <p
          class="pb-5 pl-5 text-white max-w-[297px] font-normal text-[28px] pt-28 leading-8 tracking-tight"
        >
          Conectamos mentes brilhantes com sua startup para cocriar o futuro da
          indústria.
        </p>
        <span
          class="text-violet ml-5 font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >Nossos mentores</span
        >
        <div class="w-[197px] flex items-center gap-4 pt-5 self-end mr-5">
          <p class="text-white">04</p>
          <hr class="text-white w-full" />
          <svg-icon name="arrowCircleRight" class="w-[32px] h-[32px]" />
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
export default {
  name: 'HomeHero',
  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true,
        autoplaySpeed: 4000,
      },
    }
  },
}
</script>
