<template>
  <section
    id="acceleration"
    data-section="acceleration"
    class="bg-[#EDEDEF] overflow-clip"
  >
    <div
      class="container overflow-hidden !py-10 relative md:!py-0 md:flex md:items-center md:gap-20 lg:gap-[131px] md:justify-end"
    >
      <nuxt-img
        preload
        :src="`home/bg-mobile.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="absolute left-0 bottom-0 md:hidden"
        data-aos="fade"
      />

      <VueLottie
        data-lottie
        :width="1100"
        :options="lottieOptions"
        class="hidden md:block absolute -left-[228px] lottie -translate-x-[150px]"
        @animCreated="handleAnimation($event)"
      />

      <div class="w-full md:max-w-[418px] relative z-10 md:py-[116px]">
        <div
          v-for="(item, index) of $t('oxygea')"
          :key="index"
          class="relative"
        >
          <p
            data-oxygea
            :class="[
              {
                'mt-5': index === 'desc7' && $i18n.locale === 'en',
                'pb-5': index === 'desc5' && $i18n.locale === 'pt',
              },
            ]"
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative text-xs font-normal lg:font-medium font-poppins lg:font-base lg:text-2xl lg:!leading-7 !-tracking-[0.03em]"
          >
            {{ item }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF]"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Logo from './../../assets/json/animations/logo.json'

export default {
  name: 'HomeOxigea',
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: Logo,
        renderer: 'html',
        autoplay: false,
        loop: false,
      },
    }
  },
  mounted() {
    const lottie = document.querySelector('[data-lottie]')
    const reveals = [...document.querySelectorAll('[data-oxygea]')]

    const options = {
      rootMargin: '0px',
      threshold: 0.6,
    }

    const onIntersect = (entries) => {
      const visibleSection = entries.filter((entry) => entry.isIntersecting)
      if (visibleSection.length > 0) {
        this.play()
        reveals.forEach((reveal) => reveal.classList.add('!translate-y-0'))
      }
    }

    const observer = new IntersectionObserver(onIntersect, options)

    observer.observe(lottie)

    reveals.forEach((reveal) => {
      observer.observe(reveal)
    })
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
    play() {
      this.anim.play()
    },
  },
}
</script>
