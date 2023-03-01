<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full bg-gray overflow-auto transition-all duration-500 fixed w-full flex flex-col z-50 lg:h-screen"
    >
      <div class="container">
        <div class="flex justify-end pt-4">
          <svg-icon
            name="close2"
            class="w-[32px] h-[32px] cursor-pointer"
            @click="$emit('close-modal')"
          />
        </div>
        <div class="pt-4 pb-10">
          <h3 class="font-bold text-xl pb-2">Entre em contato</h3>
          <p class="font-medium text-xs">
            Queremos te ouvir! Fale com a gente.
          </p>
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

          <CustomSelect
            v-model="selectedOptionId"
            label="Escolha uma teste"
            placeholder="name"
            :options="options"
          />

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
    </div>
  </transition>
</template>

<script>
import CustomSelect from '../../components/Select'
export default {
  name: 'ModalContact',
  components: {
    CustomSelect,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      options: [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 3, name: 'Option 3' },
        { id: 3, name: 'Option 3' },
        { id: 3, name: 'Option 3' },
        { id: 3, name: 'Option 3' },
        { id: 3, name: 'Option 3' },
      ],
      selectedOptionId: null,
    }
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
