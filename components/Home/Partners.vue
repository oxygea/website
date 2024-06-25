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
          v-for="(partner, index) in partners"
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
          v-for="partner in partners"
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
export default {
  name: 'HomePartners',

  data() {
    return {
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
      partners: [
        {
          name: 'abvcap',
          href: 'https://abvcap.com.br/',
          svgName: 'abvcap',
          width: 77,
          height: 32,
        },
        {
          name: 'Atitude Inovação',
          href: 'https://atitudeinovacao.com.br/',
          imageSource: 'partners/atitude.png',
          width: 169,
          height: 41,
        },
        {
          name: 'Atlântico',
          href: 'https://www.atlantico.com.br/embrapii/',
          svgName: 'atlantico',
          width: 91,
          height: 21,
        },
        {
          name: 'Bioma Food Hub',
          href: 'https://biomafoodhub.com/',
          svgName: 'bioma',
          width: 104,
          height: 37,
        },
        {
          name: 'Cazoolo',
          href: 'https://www.cazoololab.com.br/',
          svgName: 'cazoolo',
          width: 130,
          height: 20,
        },
        {
          name: 'Cesar',
          href: 'https://www.cesar.org.br/',
          imageSource: 'partners/cesar.png',
          width: 75,
          height: 45,
        },
        {
          name: 'Cetrel',
          href: 'https://www.cetrel.com.br/',
          svgName: 'cetrel',
          width: 122,
          height: 32,
        },
        {
          name: 'Cubo',
          href: 'https://cubo.network/',
          svgName: 'cubo',
          width: 98,
          height: 38,
        },
        {
          name: 'Distrito',
          href: 'https://distrito.me/',
          imageSource: 'partners/distrito.png',
          width: 102,
          height: 27,
        },
        {
          name: 'Endeavor',
          href: 'https://endeavor.org.br/',
          svgName: 'endeavor',
          width: 118,
          height: 16,
        },
        {
          name: 'FEA Angels',
          href: 'https://feaangels.com.br/',
          imageSource: 'partners/feaangels.png',
          width: 107,
          height: 31,
        },
        {
          name: 'FIEMGlab',
          href: 'https://fiemglab.com.br/',
          imageSource: 'partners/05.png',
          width: 100,
          height: 27,
        },
        {
          name: 'Hub Salvador',
          href: 'https://hubsalvador.com.br/',
          svgName: 'hubsalvador',
          width: 79,
          height: 52,
        },
        {
          name: 'Innovation Brazil Israel',
          href: 'https://www.innovationbrazilisrael.com/',
          imageSource: 'partners/01.png',
          width: 47,
          height: 36,
        },
        {
          name: 'Inno Science',
          href: 'https://www.innoscience.com.br/',
          imageSource: 'partners/innoscience.png',
          width: 106,
          height: 27,
        },
        {
          name: 'Instituto Caldeira',
          href: 'https://institutocaldeira.org.br/',
          svgName: 'institutocaldeira',
          width: 96,
          height: 46,
        },
        {
          name: 'Inventivos',
          href: 'https://inventivos.co/',
          imageSource: 'partners/08.png',
          width: 90,
          height: 31,
        },
        {
          name: 'Manaus Tech Hub',
          href: 'https://www.manaustechhub.com/',
          svgName: 'manaus',
          width: 110,
          height: 48,
        },
        {
          name: 'Senai',
          href: 'https://www.senaicimatec.com.br/',
          svgName: 'senai',
          width: 100,
          height: 35,
        },
        {
          name: 'TMF Group',
          href: 'https://www.tmf-group.com/pt-br/',
          svgName: 'tmfgroup',
          width: 64,
          height: 64,
        },
        {
          name: 'Touchdown Ventures',
          href: 'https://www.touchdownvc.com/',
          svgName: 'touchdown',
          width: 134,
          height: 30,
        },
        {
          name: 'We Impact',
          href: 'https://www.weimpact.tech/',
          imageSource: 'partners/11.png',
          width: 122,
          height: 40,
        },
      ],
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
