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
        class="font-normal font-poppins text-xs pb-10 lg:max-w-[530px] lg:ml-[110px] lg:text-base !leading-4 lg:!leading-6"
        data-aos="fade"
      >
        {{ $t('partners.desc') }}
      </p>
    </div>

    <div class="container !pr-0 lg:hidden">
      <VueSlickCarousel v-bind="slickOptions1" class="lg:pl-[65px] partners">
        <a
          href="https://abstartups.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="abstartups" class="w-[171px] h-[26px]" />
        </a>
        <a
          href="https://www.abvcap.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="abvcap" class="w-[77px] h-[32px]" />
        </a>
        <a
          href="https://www.acecortex.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="acecortex" class="w-[93px] h-[48px]" />
        </a>
        <a
          href="https://www.cazoololab.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="cazolo" class="w-[110px] h-[26px]" />
        </a>
        <a
          href="https://cubo.network/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="cubo" class="w-[83px] h-[28px]" />
        </a>
        <a
          href="https://distrito.me/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="distrito" class="w-[98px] h-[26px]" />
        </a>
        <a
          target="_blank"
          href="https://www.ibi-tech.com/"
          class="!flex justify-center items-center"
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
            class="max-w-[41px] h-[48px] m-auto"
          />
        </a>
        <a
          target="_blank"
          href="https://onono.com.br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/04.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[97px] h-[46px] m-auto"
          />
        </a>
        <a
          target="_blank"
          href="https://www.plugandplaytechcenter.com/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/02.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[110px] h-[21px] m-auto"
          />
        </a>
        <a
          target="_blank"
          href="https://www.touchdownvc.com/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/03.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[132px] h-[28px] m-auto"
          />
        </a>
      </VueSlickCarousel>
    </div>

    <div class="container !pr-0 hidden lg:block">
      <VueSlickCarousel
        v-bind="slickOptions1"
        class="mb-10 lg:pl-[65px] partners"
      >
        <a
          href="https://abstartups.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="abstartups" class="w-[171px] h-[26px]" />
        </a>
        <a
          href="https://www.abvcap.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="abvcap" class="w-[77px] h-[32px]" />
        </a>
        <a
          href="https://www.acecortex.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="acecortex" class="w-[93px] h-[48px]" />
        </a>
        <a
          href="https://www.cazoololab.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="cazolo" class="w-[110px] h-[26px]" />
        </a>
        <a
          href="https://cubo.network/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="cubo" class="w-[83px] h-[28px]" />
        </a>
      </VueSlickCarousel>
      <VueSlickCarousel
        v-bind="slickOptions2"
        class="flex items-center lg:pl-[30px] justify-center partners"
      >
        <a
          href="https://distrito.me/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="distrito" class="w-[98px] h-[26px]" />
        </a>
        <a
          target="_blank"
          href="https://www.ibi-tech.com/"
          class="!flex justify-center items-center"
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
            class="max-w-[41px] h-[48px] m-auto"
          />
        </a>
        <a
          target="_blank"
          href="https://onono.com.br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/04.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[97px] h-[46px] m-auto"
          />
        </a>
        <a
          target="_blank"
          href="https://www.plugandplaytechcenter.com/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/02.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[110px] h-[21px] m-auto"
          />
        </a>
        <a
          target="_blank"
          href="https://www.touchdownvc.com/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/03.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[132px] h-[28px] m-auto"
          />
        </a>
      </VueSlickCarousel>
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
      slickOptions2: {
        dots: false,
        slidesToShow: 5.1,
        slidesToScroll: 5.1,
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
}
</script>

<style lang="postcss" scoped>
.slick-track {
  display: flex !important;
  align-items: center;
}
</style>
