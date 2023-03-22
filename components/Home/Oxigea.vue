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

      <div data-shape class="hidden md:block absolute left-0">
        <svg-icon name="shape1" class="w-[151px] h-[532px]" />
      </div>

      <div data-shape class="hidden md:block absolute -left-[150px]">
        <svg-icon name="shape2" class="w-[156px] h-[626px]" />
      </div>

      <div data-shape class="hidden md:block absolute -left-[322px]">
        <svg-icon name="shape3" class="w-[146px] h-[610px]" />
      </div>

      <div data-shape class="hidden md:block absolute -left-[480px]">
        <svg-icon name="shape4" class="w-[115px] h-[480px]" />
      </div>

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
export default {
  name: 'HomeOxigea',
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const shaps = [...document.querySelectorAll('[data-shape]')]

      shaps.forEach((element) => {
        const posicaoVertical = element.offsetTop
        const fatorParalaxe = 0.5
        const deslocamento = (window.scrollY + posicaoVertical) * fatorParalaxe

        if (deslocamento < 500) {
          element.style.transform = `translateX(${deslocamento}px)`
        }
      })
    },
  },
}
</script>
