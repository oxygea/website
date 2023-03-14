<template>
  <section class="bg-[#EDEDEF]">
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
          class="text-xs font-normal lg:text-2xl lg:font-medium"
          data-aos="fade"
        >
          {{ $t('oxygea.desc') }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeOxigea',
}
</script>
