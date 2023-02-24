<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full container bg-gray overflow-auto transition-all duration-500 fixed w-full flex flex-col z-50 lg:flex-row lg:h-screen"
    >
      <div class="flex justify-end pt-4 lg:hidden">
        <svg-icon
          name="close2"
          class="w-[32px] h-[32px] cursor-pointer"
          @click="$emit('close-modal')"
        />
      </div>
      <div class="pt-4 pb-10">
        <h3 class="font-bold text-xl pb-2">Entre em contato</h3>
        <p class="font-medium text-xs">Queremos te ouvir! Fale com a gente.</p>
      </div>
      <form class="flex flex-wrap justify-end pb-5">
        <input
          type="text"
          placeholder="Nome"
          class="w-full bg-transparent border-b border-black py-[25px] text-black placeholder-black"
        />
        <input
          type="email"
          placeholder="E-mail"
          class="w-full bg-transparent border-b border-black py-[25px] my-6 text-black placeholder-black"
        />

        <div class="pb-[34px] relative w-full">
          <label for="area" class="w-full pb-4 block">Área de interesse</label>
          <select
            name="area"
            placeholder="Área de interesse"
            class="w-full py-[18px] px-4 pr-8 border border-[#9D9D9D] appearance-none"
          >
            <option disabled selected>Selecione uma área</option>
            <option value="setes">testes</option>
            <option value="setes">testes</option>
            <option value="setes">testes</option>
            <option value="setes">testes</option>
          </select>
          <svg-icon
            name="arrowDown"
            class="w-[16px] h-[6px] absolute right-4 bottom-[60px]"
          />
        </div>
        <textarea
          class="w-full min-h-[132px] mb-10 bg-white border border-[#9D9D9D] p-4 text-black placeholder-black"
          placeholder="Como podemos te ajudar?"
          maxlength="900"
        ></textarea>

        <button
          type="submit"
          class="text-violet mt-5 font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max"
        >
          Enviar mensagem
        </button>
      </form>
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
