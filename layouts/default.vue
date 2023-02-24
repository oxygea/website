<template>
  <div>
    <ModalContact :show="showModal" @close-modal="showModal = !showModal" />
    <ModalPrivacy
      :show="showModalPrivacy"
      @close-modal="showModalPrivacy = !showModalPrivacy"
    />
    <ModalTerms
      :show="showModalTerms"
      @close-modal="showModalTerms = !showModalTerms"
    />
    <ModalCookies
      :show="showModalCookies"
      @close-modal="showModalCookies = !showModalCookies"
    />
    <PopupCookies
      :show="acceptedCookies"
      @close-modal="showPopupCookies = !showPopupCookies"
    />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import ModalContact from '../components/ModalContact/index.vue'
import ModalPrivacy from '../components/ModalPrivacy/index.vue'
import ModalTerms from '../components/ModalTerms/index.vue'
import ModalCookies from '../components/ModalCookies/index.vue'
import PopupCookies from '../components/PopupCookies/index.vue'

export default {
  name: 'LayoutDefault',
  components: {
    ModalContact,
    ModalPrivacy,
    ModalTerms,
    ModalCookies,
    PopupCookies,
  },
  data() {
    return {
      showModal: false,
      showModalPrivacy: false,
      showModalTerms: false,
      showModalCookies: false,
      acceptedCookies: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
        class:
          this.showModal ||
          this.showModalPrivacy ||
          this.showModalTerms ||
          this.showModalCookies ||
          this.showPopupCookies
            ? 'modal-open'
            : '',
      },
    }
  },
  created() {
    this.$nuxt.$on('openModalContact', () => this.openModalContact())
    this.$nuxt.$on('openModalPrivacy', () => this.openModalPrivacy())
    this.$nuxt.$on('openModalTerms', () => this.openModalTerms())
    this.$nuxt.$on('openModalCookies', () => this.openModalCookies())
    this.$nuxt.$on('saveAcceptedCookies', () => this.saveAcceptedCookies())
  },
  mounted() {
    const acceptedCookies = localStorage.getItem('acceptedCookies')
    if (acceptedCookies !== null) {
      this.acceptedCookies = acceptedCookies !== 'true'
    } else {
      this.acceptedCookies = true
    }
  },
  methods: {
    openModalContact() {
      this.showModal = true
    },
    openModalPrivacy() {
      this.showModalPrivacy = true
    },
    openModalTerms() {
      this.showModalTerms = true
    },
    openModalCookies() {
      this.showModalCookies = true
    },
    saveAcceptedCookies() {
      localStorage.setItem('acceptedCookies', true)
      this.acceptedCookies = false
    },
  },
}
</script>
