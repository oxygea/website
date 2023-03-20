<template>
  <section id="acceleration" data-section="acceleration" class="bg-[#EDEDEF]">
    <div
      class="container !py-10 relative overflow-hidden md:!py-0 md:flex md:items-center md:gap-20 lg:gap-[131px]"
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

      <nuxt-img
        preload
        :src="`home/bg-desktop.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="hidden md:block md:w-[300px] lg:w-full lg:max-w-[640px]"
        data-aos="fade"
      />

      <div class="w-full md:max-w-[418px] relative z-10">
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc1') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos-delay="100"
          data-aos="fade-up"
        >
          {{ $t('oxygea.desc2') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc3') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc4') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc5') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc6') }}
        </p>
        <p
          class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('oxygea.desc7') }}
        </p>
        <div v-if="$i18n.locale !== 'pt'">
          <p
            class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ $t('oxygea.desc8') }}
          </p>
          <p
            class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ $t('oxygea.desc9') }}
          </p>
          <p
            class="text-xs font-medium lg:text-2xl !leading-7 !-tracking-[0.03em]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ $t('oxygea.desc10') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeOxigea',
}
</script>
