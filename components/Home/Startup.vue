<template>
  <section id="programs" class="bg-[#EDEDEF] overflow-hidden">
    <div
      class="md:flex items-center lg:max-w-[1440px] 2xl:max-w-none lg:mx-auto"
    >
      <nuxt-img
        preload
        :src="`startup.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        sizes="320px sm:320px md:300px lg:300px xl:720px"
        :alt="
          $i18n.locale === 'pt'
            ? 'Pessoas em reunião sobre startups'
            : 'People in a meeting about startups'
        "
        :title="
          $i18n.locale === 'pt'
            ? 'Programas para startups '
            : 'Programs for startups'
        "
        class="w-full h-auto grayscale 2xl:hidden"
        data-aos="fade"
      />

      <nuxt-img
        preload
        :src="`startup2.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        sizes="320px sm:320px md:300px lg:300px xl:720px"
        :alt="
          $i18n.locale === 'pt'
            ? 'Pessoas em reunião sobre startups'
            : 'People in a meeting about startups'
        "
        :title="
          $i18n.locale === 'pt'
            ? 'Programas para startups '
            : 'Programs for startups'
        "
        class="w-full min-w-[50%] h-auto grayscale hidden 2xl:block"
        data-aos="fade"
      />

      <div class="container !py-10 xl:ml-[45px]">
        <div class="relative">
          <p
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative font-normal text-[28px] leading-8 xl:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] xl:text-[48px]"
          >
            {{ $t('startup.title1') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[1]"
          ></span>
        </div>
        <div class="relative">
          <p
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[2] font-normal text-[28px] leading-8 xl:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] xl:text-[48px]"
          >
            {{ $t('startup.title2') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[3]"
          ></span>
        </div>
        <div class="relative">
          <p
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[4] font-normal text-[28px] leading-8 xl:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] xl:text-[48px]"
            :class="{ 'pb-6': $i18n.locale === 'pt' }"
          >
            {{ $t('startup.title3') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[5]"
          ></span>
        </div>
        <div class="relative">
          <p
            v-if="$i18n.locale !== 'pt'"
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[6] font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] lg:text-[48px]"
          >
            {{ $t('startup.title4') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[7]"
          ></span>
        </div>
        <div class="relative">
          <p
            v-if="$i18n.locale !== 'pt'"
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[8] font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] lg:text-[48px]"
          >
            {{ $t('startup.title5') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[9]"
          ></span>
        </div>
        <div class="relative">
          <p
            v-if="$i18n.locale !== 'pt'"
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[10] font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] lg:text-[48px]"
          >
            {{ $t('startup.title6') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[11]"
          ></span>
        </div>
        <div class="relative">
          <p
            v-if="$i18n.locale !== 'pt'"
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[12] font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] pb-6 lg:max-w-[418px] lg:text-[48px]"
          >
            {{ $t('startup.title7') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[13]"
          ></span>
        </div>
        <div class="relative">
          <p
            v-if="$i18n.locale === 'pt'"
            data-startup
            class="lg:translate-y-[50px] transition-all duration-700 ease-linear relative z-[14] font-bold text-xl xl:text-2xl -tracking-[0.03%] lg:max-w-[418px]"
          >
            {{ $t('startup.desc') }}
          </p>
          <span
            class="absolute w-full h-[56px] hidden lg:block bg-[#EDEDEF] z-[15]"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeStartup',
  mounted() {
    window.addEventListener('scroll', this.onScroll)

    const reveals = [...document.querySelectorAll('[data-startup]')]

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
