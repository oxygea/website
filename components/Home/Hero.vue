<!-- TODO: add animation -->

<template>
  <section
    class="bg-black hero w-full section-hero relative container flex flex-col justify-between overflow-hidden slick-next-hero !pt-20 lg:!pt-[180px]"
  >
    <nuxt-img
      preload
      :src="`hero/bg-${sliderPageIndex}.png`"
      format="webp"
      fit="fill"
      quality="100"
      loading="lazy"
      aria-hidden
      class="hidden md:block absolute right-0"
    />

    <nuxt-img
      preload
      :src="`hero/bg-mobile-${sliderPageIndex}.png`"
      format="webp"
      fit="fill"
      quality="100"
      loading="lazy"
      aria-hidden
      class="absolute right-0 md:hidden"
    />

    <div class="relative z-10">
      <VueSlickCarousel
        v-bind="slickOptions"
        ref="carousel"
        @beforeChange="onBeforeChange"
        @afterChange="onSlideChange"
      >
        <div
          v-for="(item, index) of itens"
          :key="index"
          class="w-full !flex flex-col relative"
        >
          <p
            class="text-white max-w-[297px] pb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-[48px] lg:leading-[56px]"
          >
            {{ $t(`hero.card${item}.title`) }}
          </p>
          <a
            class="text-violet font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer transition-colors hover:bg-violet hover:text-black"
            >{{ $t(`hero.card${item}.cta`) }}</a
          >
        </div>
      </VueSlickCarousel>

      <div
        class="w-[197px] flex items-center gap-4 ml-auto pt-20 pb-5 lg:pb-20 lg:w-[250px]"
      >
        <p class="text-white font-bold text-base">0{{ sliderPageIndex }}</p>
        <hr class="text-white w-full" />
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
        loop: true,
      },
      sliderPageIndex: 1,
      itens: [1, 2, 3, 4],
    }
  },
  methods: {
    onBeforeChange(event) {
      const line = document.querySelector('#line')
      line.classList.remove('animation-line')

      this.sliderPageIndex = event === 3 ? 1 : event + 2
    },
    onSlideChange(event) {
      const line = document.querySelector('#line')
      line.classList.add('animation-line')
    },
    nextSlide() {
      this.$refs.carousel.next()
    },
  },
}
</script>

<style lang="postcss" scoped>
.next-slide {
  @apply transition-colors;

  svg {
    @apply transition-colors;
  }

  &:hover {
    @apply border-violet;

    svg {
      @apply text-violet;
    }
  }
}
</style>
