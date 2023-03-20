<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="overflow-hidden h-full transition-all duration-500 fixed w-screen right-0 flex justify-end z-50 lg:h-screen"
    >
      <div
        class="absolute w-screen h-screen bg-[#000000aa]"
        @click="$emit('close-modal')"
      ></div>
      <div
        class="relative !pt-16 max-w-[530px] m-0 bg-gray px-16 overflow-auto"
      >
        <div class="flex justify-end absolute right-4 top-4">
          <svg-icon
            name="close2"
            class="w-[32px] h-[32px] cursor-pointer"
            @click="$emit('close-modal')"
          />
        </div>
        <div class="pb-10">
          <h3 class="font-bold text-xl pb-2 lg:text-2xl">
            {{ $t('modals.contact.h3') }}
          </h3>
          <p class="font-normal text-xs lg:text-base font-poppins">
            {{ $t('modals.contact.p') }}
          </p>
        </div>
        <form class="flex flex-wrap justify-end pb-5">
          <label for="name" class="w-full relative">
            <p
              :class="{ active1: value1 }"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc1') }}
            </p>
            <input
              v-model="value1"
              type="text"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
            />
          </label>

          <label for="email" class="w-full relative">
            <p
              :class="{ active2: value2 }"
              class="absolute bottom-[45px] font-medium text-base font-poppins"
            >
              E-mail
            </p>
            <input
              v-model="value2"
              type="email"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 my-6 text-black placeholder-black"
            />
          </label>

          <CustomSelect
            v-model="selectedOptionId"
            :label="`${$t('modals.contact.lb1')}`"
            :placeholder="`${$t('modals.contact.plc2')}`"
            :options="options"
          />

          <div
            v-if="selectedOptionId === 4"
            class="w-full h-[127px]"
            :class="[
              {
                '!h-[90px]': selectedFile,
              },
            ]"
          >
            <div class="w-full">
              <p class="font-medium text-base font-poppins pb-4">
                Envie seu CV
              </p>
              <div
                class="h-[93px] w-full border border-dashed border-black relative cursor-pointer"
                :class="[
                  {
                    '!h-[50px]': selectedFile,
                  },
                ]"
              >
                <div
                  v-if="!selectedFile"
                  class="absolute top-[25px] right-[90px] text-center"
                >
                  <p class="text-sm font-poppins font-medium">
                    Selecione um PDF para enviar
                  </p>
                  <p class="text-sm font-poppins font-medium">
                    Tamanho máximo 10 MB
                  </p>
                </div>

                <div
                  v-if="selectedFile"
                  class="absolute left-[16px] top-[15px]"
                >
                  <p class="text-sm font-poppins font-medium">
                    {{ selectedFile.name }}
                  </p>
                </div>

                <input
                  type="file"
                  class="w-full opacity-0 h-[93px]"
                  accept="application/pdf"
                  :class="[
                    {
                      '!h-[50px]': selectedFile,
                    },
                  ]"
                  @change="onFileSelected"
                />
              </div>
            </div>
          </div>

          <label
            for="message"
            class="w-full pb-3 text-sm block font-medium font-poppins mt-[25px]"
            >{{ $t('modals.contact.l1') }}</label
          >

          <textarea
            id="message"
            class="w-full min-h-[132px] text-sm mb-2 bg-white border font-poppins border-[#9D9D9D] p-4 text-black placeholder-black font-medium"
            :placeholder="`${$t('modals.contact.plc3')}`"
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
              class="text-sm font-medium font-poppins"
              :class="[
                {
                  'text-red-500': textLength > 900,
                },
              ]"
            >
              {{ $t('modals.contact.l2') }}
            </p>
            <p
              class="text-sm font-medium font-poppins"
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
            class="text-violet font-poppins mt-10 font-bold text-base py-4 px-8 border-2 border-violet rounded-full max-w-max hover:bg-violet hover:text-black"
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
        { id: 4, name: 'Faça parte do time Oxygea' },
      ],
      selectedFile: null,
      selectedOptionId: null,
      textLength: 0,
      value1: '',
      value2: '',
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
      console.log(this.selectedOptionId)
    },
    onFileSelected(event) {
      const file = event.target.files[0]
      console.log('Nome do arquivo:', file.name)
      console.log('Tamanho do arquivo:', file.size)

      if (file) {
        this.selectedFile = file
      }
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
  transform: translateX(100%);
  opacity: 0;
}

.active1 {
  top: -14px;
  left: 0;
  font-size: 14px;
  transition: all 300ms linear;
}

.active2 {
  top: 10px;
  left: 0;
  font-size: 14px;
  transition: all 300ms linear;
}
</style>
