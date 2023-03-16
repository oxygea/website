<!-- FIXME: adjust spaces -->

<template>
  <section class="bg-[#EDEDEF]">
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
        :alt="`Imagem startup`"
        :title="`Startup`"
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
        :alt="`Imagem startup`"
        :title="`Startup`"
        class="w-full min-w-[50%] h-auto grayscale hidden 2xl:block"
        data-aos="fade"
      />

      <div class="container !py-10 lg:ml-[50px]" data-aos="fade">
        <p
          class="font-normal text-[28px] leading-[56px] pb-6 lg:max-w-[418px] lg:text-[48px]"
        >
          {{ $t('startup.title') }}
        </p>
        <p class="font-bold text-xl lg:text-2xl lg:max-w-[418px]">
          {{ $t('startup.desc') }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeStartup',
}
</script>
