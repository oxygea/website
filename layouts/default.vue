<template>
  <div>
    <MenuMobile :show="showMenu" @close-modal="showMenu = !showMenu" />
    <ModalContact
      :select="valueModal"
      :show="showModal"
      @close-modal="showModal = !showModal"
    />
    <ModalVideo
      :show="showModalVideo"
      @close-modal="showModalVideo = !showModalVideo"
    />
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
import ModalVideo from '../components/ModalVideo/index.vue'
import MenuMobile from '../components/Header/MenuMobile/index.vue'

export default {
  name: 'LayoutDefault',
  components: {
    ModalContact,
    ModalPrivacy,
    ModalTerms,
    ModalVideo,
    ModalCookies,
    PopupCookies,
    MenuMobile,
  },
  data() {
    return {
      showMenu: false,
      showModal: false,
      showModalVideo: false,
      showModalPrivacy: false,
      showModalTerms: false,
      showModalCookies: false,
      acceptedCookies: false,
      valueModal: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
        class:
          this.showMenu ||
          this.showModal ||
          this.showModalVideo ||
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
    this.$nuxt.$on('openMenuMobile', () => this.openMenuMobile())
    this.$nuxt.$on('openModalContact', () => this.openModalContact())
    this.$nuxt.$on('openModalVideo', () => this.openModalVideo())
    this.$nuxt.$on('openModalPrivacy', () => this.openModalPrivacy())
    this.$nuxt.$on('openModalTerms', () => this.openModalTerms())
    this.$nuxt.$on('openModalCookies', () => this.openModalCookies())
    this.$nuxt.$on('saveAcceptedCookies', () => this.saveAcceptedCookies())
    this.$nuxt.$on('setValueModal', () => this.setValueModal())
  },
  mounted() {
    const acceptedCookies = localStorage.getItem('@oxygea/cookies')
    if (acceptedCookies !== null) {
      this.acceptedCookies = acceptedCookies !== 'true'
    } else {
      this.acceptedCookies = true
    }
  },
  methods: {
    openMenuMobile() {
      this.showMenu = true
    },
    openModalContact() {
      this.showModal = true
      if (!this.hubSpotScriptLoaded) {
        this.loadHubSpotScript()
      }
    },
    openModalVideo() {
      this.showModalVideo = true
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
      localStorage.setItem('@oxygea/cookies', true)
      this.acceptedCookies = false
    },
    setValueModal() {
      this.valueModal = { id: 4, name: 'Faça parte do time Oxygea' }
    },
    loadHubSpotScript() {
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)

      script.onload = () => {
        this.hubSpotScriptLoaded = true
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '24004954',
          formId: 'ee688d51-6636-42f0-bddc-db48b379abc0',
          target: '#hubspotForm', // notice we target the div id
        })
      }
    },
  },
}
</script>
