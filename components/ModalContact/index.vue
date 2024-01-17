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
        <div v-if="!success" class="pb-10">
          <h3 class="font-bold text-xl pb-2 lg:text-2xl">
            {{ $t('modals.contact.h3') }}
          </h3>
          <p class="font-normal text-xs lg:text-base font-poppins">
            {{ $t('modals.contact.p') }}
          </p>
        </div>
        <div v-else class="pb-10">
          <h3 class="font-bold text-xl pb-2 lg:text-2xl">
            {{ $t('modals.contact.successTitle') }}
          </h3>
          <p class="font-normal text-xs lg:text-base font-poppins">
            {{ $t('modals.contact.successText') }}
          </p>
        </div>
        
        <div>
          <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
          <script>
            hbspt.forms.create({
              region: "na1",
              portalId: "24004954",
              formId: "ee688d51-6636-42f0-bddc-db48b379abc0"
            });
          </script>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { required, minLength, email } from 'vuelidate/lib/validators'
import CustomSelect from '../../components/Select'

export default {
  name: 'ModalContact',
  components: {
    CustomSelect,
    TheMask,
  },
  props: {
    show: Boolean,
    select: Boolean,
  },
  data() {
    return {
      success: false,
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
        { id: 4, name: 'Corporates' },
        { id: 5, name: 'Faça parte do time Oxygea' },
      ],
      optionsEN: [
        { id: 1, name: 'Startup' },
        { id: 2, name: 'Investor' },
        { id: 3, name: 'Partner' },
        { id: 4, name: 'Corporates' },
        { id: 5, name: 'Join us' },
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
    async handleSubmit() {
      // eslint-disable-next-line no-console
      try {
        this.$v.$touch()
        const rawData = {
          name: this.form.name,
          lastname: this.form.lastname,
          email: this.form.email,
          website: this.form.website,
          linkedin: this.form.linkedin,
          whatsapp: this.form.whatsapp,
          message: this.form.message,
          subject: this.selectedOptionId,
        }
        await this.$axios.$post(
          'https://hooks.zapier.com/hooks/catch/14969184/32inzps/',
          JSON.stringify(rawData)
        )

        this.success = true

        setTimeout(
          () => {
            this.form.name = null
            this.form.lastname = null
            this.form.email = null
            this.form.website = null
            this.form.linkedin = null
            this.form.whatsapp = null
            this.form.message = null
            this.selectedOptionId = null
            this.success = false
            this.textLength = 0
          },
          10000,
          this.$v.$reset()
        )
      } catch (e) {
        alert('Ocorreu um erro, tente novamente mais tarde.')
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
