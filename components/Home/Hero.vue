<template>
  <section
    class="bg-black hero w-full section-hero relative container flex flex-col justify-between overflow-hidden slick-next-hero !pt-20 lg:!pt-[180px]"
  >
    <VueSlickCarousel
      v-bind="slickOptions"
      ref="carousel"
      @beforeChange="onBeforeChange"
      @afterChange="onSlideChange"
    >
      <div
        v-for="(item, index) of itens"
        :key="index"
        class="w-full !flex flex-col relative slick-slide"
        :class="[
          {
            'opacity-0': index !== 0,
          },
        ]"
      >
        <p
          class="text-white max-w-[297px] pb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-[48px] lg:leading-[56px]"
        >
          {{ $t(`hero.card${item}.title`) }}
        </p>
        <span
          class="text-violet font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base"
          >{{ $t(`hero.card${item}.cta`) }}</span
        >
      </div>
    </VueSlickCarousel>

    <div
      class="w-[197px] flex items-center gap-4 ml-auto pt-20 pb-5 lg:pb-20 lg:w-[250px]"
    >
      <p class="text-white font-bold text-base">0{{ sliderPageIndex }}</p>
      <hr class="text-white w-full" />
      <svg-icon
        name="arrowCircleRight"
        class="w-[32px] h-[32px] cursor-pointer"
        @click="nextSlide"
      />
    </div>

    <hr
      id="line"
      class="text-white absolute animation-line bottom-0 w-0 left-0 md:hidden"
    />
    <hr
      class="text-white opacity-[0.4] absolute bottom-0 w-full left-0 md:hidden"
    />
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
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: false,
      },
      sliderPageIndex: 1,
      itens: [1, 2, 3, 4],
    }
  },
  methods: {
    onBeforeChange() {
      const activeSlide = document.querySelector('.slick-active')
      const activeSlideContent = activeSlide.querySelector('.slick-slide')
      activeSlideContent.classList.remove('animation')

      const line = document.querySelector('#line')
      line.classList.remove('animation-line')
    },
    onSlideChange(event) {
      this.sliderPageIndex = event + 1

      const line = document.querySelector('#line')
      line.classList.add('animation-line')

      const activeSlide = document.querySelector('.slick-active')
      const activeSlideContent = activeSlide.querySelector('.slick-slide')
      activeSlideContent.classList.add('animation')
    },
    nextSlide() {
      this.$refs.carousel.next()
    },
  },
}
</script>
