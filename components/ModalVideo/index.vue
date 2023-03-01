<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="w-screen h-screen transition-all bg-black bg-opacity-80 duration-500 fixed z-50 flex justify-center items-center"
    >
      <div class="container h-[520px]">
        <div class="flex justify-end pt-4">
          <svg-icon
            name="close2"
            class="w-[32px] h-[32px] cursor-pointer"
            @click="$emit('close-modal')"
          />
        </div>
        <iframe
          v-show="$i18n.locale === 'pt'"
          src="https://player.vimeo.com/video/801713674?h=47b83308e7"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          v-show="$i18n.locale === 'en'"
          src="https://player.vimeo.com/video/801724083?h=ca80f5fda7"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalVideo',
  props: {
    show: Boolean,
  },
  watch: {
    show() {
      if (this.show) {
        document.querySelector('html').style.overflowY = 'hidden'
      } else {
        document.querySelector('html').style.overflowY = 'auto'
      }
    },
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.25s linear;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
