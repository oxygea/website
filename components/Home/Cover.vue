<template>
  <section class="bg-black">
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
      <p class="font-normal text-[28px] leading-8 pb-6 text-white">
        Nos conectamos com parceiros de referência global e mentores
        especializados -
      </p>
      <p class="font-bold text-xl text-white leading-6">
        gente que acorda e dorme pensando inovação, como você.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeCover',
}
</script>
