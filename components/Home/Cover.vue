<template>
  <section
    id="ecosystem"
    data-section="ecosystem"
    class="bg-black md:flex items-center lg:max-w-[1440px] 2xl:max-w-none lg:mx-auto"
  >
    <nuxt-img
      preload
      :src="`cover.png`"
      format="webp"
      fit="fill"
      quality="100"
      loading="lazy"
      sizes="320px sm:320px md:300px lg:300px xl:720px"
      :alt="
        $i18n.locale === 'pt'
          ? 'Pessoas conversando sobre programas de startups'
          : 'People talking about startup programs'
      "
      :title="
        $i18n.locale === 'pt'
          ? 'Oxygea conecta pessoas e startups '
          : 'Oxygea connects people and startups'
      "
      class="w-full h-auto grayscale 2xl:hidden"
      data-aos="fade"
    />

    <nuxt-img
      preload
      :src="`cover2.png`"
      format="webp"
      fit="fill"
      quality="100"
      loading="lazy"
      sizes="320px sm:320px md:300px lg:300px xl:720px"
      :alt="
        $i18n.locale === 'pt'
          ? 'Pessoas conversando sobre programas de startups'
          : 'People talking about startup programs'
      "
      :title="
        $i18n.locale === 'pt'
          ? 'Oxygea conecta pessoas e startups '
          : 'Oxygea connects people and startups'
      "
      class="w-full min-w-[50%] h-auto grayscale hidden 2xl:block"
      data-aos="fade"
    />

    <div class="container !py-10 xl:ml-[50px]">
      <div class="relative">
        <p
          data-cover
          class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative font-normal text-white text-[28px] leading-8 xl:leading-[56px] lg:max-w-[418px] xl:text-[48px] !-tracking-[0.03em]"
        >
          {{ $t('cover.connect1') }}
        </p>
        <span
          class="absolute w-full h-[56px] hidden lg:block bg-black z-[1]"
        ></span>
      </div>
      <div class="relative">
        <p
          data-cover
          class="lg:translate-y-[50px] transition-all duration-700 ease-linear delay-150 z-[2] relative font-normal text-white text-[28px] leading-8 xl:leading-[56px] lg:max-w-[418px] xl:text-[48px] !-tracking-[0.03em]"
        >
          {{ $t('cover.connect2') }}
        </p>
        <span
          class="absolute w-full h-[56px] hidden lg:block bg-black z-[3]"
        ></span>
      </div>
      <div class="relative">
        <p
          data-cover
          class="lg:translate-y-[50px] transition-all duration-700 ease-linear delay-200 z-[4] relative font-normal text-white text-[28px] leading-8 xl:leading-[56px] lg:max-w-[418px] xl:text-[48px] !-tracking-[0.03em]"
        >
          {{ $t('cover.connect3') }}
        </p>
        <span
          class="absolute w-full h-[56px] hidden lg:block bg-black z-[5]"
        ></span>
      </div>
      <div class="relative">
        <p
          data-cover
          class="lg:translate-y-[50px] transition-all duration-700 ease-linear delay-300 z-[6] relative font-normal text-white text-[28px] leading-8 xl:leading-[56px] lg:max-w-[418px] xl:text-[48px] !-tracking-[0.03em]"
        >
          {{ $t('cover.connect4') }}
        </p>
        <span
          class="absolute w-full h-[56px] hidden lg:block bg-black z-[7]"
        ></span>
      </div>
      <div class="relative">
        <p
          data-cover
          class="lg:translate-y-[50px] transition-all duration-700 ease-linear delay-500 z-[8] relative font-normal text-white text-[28px] leading-8 xl:leading-[56px] pb-6 lg:max-w-[418px] xl:text-[48px] !-tracking-[0.03em]"
        >
          {{ $t('cover.connect5') }}
        </p>
        <span
          class="absolute w-full h-[56px] hidden lg:block bg-black z-[9]"
        ></span>
      </div>
      <div class="relative">
        <p
          data-cover
          class="lg:translate-y-[50px] transition-all duration-700 ease-linear delay-700 z-[10] relative font-bold text-xl text-white xl:text-2xl lg:max-w-[418px] !-tracking-[0.03em] !leading-6"
        >
          {{ $t('cover.innovation') }}
        </p>
        <span
          class="absolute w-full h-[56px] hidden lg:block bg-black z-[11]"
        ></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeCover',
  mounted() {
    window.addEventListener('scroll', this.onScroll)

    const reveals = [...document.querySelectorAll('[data-cover]')]

    const options = {
      rootMargin: '0px',
      threshold: 0.1,
    }

    const onIntersect = (entries) => {
      const visibleSection = entries.filter((entry) => entry.isIntersecting)
      if (visibleSection.length > 0) {
        reveals.forEach((reveal) => reveal.classList.add('!translate-y-0'))
      }
    }

    const observer = new IntersectionObserver(onIntersect, options)

    reveals.forEach((reveal) => {
      observer.observe(reveal)
    })
  },
}
</script>
