<template>
  <section id="future">
    <div class="video-hover relative cursor-pointer container !px-0">
      <nuxt-img
        preload
        :src="`banner-video.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        aria-hidden
        class="w-full min-h-[240px] object-cover"
      />

      <svg-icon
        name="play"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] lg:w-[120px] lg:h-[120px]"
      />
    </div>

    <!-- <iframe
      v-show="$i18n.locale === 'pt'"
      src="https://player.vimeo.com/video/801713674?h=47b83308e7"
      width="100%"
      height="auto"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      v-show="$i18n.locale === 'en'"
      src="https://player.vimeo.com/video/801724083?h=ca80f5fda7"
      width="100%"
      height="auto"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe> -->
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
