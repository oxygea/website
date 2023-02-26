<template>
  <section class="bg-[#EDEDEF] !py-10">
    <h2 class="pb-4 font-bold text-2xl container">
      {{ $t('partners.title') }}
    </h2>
    <p class="font-normal text-xs leading-4 pb-10 container">
      {{ $t('partners.desc') }}
    </p>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="mt-10 pl-5 flex items-center"
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
        class="max-w-[83px] h-[43px]"
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
        class="max-w-[83px] h-[28px]"
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
        class="max-w-[110px] h-[26px]"
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
        class="max-w-[41px] h-[48px] m-auto !block"
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
        class="max-w-[110px] h-[21px]"
      />
    </VueSlickCarousel>
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
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.slick-track {
  display: flex;
  align-items: center;
}
</style>
