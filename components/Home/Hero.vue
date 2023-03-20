<template>
  <section
    class="bg-black hero w-full section-hero relative container flex flex-col justify-between overflow-hidden slick-next-hero !pt-20 lg:!pt-[180px]"
  >
    <transition name="slide-fade">
      <nuxt-img
        preload
        :src="require(`~/assets/img/hero/bg-${sliderPageIndex}.png`)"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="hidden md:block absolute right-0"
        :class="[
          {
            'left-0 top-[51px]': sliderPageIndex === 2,
          },
        ]"
      />
    </transition>
    <transition name="slide-fade">
      <nuxt-img
        preload
        :src="require(`~/assets/img/hero/bg-mobile-${sliderPageIndex}.png`)"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="absolute right-0 md:hidden"
        :class="[
          {
            'top-[64px]': sliderPageIndex === 2,
          },
        ]"
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
          class="w-full !flex flex-col relative lg:ml-2"
          :class="[
            {
              'mt-[102px] lg:mt-0': item.value === 1,
              'max-w-[500px] mr-[150px] !ml-auto mt-[164px] lg:mt-0':
                item.value === 2,
              ' mt-[117px] lg:mt-0': item.value === 3,
              ' mt-[118px] lg:mt-0': item.value === 4,
            },
          ]"
        >
          <p
            :class="[
              {
                '!max-w-[500px]': item.value === 2,
              },
            ]"
            class="text-white max-w-[297px] pb-6 font-normal text-[28px] leading-8 tracking-tight md:max-w-[450px] lg:max-w-[750px] lg:text-5xl lg:leading-[56px]"
          >
            {{ $t(`hero.card${item.value}.title`) }}
          </p>
          <p
            v-if="item.value === 2"
            class="text-violet font-bold font-poppins text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer transition-colors hover:bg-violet hover:text-black"
            @click="$nuxt.$emit('openModalContact')"
          >
            {{ $t(`hero.card${item.value}.cta`) }}
          </p>
          <nuxt-link
            v-if="item.value !== 2"
            :to="
              localeLocation({
                name: 'index',
                hash: `#${item.hash}`,
                params: { offset: -80 },
              })
            "
            class="text-violet font-bold font-poppins text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max lg:text-base cursor-pointer transition-colors hover:bg-violet hover:text-black"
            >{{ $t(`hero.card${item.value}.cta`) }}</nuxt-link
          >
        </div>
      </VueSlickCarousel>

      <div
        class="w-[197px] flex items-center gap-4 ml-auto pt-4 lg:pt-20 pb-5 lg:pb-20 lg:w-[250px]"
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
        autoplaySpeed: 5000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      sliderPageIndex: 0,
      itens: [
        {
          value: 1,
          hash: 'ecosystem',
        },
        { value: 2, hash: 'partners' },
        { value: 3, hash: 'acceleration' },
        { value: 4, hash: 'mentors' },
      ],
    }
  },
  mounted() {
    this.sliderPageIndex = 1
  },
  methods: {
    onBeforeChange(event) {
      const line = document.querySelector('#line')
      line.classList.remove('animation-line')

      this.sliderPageIndex = event === 3 ? 1 : event + 2

      this.$refs.carousel.pause()
      setTimeout(() => {
        this.$refs.carousel.play()
      }, 0)
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

.slide-fade-enter-active {
  transition: all 500ms ease-in-out;
}

.slide-fade-leave-active {
  transition: all 500ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
