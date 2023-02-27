<template>
  <section class="bg-[#EDEDEF]">
    <div class="md:flex items-center lg:max-w-[1440px] lg:mx-auto lg:px-[70px]">
      <nuxt-img
        preload
        :src="`startup.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        sizes="83px sm:166px lg:300px"
        :alt="`Imagem startup`"
        :title="`Startup`"
        class="w-full h-auto"
      />

      <div class="container !py-10 lg:ml-[30px]">
        <p
          class="font-normal text-[28px] leading-8 pb-6 lg:max-w-[418px] lg:text-5xl"
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
