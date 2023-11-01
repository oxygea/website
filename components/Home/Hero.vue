<template>
  <section
    class="bg-black relative overflow-hidden hero w-full section-hero container flex flex-col justify-between slick-next-hero !pt-20 lg:!pt-[180px]"
  >
    <!-- Background 01 -->
    <transition name="slide-fade">
      <div v-if="sliderPageIndex === 1">
        <!-- Desktop -->
        <img
          preload
          src="~/assets/img/hero/bg-first/bg-desktop.png"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          aria-hidden
          class="imagecarrosselfirst absolute hidden lg:block left-0 top-[96px]"
        />
        <!-- Mobile -->
        <img
          preload
          src="~/assets/img/hero/bg-first/bg-mobile.png"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          aria-hidden
          class="imagecarrosselfirstmobile absolute block lg:hidden top-[64px] right-0 left-auto"
        />
      </div>
    </transition>

    <!-- Background 02 -->
    <transition name="slide-fade">
      <VueLottie
        v-if="sliderPageIndex === 2"
        :width="500"
        :options="lottieOptions1"
        class="pointer-events-none -top-[38px] lg:top-[260px] !h-auto absolute right-0"
      />
    </transition>

    <!-- Background 03 -->
    <transition name="slide-fade">
      <img
        v-if="sliderPageIndex === 3"
        preload
        src="~/assets/img/hero/bg-2.png"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="absolute hidden lg:block left-0 top-[106px]"
      />
      <img
        v-if="sliderPageIndex === 3"
        preload
        src="~/assets/img/hero/bg-mobile-2.png"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="absolute block lg:hidden left-0 top-[51px] min-w-full"
      />
    </transition>

    <!-- Background 04 -->
    <transition name="slide-fade">
      <VueLottie
        v-if="sliderPageIndex === 4"
        :width="500"
        :options="lottieOptions2"
        class="pointer-events-none top-[58px] lg:top-[305px] !h-auto absolute right-0"
      />
    </transition>

    <!-- Background 05 -->
    <transition name="slide-fade">
      <VueLottie
        v-if="sliderPageIndex === 5"
        :width="500"
        :options="lottieOptions3"
        class="pointer-events-none top-[78px] lg:top-[235px] !h-auto absolute -right-[306px] lg:right-0"
      />
    </transition>

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
          class="w-full !flex min-h-[330px] lg:min-h-[556px] flex-col relative lg:ml-2"
          :class="[
            {
              'max-w-[950px] mr-[150px] mt-[102px] lg:mt-0': item.value === 1,
              'mt-[42px] lg:mt-0': item.value === 2,
              'max-w-[500px] mr-[150px] !ml-auto mt-[124px] lg:mt-0':
                item.value === 3,
              ' mt-[76px] lg:mt-0': item.value === 4,
              ' mt-[77px] lg:mt-0': item.value === 5,
            },
          ]"
        >
          <div v-if="item.value === 1" v-show="item.value === 1">
            <div>
              <img
                preload
                src="~/assets/img/hero/bg-first/title.png"
                format="webp"
                fit="fill"
                sizes="280px sm:440px lg:640px"
                quality="100"
                loading="lazy"
                aria-hidden
                class="!hidden lg:!block"
              />
              <img
                preload
                src="~/assets/img/hero/bg-first/title-mobile.png"
                format="webp"
                fit="fill"
                sizes="280px sm:440px lg:640px"
                quality="100"
                loading="lazy"
                aria-hidden
                class="!block lg:!hidden"
              />
            </div>
            <div class="!flex flex-col pt-6 pb-11">
              <a
                v-if="item.value === 1 && item.value !== 3"
                target="_Blank"
                title="Inscreva sua startup"
                href="https://forward.oxygea.com/"
                :class="[
                  {
                    fade: true,
                    show: item.show,
                  },
                ]"
                class="text-violet font-bold font-poppins text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer transition-colors hover:bg-violet hover:text-black"
              >
                {{ $t(`hero.card${item.value}.cta`) }}
              </a>
            </div>
            <div class="hidden lg:block">
              <img
                preload
                src="~/assets/img/hero/bg-first/logos.png"
                format="webp"
                fit="fill"
                sizes="sm:660px lg:860px"
                quality="100"
                loading="lazy"
                aria-hidden
              />
            </div>
          </div>
          <div v-else class="contents">
            <p
              :class="[
                {
                  '!max-w-[500px]': item.value === 1 || item.value === 3,
                  fade: true,
                  show: item.show,
                },
              ]"
              class="text-white max-w-[297px] pb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-5xl lg:leading-[56px]"
            >
              {{ $t(`hero.card${item.value}.title`) }}
            </p>

            <a
              v-if="item.value === 1 || item.value === 3"
              target="_Blank"
              title="Inscreva sua startup"
              :class="[
                {
                  fade: true,
                  show: item.show,
                },
              ]"
              class="text-violet font-bold font-poppins text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer transition-colors hover:bg-violet hover:text-black"
              @click="$nuxt.$emit('openModalContact')"
            >
              {{ $t(`hero.card${item.value}.cta`) }}
            </a>

            <nuxt-link
              v-if="item.value !== 1 && item.value !== 3"
              :to="
                localeLocation({
                  name: 'index',
                  hash: `#${item.hash}`,
                  params: { offset: -80 },
                })
              "
              :class="[
                {
                  fade: true,
                  show: item.show,
                },
              ]"
              class="text-violet font-bold font-poppins text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer transition-colors hover:bg-violet hover:text-black"
              >{{ $t(`hero.card${item.value}.cta`) }}</nuxt-link
            >
          </div>
        </div>
      </VueSlickCarousel>

      <div
        class="absolute bottom-0 right-0 w-[197px] flex items-center gap-4 ml-auto pt-4 lg:pt-20 pb-5 lg:pb-20 lg:w-[250px]"
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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      sliderPageIndex: 0,
      sliderPageIndexBTN: true,
      itens: [
        { value: 1, hash: 'teste', show: true },
        { value: 2, hash: 'partners', show: false },
        {
          value: 3,
          hash: 'investment',
          show: false,
        },
        { value: 4, hash: 'programs', show: false },
        { value: 5, hash: 'partners', show: false },
      ],
      fadeClass: 'fade',
    }
  },
  mounted() {
    this.sliderPageIndex = 1
    this.sliderPageIndexBTN = true
  },
  methods: {
    onBeforeChange(event, next) {
      this.itens[event].show = false
      setTimeout(() => {
        this.itens[next].show = true
      }, 500)
      const line = document.querySelector('#line')
      line.classList.remove('animation-line')
      if (this.sliderPageIndexBTN) {
        this.sliderPageIndex = event + 1 === 5 ? 1 : event + 2
      } else {
        this.sliderPageIndex = event === 0 ? 5 : event
      }
      this.sliderPageIndexBTN = true
      this.$refs.carousel.pause()
      setTimeout(() => {
        this.$refs.carousel.play()
      }, 0)
    },
    onSlideChange() {
      const line = document.querySelector('#line')
      line.classList.add('animation-line')
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

.imagecarrosselfirst {
  height: calc(100% - 96px);
}

.imagecarrosselfirstmobile {
  height: calc(100% - 64px);
}

.slide-fade-enter-active {
  transition: opacity 500ms ease-in-out;
}

.slide-fade-leave-active {
  transition: opacity 500ms cubic-bezier(1, 0.5, 0.8, 1);
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
</style>
