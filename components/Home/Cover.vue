<!-- FIXME: adjust spaces -->

<template>
  <section
    class="bg-black md:flex items-center lg:max-w-[1440px] lg:mx-auto 2xl:px-[70px]"
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
      class="w-full h-auto grayscale"
    />

    <div class="container !py-10 lg:ml-[30px]">
      <p
        class="font-normal text-[28px] leading-8 pb-6 text-white lg:max-w-[418px] lg:text-5xl"
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
