<template>
  <section
    id="portfolio"
    data-section="portfolio"
    class="bg-gray py-10 lg:py-20"
  >
    <div class="container !pr-0 lg:!pr-5">
      <h2
        class="pb-4 font-bold text-2xl lg:text-5xl lg:pb-6 -tracking-[0.03em]"
        data-aos="fade"
      >
        {{ $t('portfolio.title') }}
      </h2>
      <h3 class="text-xl lg:text-2xl font-bold mb-6">
        {{ $t('portfolio.subtitle') }}
      </h3>
      <VueSlickCarousel
        ref="carouselportfolio"
        v-bind="slickOptionsPorfolio"
        class="carouselportfolio ml-5 lg:ml-0"
      >
        <div
          v-for="(p, i) in $t('portfolio.listCompanies')"
          :key="'list' + i"
          class="bg-white !w-[310px] p-6 font-poppins"
        >
          <img :src="'/img/portfolio/' + p.img" class="max-h-[50px] mb-6" />
          <h4 class="text-base text-black mb-2 font-bold uppercase">
            {{ p.title }}
          </h4>
          <p class="text-sm mb-9 min-h-[60px]">{{ p.desc }}</p>
          <a
            :href="p.link"
            target="_Blank"
            :title="'Conheça ' + p.title"
            class="relative w-[34px] h-[34px] rounded-[100px] overflow-hidden bg-green flex items-center group lg:hover:w-[135px] transition-all duration-500 ease-in-out"
          >
            <span
              class="text-sm uppercase invisible pl-4 opacity-0 transition-all duration-150 delay-300 lg:group-hover:opacity-100 lg:group-hover:visible"
              >{{ $t('portfolio.about') }}</span
            >
            <b class="absolute right-[12px] text-sm font-normal">+</b>
          </a>
        </div>
      </VueSlickCarousel>
      <h3 class="text-xl lg:text-2xl font-bold mb-6 mt-10">
        {{ $t('portfolio.subtitle2') }}
      </h3>
      <VueSlickCarousel
        ref="carouselportfolio2"
        v-bind="slickOptionsPorfolio2"
        class="carouselportfolio2 ml-5 lg:ml-0"
      >
        <div
          v-for="(p2, i) in $t('portfolio.listCompanies2')"
          :key="'list' + i"
          class="bg-white !w-[310px] p-6 font-poppins"
        >
          <img :src="'/img/portfolio/' + p2.img" class="max-h-[50px] mb-6" />
          <h4 class="text-base text-black mb-2 font-bold uppercase">
            {{ p2.title }}
          </h4>
          <p class="text-sm mb-9 min-h-[60px]">{{ p2.desc }}</p>
          <a
            :href="p2.link"
            target="_Blank"
            :title="'Conheça ' + p2.title"
            class="relative w-[34px] h-[34px] rounded-[100px] overflow-hidden bg-green flex items-center group lg:hover:w-[135px] transition-all duration-500 ease-in-out"
          >
            <span
              class="text-sm uppercase invisible pl-4 opacity-0 transition-all duration-150 delay-300 lg:group-hover:opacity-100 lg:group-hover:visible"
              >{{ $t('portfolio.about') }}</span
            >
            <b class="absolute right-[12px] text-sm font-normal">+</b>
          </a>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomePortfolio',
  data: function () {
    return {
      slickOptionsPorfolio: {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      },

      slickOptionsPorfolio2: {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="postcss">
.carouselportfolio,
.carouselportfolio2 {
  .slick-track {
    display: flex !important;
    align-items: center;
  }

  .slick-slide {
    margin-left: 20px;
  }

  .slick-list {
    margin-left: -20px;
  }
}

@media (min-width: 481px) {
  .carouselportfolio,
  .carouselportfolio2 {
    .slick-track {
      width: 100% !important;
      align-items: flex-start;
      align-content: flex-start;
      gap: 20px;
      flex-wrap: wrap;
      padding-left: 20px;
    }

    .slick-slide {
      width: 310px !important;
      margin-left: 0;
    }

    .slick-current {
      margin-left: -20px;
    }
  }
}
</style>
