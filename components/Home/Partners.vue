<template>
  <section class="bg-[#EDEDEF] py-10 lg:py-20">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-[42px] lg:pb-6">
        {{ $t('partners.title') }}
      </h2>
      <p
        class="font-normal text-xs leading-4 pb-10 lg:max-w-[530px] lg:ml-[110px] lg:text-base"
      >
        {{ $t('partners.desc') }}
      </p>
    </div>

    <div class="container !pr-0">
      <VueSlickCarousel
        v-bind="slickOptions"
        class="flex items-center lg:pl-[180px]"
      >
        <nuxt-img
          preload
          :src="`partners/01.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="83px sm:166px lg:300px"
          :alt="`Imagem partners 1`"
          :title="`Partners 1`"
          class="max-w-[83px] h-[43px] mr-10 lg:mr-[120px]"
        />
        <nuxt-img
          preload
          :src="`partners/02.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem partners 2`"
          :title="`Partners 2`"
          class="max-w-[83px] h-[28px] mr-10 lg:mr-[120px]"
        />
        <nuxt-img
          preload
          :src="`partners/03.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem partners 3`"
          :title="`Partners 3`"
          class="max-w-[110px] h-[26px] mr-10 lg:mr-[120px]"
        />
        <nuxt-img
          preload
          :src="`partners/04.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem partners 4`"
          :title="`Partners 4`"
          class="max-w-[41px] h-[48px] mr-10 lg:mr-[120px]"
        />
        <nuxt-img
          preload
          :src="`partners/05.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem partners 5`"
          :title="`Partners 5`"
          class="max-w-[110px] h-[21px] mr-10 lg:mr-[120px]"
        />
      </VueSlickCarousel>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomePartners',

  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 2.65,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        variableWidth: true,
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.slick-track {
  display: flex !important;
  align-items: center;
}
</style>
