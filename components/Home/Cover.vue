<template>
  <section
    class="bg-black md:flex items-center lg:max-w-[1440px] lg:mx-auto lg:px-[70px]"
  >
    <nuxt-img
      preload
      :src="`cover.png`"
      format="webp"
      fit="fill"
      quality="100"
      loading="lazy"
      sizes="83px sm:166px lg:300px"
      :alt="`Imagem cover`"
      :title="`Cover`"
      class="w-full h-auto"
    />

    <div class="container !py-10">
      <p
        class="font-normal text-[28px] leading-8 pb-6 text-white lg:max-w-[418px] lg:text-5xl"
      >
        {{ $t('cover.connect') }}
      </p>
      <p
        class="font-bold text-xl text-white leading-6 lg:text-2xl lg:max-w-[418px]"
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
