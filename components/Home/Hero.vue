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
      <div class="w-full !flex flex-col relative pt-16 slick-slide animation">
        <p
          class="text-white max-w-[297px] pb-6 font-normal text-[28px] leading-8 tracking-tight"
        >
          {{ $t('hero.card1.title') }}
        </p>
        <span
          class="text-violet font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >{{ $t('hero.card1.cta') }}</span
        >
      </div>
      <div
        class="w-full !flex flex-col relative pt-[118px] slick-slide opacity-0"
      >
        <p
          class="pb-5 text-white max-w-[297px] font-normal text-[28px] leading-8 tracking-tight"
        >
          {{ $t('hero.card2.title') }}
        </p>
        <span
          class="text-violet font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >{{ $t('hero.card2.cta') }}</span
        >
      </div>
      <div
        class="w-full !flex flex-col relative pt-[118px] slick-slide opacity-0"
      >
        <p
          class="pb-5 text-white max-w-[297px] font-normal text-[28px] leading-8 tracking-tight"
        >
          {{ $t('hero.card3.title') }}
        </p>
        <span
          class="text-violet font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >{{ $t('hero.card3.cta') }}</span
        >
      </div>
      <div
        class="w-full !flex flex-col relative pt-[134px] slick-slide opacity-0"
      >
        <p
          class="pb-5 text-white max-w-[297px] font-normal text-[28px] leading-8 tracking-tight"
        >
          {{ $t('hero.card4.title') }}
        </p>
        <span
          class="text-violet font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
          >{{ $t('hero.card4.cta') }}</span
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
      class="text-white absolute animation-line bottom-0 w-0 left-0"
    />
    <hr class="text-white opacity-[0.4] absolute bottom-0 w-full left-0" />
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

<style lang="postcss" scoped>
.section-hero {
  height: calc(100vh - 64px);
}
</style>
