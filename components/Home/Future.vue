<template>
  <section id="future" data-section="future">
    <div
      class="video-hover relative cursor-pointer container !max-w-none !px-0"
      @click="$nuxt.$emit('openModalVideo')"
    >
      <nuxt-img
        v-if="$i18n.locale === 'pt'"
        preload
        :src="`banner-video-pt.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="w-full min-h-[240px] object-cover max-h-[520px]"
      />

      <nuxt-img
        v-if="$i18n.locale === 'en'"
        preload
        :src="`banner-video-en.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="w-full min-h-[240px] object-cover max-h-[520px]"
      />

      <svg-icon
        name="play"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] lg:w-[120px] lg:h-[120px]"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeFuture',
}
</script>

<style lang="postcss" scoped>
.video-hover {
  svg {
    transition: all 300ms;
  }

  &:hover svg {
    width: 30%;
    height: 30%;
  }
}
</style>
