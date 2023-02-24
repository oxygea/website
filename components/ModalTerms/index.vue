<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full container bg-white overflow-auto transition-all duration-500 fixed w-full flex flex-col z-50 lg:flex-row lg:h-screen"
    >
      <div class="flex justify-end pt-4 lg:hidden">
        <svg-icon
          name="close2"
          class="w-[32px] h-[32px] cursor-pointer"
          @click="$emit('close-modal')"
        />
      </div>
      <div class="pt-4 pb-10">
        <h3 class="font-bold text-[28px] pb-6">TERMOS E CONDIÇÕES DE USO</h3>
        <p class="font-medium text-xs">
          Os seguintes tópicos guiarão este documento, cujo objetivo é dar
          transparência e explicar como funciona o nosso Site para nossos
          Usuários (“Termos de Uso” ou “Documento”).
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalTerms',
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
  opacity: 0;
}
</style>
