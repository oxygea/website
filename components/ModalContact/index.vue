<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="overflow-hidden h-full duration-500 fixed w-screen right-0 flex justify-end z-50 lg:h-screen"
    >
      <div
        class="absolute back w-screen h-screen bg-[#000000aa]"
        @click="$emit('close-modal')"
      ></div>
      <div
        class="relative front !pt-16 max-w-[530px] m-0 bg-gray px-16 overflow-auto"
      >
        <div class="flex justify-end absolute right-4 top-4">
          <svg-icon
            name="close2"
            class="w-[32px] h-[32px] cursor-pointer"
            @click="$emit('close-modal')"
          />
        </div>
        <div id="hubspotForm"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalContact',

  props: {
    show: Boolean,
  },
}
</script>

<style lang="postcss" scoped>
.slide-fade-enter-active .back {
  transition: opacity 0.25s ease-in-out;
}

.slide-fade-leave-active .back {
  transition: opacity 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter .back,
.slide-fade-leave-to .back {
  opacity: 0;
}

.slide-fade-enter-active .front {
  transition: transform 0.5s ease-in-out;
}

.slide-fade-leave-active .front {
  transition: transform 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter .front,
.slide-fade-leave-to .front {
  transform: translateX(100%);
}

.active {
  transform: translateY(-30px);
  font-size: 14px;
  transition: all 300ms linear;
}
</style>
