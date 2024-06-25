<template>
  <section
    id="partners"
    data-section="ecosystem"
    class="bg-[#EDEDEF] py-10 lg:py-20"
  >
    <div class="container">
      <h2
        class="pb-4 font-bold text-2xl lg:text-[42px] lg:pb-6"
        data-aos="fade"
      >
        {{ $t('partners.title') }}
      </h2>
      <p
        class="font-normal font-poppins text-xs pb-10 lg:max-w-[530px] lg:text-base !leading-4 lg:!leading-6"
        data-aos="fade"
      >
        {{ $t('partners.desc') }}
      </p>
    </div>

    <div class="container w-full flex items-center justify-end !pb-4 lg:hidden">
      <button
        class="next-slide rotate-180 flex items-center mr-4 justify-center border-2 border-black rounded-full min-h-[32px] min-w-[32px]"
        @click="prevSlide"
      >
        <svg-icon
          name="arrow-right"
          class="w-[9px] h-[13px] cursor-pointer text-black fill-current"
        />
      </button>
      <button
        class="next-slide flex items-center justify-center border-2 border-black rounded-full min-h-[32px] min-w-[32px]"
        @click="nextSlide"
      >
        <svg-icon
          name="arrow-right"
          class="w-[9px] h-[13px] cursor-pointer text-black fill-current"
        />
      </button>
    </div>

    <div class="container !pr-0 lg:hidden">
      <VueSlickCarousel
        ref="carouselPartners"
        v-bind="slickOptions1"
        class="lg:pl-[65px] partners"
      >
        <a
          v-for="(partner, index) in partnersData"
          :key="partner.name"
          :href="partner.href"
          target="_blank"
          class="!flex justify-center items-center"
          :class="{ 'pr-[70px]': index === 0, 'ml-[-20px]': index === 1 }"
        >
          <svg-icon
            v-if="partner.svgName"
            :name="partner.svgName"
            :style="`width: ${partner.width}px; height: ${partner.height}px`"
          />
          <nuxt-img
            v-else
            :src="partner.imageSource"
            preload
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            :alt="`Partner ${partner.name}`"
            :title="`Partner ${partner.name}`"
            :style="`width: ${partner.width}px; height: ${partner.height}px`"
          />
        </a>
      </VueSlickCarousel>
    </div>

    <div class="container hidden lg:block partners">
      <div class="partners-desk-wrapper">
        <a
          v-for="partner in partnersData"
          :key="partner.name"
          :href="partner.href"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon
            v-if="partner.svgName"
            :name="partner.svgName"
            :style="`width: ${partner.width}px; height: ${partner.height}px`"
          />
          <nuxt-img
            v-else
            :src="partner.imageSource"
            preload
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            :alt="`Partner ${partner.name}`"
            :title="`Partner ${partner.name}`"
            :style="`width: ${partner.width}px; height: ${partner.height}px`"
          />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import PartnersJSON from '../../assets/json/partners'

export default {
  name: 'HomePartners',

  data() {
    return {
      partnersData: PartnersJSON,
      slickOptions1: {
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: false,
        arrows: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      slickOptions2: {
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        arrows: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      slickOptions3: {
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        arrows: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    }
  },
  methods: {
    nextSlide() {
      this.$refs.carouselPartners.next()
    },
    prevSlide() {
      this.$refs.carouselPartners.prev()
    },
  },
}
</script>

<style lang="postcss" scoped>
.partners-desk-wrapper {
  display: flex;
  gap: 64px;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
}

.slick-track {
  display: flex !important;
  align-items: center;
}

.partners:hover img,
.partners:hover svg {
  @apply opacity-50 transition-all duration-500;
}

.partners img:hover,
.partners svg:hover {
  @apply opacity-100;
}
</style>
