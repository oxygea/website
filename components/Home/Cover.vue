<!-- FIXME: adjust spaces -->

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
      :alt="`Imagem cover`"
      :title="`Cover`"
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
      :alt="`Imagem cover`"
      :title="`Cover`"
      class="w-full min-w-[50%] h-auto grayscale hidden 2xl:block"
      data-aos="fade"
    />

    <div class="container !py-10 lg:ml-[50px]" data-aos="fade">
      <p
        class="font-normal text-[28px] leading-8 pb-6 text-white lg:max-w-[400px] lg:text-5xl"
      >
        {{ $t('cover.connect') }}
      </p>
      <p
        class="font-bold text-xl text-white leading-6 lg:text-2xl lg:max-w-[418px] lg:font-medium"
      >
        {{ $t('cover.innovation') }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeCover',
}
</script>
