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
        class="font-normal font-poppins text-xs pb-10 lg:max-w-[860px] lg:text-base !leading-4 lg:!leading-6"
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
          href="https://www.cetrel.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="cetrel" class="w-[122px] h-[32px]" />
        </a>

        <a
          href="https://biomafoodhub.com/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="bioma" class="w-[104px] h-[37px]" />
        </a>
        <a
          href="https://hubsalvador.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="hubsalvador" class="w-[79px] h-[52px]" />
        </a>
        <a
          target="_blank"
          href="https://www.innovationbrazilisrael.com/"
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
          href="https://institutocaldeira.org.br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/07.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners`"
            :title="`Partners 1`"
            class="max-w-[94px] h-[45px] m-auto"
          />
        </a>

        <a
          target="_blank"
          href="https://inventivos.co/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/08.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners`"
            :title="`Partners 1`"
            class="max-w-[90px] h-[31px] m-auto"
          />
        </a>

        <a
          target="_blank"
          href="https://fiemglab.com.br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/05.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem logo FIEMG`"
            :title="`FIEMG`"
            class="max-w-[100px] h-[28px] m-auto"
          />
        </a>
        <a
          href="https://www.manaustechhub.com/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="manaus" class="w-[110px] h-[48px]" />
        </a>
        <a
          target="_blank"
          href="https://www.tmf-group.com/pt-br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/10.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[48px] h-[48px] m-auto"
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

        <a
          target="_blank"
          href="https://www.weimpact.tech/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/11.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem logo FIEMG`"
            :title="`FIEMG`"
            class="max-w-[121px] h-[38px] m-auto"
          />
        </a>
      </VueSlickCarousel>
    </div>

    <div class="container !pr-0 hidden lg:block partners">
      <div class="grid grid-cols-8 mb-10 lg:pl-[64px]">
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
          href="https://www.cetrel.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="cetrel" class="w-[122px] h-[32px]" />
        </a>

        <a
          href="https://biomafoodhub.com/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="bioma" class="w-[104px] h-[37px]" />
        </a>
        <a
          href="https://hubsalvador.com.br/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="hubsalvador" class="w-[79px] h-[52px]" />
        </a>
        <a
          target="_blank"
          href="https://www.innovationbrazilisrael.com/"
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
          href="https://institutocaldeira.org.br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/07.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners`"
            :title="`Partners 1`"
            class="max-w-[94px] h-[45px] m-auto"
          />
        </a>
      </div>
      <div
        class="grid grid-cols-6 items-center justify-center lg:pl-[46px] mb-10"
      >
        <a
          target="_blank"
          href="https://inventivos.co/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/08.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners`"
            :title="`Partners 1`"
            class="max-w-[90px] h-[31px] m-auto"
          />
        </a>

        <a
          target="_blank"
          href="https://fiemglab.com.br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/05.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem logo FIEMG`"
            :title="`FIEMG`"
            class="max-w-[100px] h-[28px] m-auto"
          />
        </a>
        <a
          href="https://www.manaustechhub.com/"
          target="_blank"
          class="!flex justify-center items-center"
        >
          <svg-icon name="manaus" class="w-[110px] h-[48px]" />
        </a>

        <a
          target="_blank"
          href="https://www.tmf-group.com/pt-br/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/10.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem partners 1`"
            :title="`Partners 1`"
            class="max-w-[48px] h-[48px] m-auto"
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

        <a
          target="_blank"
          href="https://www.weimpact.tech/"
          class="!flex justify-center items-center"
        >
          <nuxt-img
            preload
            :src="`partners/11.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            sizes="83px sm:166px lg:300px"
            :alt="`Imagem logo FIEMG`"
            :title="`FIEMG`"
            class="max-w-[121px] h-[38px] m-auto"
          />
        </a>
      </div>
      <!-- <VueSlickCarousel
        v-bind="slickOptions3"
        class="flex items-center justify-center partners lg:pl-[20px]"
      >
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
       
      </VueSlickCarousel> -->
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
