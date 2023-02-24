<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="container bottom-0 !py-5 bg-white transition-all duration-500 fixed w-full flex justify-between z-40"
    >
      <div class="w-full max-w-[171px]">
        <p class="font-medium text-[10px] leading-[14px]">
          Quando você acessa este site, podem vir a ser coletados alguns dados
          relacionados ao seu dispositivo. Para saber mais sobre cookies acesse
          a nossa
          <strong @click="$nuxt.$emit('openModalCookies')"
            >Política de Cookies.</strong
          >
        </p>
      </div>
      <span
        class="py-2 px-4 bg-green font-medium text-[10px] rounded-full h-max"
        @click="$nuxt.$emit('saveAcceptedCookies')"
        >Aceitar</span
      >
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupCookies',
  props: {
    show: Boolean,
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
