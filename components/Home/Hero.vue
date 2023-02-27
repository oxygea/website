<template>
  <section
    class="bg-black w-full section-hero relative container flex flex-col justify-between overflow-hidden slick-next-hero"
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
        class="w-full !flex flex-col relative pt-16 slick-slide"
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
      id="footer"
      class="w-[197px] flex items-center gap-4 ml-auto pb-[22px] animation-footer opacity-0"
    >
      <p class="text-white">0{{ sliderPageIndex }}</p>
      <hr class="text-white w-full" />
      <svg-icon name="arrowCircleRight" class="w-[32px] h-[32px]" />
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

      const footer = document.querySelector('#footer')
      footer.classList.remove('animation-footer')
    },
    onSlideChange(event) {
      this.sliderPageIndex = event + 1

      const line = document.querySelector('#line')
      line.classList.add('animation-line')

      const footer = document.querySelector('#footer')
      footer.classList.add('animation-footer')

      const activeSlide = document.querySelector('.slick-active')
      const activeSlideContent = activeSlide.querySelector('.slick-slide')
      activeSlideContent.classList.add('animation')
    },
  },
}
</script>
