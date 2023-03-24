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
        <div class="pb-10">
          <h3 class="font-bold text-xl pb-2 lg:text-2xl">
            {{ $t('modals.contact.h3') }}
          </h3>
          <p class="font-normal text-xs lg:text-base font-poppins">
            {{ $t('modals.contact.p') }}
          </p>
        </div>
        <form
          class="flex flex-wrap justify-end pb-5"
          @submit.prevent="handleSubmit"
        >
          <label for="name" class="w-full relative mb-6">
            <p
              :class="[
                { active: form.name },
                { 'text-red-600': $v.form.name.$error },
              ]"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc1') }}
            </p>
            <input
              v-model="form.name"
              name="name"
              type="text"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
              :class="[
                { 'border-red-600': $v.form.name.$error },
                // { 'border-[#2DE6C8]': !$v.form.name.$invalid },
              ]"
            />
          </label>

          <label for="lastname" class="w-full relative mb-6">
            <p
              :class="[
                { active: form.lastname },
                { 'text-red-600': $v.form.lastname.$error },
              ]"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc2') }}
            </p>
            <input
              v-model="form.lastname"
              name="lastname"
              type="text"
              :class="[
                { 'border-red-600': $v.form.lastname.$error },
                // { 'border-[#2DE6C8]': !$v.form.lastname.$invalid },
              ]"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
            />
          </label>

          <label for="email" class="w-full relative mb-6">
            <p
              :class="[
                { active: form.email },
                { 'text-red-600': $v.form.email.$error },
              ]"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc3') }}
            </p>
            <input
              v-model="form.email"
              name="email"
              type="email"
              :class="[
                { 'border-red-600': $v.form.email.$error },
                // { 'border-[#2DE6C8]': !$v.form.email.$invalid },
              ]"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
            />
          </label>

          <label for="site" class="w-full relative mb-6">
            <p
              :class="{ active: form.website }"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc4') }}
            </p>
            <input
              v-model="form.website"
              name="site"
              type="url"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
            />
          </label>

          <label for="linkedIn" class="w-full relative mb-6">
            <p
              :class="{ active: form.linkedin }"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc5') }}
            </p>
            <input
              v-model="form.linkedin"
              name="linkedIn"
              type="text"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
            />
          </label>

          <label for="phone" class="w-full relative mb-6">
            <p
              :class="{ active: form.whatsapp }"
              class="absolute bottom-[21px] font-medium text-base font-poppins"
            >
              {{ $t('modals.contact.plc6') }}
            </p>
            <input
              v-model="form.whatsapp"
              name="phone"
              type="tel"
              class="w-full text-xs lg:text-base bg-transparent border-b font-poppins border-black font-normal py-5 text-black placeholder-black"
            />
          </label>

          <CustomSelect
            v-model="selectedOptionId"
            :label="`${$t('modals.contact.lb1')}`"
            :placeholder="`${$t('modals.contact.plc7')}`"
            :options="$i18n.locale === 'pt' ? optionsPT : optionsEN"
          />

          <label
            for="message"
            class="w-full pb-3 text-sm block font-medium font-poppins mt-[25px]"
            >{{ $t('modals.contact.l1') }}</label
          >

          <textarea
            id="message"
            class="w-full min-h-[132px] text-sm mb-2 bg-white border font-poppins border-[#9D9D9D] p-4 text-black placeholder-black font-medium"
            :placeholder="`${$t('modals.contact.plc8')}`"
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
import { required, minLength, email } from 'vuelidate/lib/validators'
import CustomSelect from '../../components/Select'

export default {
  name: 'ModalContact',
  components: {
    CustomSelect,
  },
  props: {
    show: Boolean,
    select: Boolean,
  },
  data() {
    return {
      form: {
        name: null,
        lastname: null,
        email: null,
        website: null,
        linkedin: null,
        whatsapp: null,
        message: null,
      },
      optionsPT: [
        { id: 1, name: 'Startup' },
        { id: 2, name: 'Investor' },
        { id: 3, name: 'Partner' },
        { id: 4, name: 'Faça parte do time Oxygea' },
        { id: 5, name: 'Empresas' },
      ],
      optionsEN: [
        { id: 1, name: 'Startup' },
        { id: 2, name: 'Investor' },
        { id: 3, name: 'Partner' },
        { id: 4, name: 'Join us' },
        { id: 5, name: 'Corporates' },
      ],
      selectedOptionId: null,
      textLength: 0,
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      lastname: {
        required,
      },
      email: { required, email },
    },
  },
  watch: {
    show() {
      if (this.show) {
        document.querySelector('html').style.overflowY = 'hidden'
        this.selectedOptionId = this.select.id
      } else {
        document.querySelector('html').style.overflowY = 'auto'
      }
    },
  },
  methods: {
    onChange(event) {
      this.textLength = event.target.textLength
    },
    handleSubmit() {
      // eslint-disable-next-line no-console
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        // const rawData = {
        //   Nome: this.form.name,
        //   Lastname: this.form.lastname,
        //   Email: this.form.email,
        //   Website: this.form.website,
        //   Linkedin: this.form.linkedin,
        //   Whatsapp: this.form.whatsapp,
        //   Mensagem: this.form.message,
        // }
        this.$nuxt.$loading.start()
        // this.submitFormWorkUs(rawData)
      }
    },
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
