<template>
  <section
    id="acceleration"
    data-section="acceleration"
    class="bg-[#EDEDEF] overflow-clip"
  >
    <div
      class="container !py-10 relative md:!py-0 md:flex md:items-center md:gap-20 lg:gap-[131px] md:justify-end"
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
        :width="640"
        :options="lottieOptions"
        class="hidden md:block lottie -translate-x-[150px]"
        @animCreated="handleAnimation($event)"
      />

      <div class="w-full md:max-w-[418px] relative z-10 md:py-[100px]">
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 pb-5 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc1') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 pb-5 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc2') }}
        </p>
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

    const options = {
      rootMargin: '0px',
      threshold: 0.6,
    }

    const onIntersect = (entries) => {
      const visibleSection = entries.filter((entry) => entry.isIntersecting)
      if (visibleSection.length > 0) {
        this.play()
      }
    }

    const observer = new IntersectionObserver(onIntersect, options)

    observer.observe(lottie)
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
