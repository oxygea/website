<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full bg-gray overflow-auto transition-all duration-500 fixed w-full right-0 max-w-[530px] flex flex-col z-50 lg:h-screen"
    >
      <div class="container relative !pt-16">
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
              class="absolute bottom-[9px] font-medium"
            >
              {{ $t('modals.contact.plc1') }}
            </p>
            <input
              v-model="value1"
              type="text"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-[10px] text-black placeholder-black"
            />
          </label>
          <label for="email" class="w-full relative">
            <p
              :class="{ active2: value2 }"
              class="absolute bottom-[33px] font-medium"
            >
              E-mail
            </p>
            <input
              v-model="value2"
              type="email"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-[10px] my-6 text-black placeholder-black"
            />
          </label>

          <CustomSelect
            v-model="selectedOptionId"
            :label="`${$t('modals.contact.lb1')}`"
            :placeholder="`${$t('modals.contact.plc2')}`"
            :options="options"
          />

          <label
            for="message"
            class="w-full pb-4 text-xs block font-medium font-poppins"
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
