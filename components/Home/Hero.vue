<template>
  <section class="w-full mt-[68px] lg:mt-[96px] relative">
    <div
      class="container absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2"
    >
      <div
        class="w-[197px] right-0 flex items-center gap-4 ml-auto pt-4 lg:pt-0 pb-5 lg:pb-20 lg:w-[250px]"
      >
        <p class="text-white font-bold text-base">0{{ sliderPageIndex }}</p>
        <hr class="text-white w-full" />
        <button
          class="next-slide rotate-180 flex items-center justify-center border-2 border-white rounded-full min-h-[32px] min-w-[32px]"
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
    </div>

    <hr
      id="line"
      class="text-white absolute animation-line bottom-0 w-0 left-0 md:hidden"
    />
    <hr
      class="text-white opacity-[0.4] absolute bottom-0 w-full left-0 md:hidden"
    />
    <VueSlickCarousel
      v-bind="slickOptions"
      ref="carousel"
      class="h-full w-full"
      @afterChange="handleSlideChange"
    >
      <!-- SLIDER 1 -->
      <div
        class="w-full h-[500px] lg:h-[640px] !flex justify-center items-center bg-hero-1"
      >
        <div
          class="container grid grid-cols-1 lg:grid-cols-2 lg:gap-4 text-white justify-center"
        >
          <div>
            <div class="pb-8" lg:pb-0>
              <img
                src="@/assets/img/hero/layer-1.png"
                class="max-w-[425px] w-full"
              />
              <a
                href="https://labs.oxygea.com/"
                title="Inscreva sua startup"
                target="_Blank"
                class="max-w-max cursor-pointer block mt-6 rounded-[100px] font-bold text-xxs lg:text-base bg-white text-black self-start px-8 py-4 font-poppins"
              >
                {{ $t('hero.card1.cta') }}
              </a>
            </div>
          </div>
          <div class="hidden lg:flex lg:items-center lg:justify-end">
            <div>
              <h2
                class="text-5xl leading-[133%] text-white font-normal"
                v-html="$t('hero.card1.title')"
              ></h2>
              <h3 class="text-xl mt-6 font-bold">
                {{ $t('hero.card1.subtitle') }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- SLIDER 2 LOTTIE 1 -->
      <div
        class="bg-black w-full h-[500px] lg:h-[640px] !flex justify-center items-center"
      >
        <div
          class="container grid grid-cols-12 gap-4 text-white justify-center"
        >
          <div class="col-span-12 lg:col-span-8 relative">
            <div class="relative z-10">
              <h2
                class="text-white max-w-[297px] mb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-5xl lg:leading-[56px]"
              >
                {{ $t('hero.card2.title') }}
              </h2>
              <nuxt-link
                :to="
                  localeLocation({
                    name: 'index',
                    hash: `#investment`,
                    params: { offset: -80 },
                  })
                "
                title="Inscreva sua startup"
                class="text-violet font-bold font-poppins mt-6 lg:mb-10 block text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer duration-300 transition-all hover:bg-violet hover:text-black nuxt-link-exact-active nuxt-link-active fade show"
              >
                {{ $t('hero.card2.cta') }}
              </nuxt-link>
            </div>
          </div>
          <div
            class="col-span-12 absolute w-full h-full -top-[40px] lg:top-0 left-0 lg:col-span-4 lg:items-center lg:flex lg:justify-end lg:relative"
          >
            <transition name="slide-fade">
              <VueLottie
                v-if="currentSlide === 2"
                :width="500"
                :options="lottieOptions1"
                class="pointer-events-none top-[40px] !h-auto absolute right-0"
              />
            </transition>
          </div>
        </div>
      </div>

      <!-- SLIDER 3 -->
      <div
        class="bg-black w-full h-[500px] lg:h-[640px] !flex justify-center items-center"
      >
        <div
          class="container grid grid-cols-12 gap-4 text-white justify-center"
        >
          <div class="col-span-12 lg:col-span-8 relative">
            <div class="relative z-10">
              <h2
                class="text-white max-w-[297px] mb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-5xl lg:leading-[56px]"
              >
                {{ $t('hero.card3.title') }}
              </h2>
              <nuxt-link
                :to="
                  localeLocation({
                    name: 'index',
                    hash: `#programs`,
                    params: { offset: -80 },
                  })
                "
                title="Inscreva sua startup"
                class="text-violet font-bold font-poppins mt-6 lg:mb-10 block text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer duration-300 transition-all hover:bg-violet hover:text-black nuxt-link-exact-active nuxt-link-active fade show"
              >
                {{ $t('hero.card3.cta') }}
              </nuxt-link>
            </div>
          </div>
          <div
            class="col-span-12 absolute w-full h-full -top-[40px] lg:top-0 left-0 lg:col-span-4 lg:items-center lg:flex lg:justify-end lg:relative"
          >
            <transition name="slide-fade">
              <VueLottie
                v-if="currentSlide === 3"
                :width="500"
                :options="lottieOptions2"
                class="pointer-events-none top-[40px] !h-auto absolute right-0"
              />
            </transition>
          </div>
        </div>
      </div>

      <div
        class="bg-black w-full h-[500px] lg:h-[640px] !flex justify-center items-center"
      >
        <div
          class="container grid grid-cols-12 gap-4 text-white justify-center"
        >
          <div class="col-span-12 lg:col-span-8 relative">
            <div class="relative z-10">
              <h2
                class="text-white max-w-[297px] mb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-5xl lg:leading-[56px]"
              >
                {{ $t('hero.card4.title') }}
              </h2>
              <nuxt-link
                :to="
                  localeLocation({
                    name: 'index',
                    hash: `#partners`,
                    params: { offset: -80 },
                  })
                "
                title="Inscreva sua startup"
                class="text-violet font-bold font-poppins mt-6 lg:mb-10 block text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer duration-300 transition-all hover:bg-violet hover:text-black nuxt-link-exact-active nuxt-link-active fade show"
              >
                {{ $t('hero.card4.cta') }}
              </nuxt-link>
            </div>
          </div>
          <div
            class="col-span-12 absolute w-full h-full -top-[40px] lg:top-0 left-[320px] lg:left-0 lg:col-span-4 lg:items-center lg:flex lg:justify-end lg:relative"
          >
            <transition name="slide-fade">
              <VueLottie
                v-if="currentSlide === 4"
                :width="500"
                :options="lottieOptions3"
                class="pointer-events-none top-[40px] !h-auto absolute right-0"
              />
            </transition>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import Grafismo1 from './../../assets/json/animations/grafismo_01.json'
import Grafismo2 from './../../assets/json/animations/grafismo_03.json'
import Grafismo3 from './../../assets/json/animations/grafismo_04.json'

export default {
  name: 'HomeHero',
  data() {
    return {
      lottieOptions1: {
        animationData: Grafismo1,
        renderer: 'html',
        loop: false,
      },
      lottieOptions2: {
        animationData: Grafismo2,
        renderer: 'html',
        loop: false,
      },
      lottieOptions3: {
        animationData: Grafismo3,
        renderer: 'html',
        loop: false,
      },
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        speed: 400,
        pauseOnHover: true,
        pauseOnFocus: true,
      },
      currentSlide: 0,
      sliderPageIndex: 0,
      sliderPageIndexBTN: true,
    }
  },
  mounted() {
    this.sliderPageIndex = 1
    this.sliderPageIndexBTN = true
  },
  methods: {
    handleSlideChange(index) {
      this.currentSlide = index + 1
      this.sliderPageIndex = this.currentSlide
    },
    nextSlide() {
      this.sliderPageIndexBTN = true
      this.$refs.carousel.next()
    },
    prevSlide() {
      this.sliderPageIndexBTN = false
      this.$refs.carousel.prev()
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

.slide-fade-enter-active {
  transition: opacity 300ms ease-in-out;
}

.slide-fade-leave-active {
  transition: opacity 300ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.fade {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.show {
  opacity: 1;
}

.bg-hero-1 {
  background-image: url('@/assets/img/hero/bg-1-mobile.png');

  @apply bg-green bg-no-repeat bg-right-bottom lg:bg-cover lg:bg-center bg-[length:320px];

  @media (min-width: 1024px) {
    background-image: url('@/assets/img/hero/bg-1.png');
  }
}
</style>
