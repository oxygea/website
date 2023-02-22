<template>
  <section class="bg-[#EDEDEF]">
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
    <div class="container !py-10">
      <p class="font-normal text-[28px] leading-8 pb-6">
        Entre nossos programas, um deles é pra você.
      </p>
      <p class="font-bold text-xl">Conheça e faça parte.</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeStartup',
}
</script>
