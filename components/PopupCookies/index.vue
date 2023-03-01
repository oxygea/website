<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="bottom-0 !py-5 bg-white transition-all duration-500 fixed w-full z-40"
    >
      <div class="container flex justify-between lg:items-center">
        <div class="w-full max-w-[171px] lg:max-w-none">
          <p class="font-medium text-[10px] lg:text-xs leading-[14px]">
            {{ $t('popups.cookies.p') }}
            <strong
              class="cursor-pointer"
              @click="$nuxt.$emit('openModalCookies')"
              >{{ $t('popups.cookies.strong') }}</strong
            >
          </p>
        </div>
        <span
          class="py-2 px-4 bg-green font-medium text-[10px] lg:text-sm rounded-full h-max cursor-pointer hover:bg-[#18A790] transition-all duration-300"
          @click="$nuxt.$emit('saveAcceptedCookies')"
          >{{ $t('popups.cookies.cta') }}</span
        >
      </div>
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
