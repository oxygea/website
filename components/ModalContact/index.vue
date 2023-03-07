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
          <h3 class="font-bold text-xl pb-2 lg:text-2xl">
            {{ $t('modals.contact.h3') }}
          </h3>
          <p class="font-semibold text-xs lg:text-base font-poppins">
            {{ $t('modals.contact.p') }}
          </p>
        </div>
        <form class="flex flex-wrap justify-end pb-5">
          <input
            type="text"
            placeholder="Nome"
            class="w-full text-xs bg-transparent border-b font-poppins border-black font-semibold py-[25px] text-black placeholder-black"
          />
          <input
            type="email"
            placeholder="E-mail"
            class="w-full text-xs bg-transparent border-b font-poppins border-black font-semibold py-[25px] my-6 text-black placeholder-black"
          />

          <CustomSelect
            v-model="selectedOptionId"
            label="Área de interesse"
            placeholder="Selecione uma área"
            :options="options"
          />

          <label
            for="message"
            class="w-full pb-4 text-xs block font-semibold font-poppins"
            >{{ $t('modals.contact.l1') }}</label
          >

          <textarea
            id="message"
            class="w-full min-h-[132px] text-xs mb-2 bg-white border font-poppins border-[#9D9D9D] p-4 text-black placeholder-black font-semibold"
            placeholder="Como podemos te ajudar?"
            maxlength="1000"
            :class="[
              {
                'text-red-500': textLength > 900,
              },
            ]"
            @keyup="onChange($event)"
          ></textarea>
          <div
            class="w-full flex justify-between items-center"
            :class="[
              {
                '!justify-end': textLength <= 900,
              },
            ]"
          >
            <p
              v-if="textLength > 900"
              class="text-xs font-semibold font-poppins"
              :class="[
                {
                  'text-red-500': textLength > 900,
                },
              ]"
            >
              {{ $t('modals.contact.l2') }}
            </p>
            <p
              class="text-xs font-semibold font-poppins"
              :class="[
                {
                  'text-red-500': textLength > 900,
                },
              ]"
            >
              {{ textLength }}/900 {{ $t('modals.contact.l3') }}
            </p>
          </div>

          <button
            type="submit"
            class="text-violet font-poppins mt-10 font-bold text-xs py-4 px-8 border-2 border-violet rounded-full max-w-max hover:bg-violet hover:text-black"
          >
            {{ $t('modals.contact.btn') }}
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
        { id: 1, name: 'Startup' },
        { id: 2, name: 'Investor' },
        { id: 3, name: 'Partner' },
      ],
      selectedOptionId: null,
      textLength: 0,
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
  methods: {
    onChange(event) {
      this.textLength = event.target.textLength
    },
  },
}
</script>

<style lang="postcss" scoped>
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
