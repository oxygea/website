<template>
  <section id="future">
    <iframe
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
    ></iframe>
  </section>
</template>
<script>
export default {
  name: 'HomeFuture',
}
</script>
