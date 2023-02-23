<template>
  <div>
    <ModalContact :show="showModal" @close-modal="showModal = !showModal" />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import ModalContact from '../components/ModalContact/index.vue'

export default {
  name: 'LayoutDefault',
  components: { ModalContact },
  data() {
    return {
      showModal: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.showModal ? 'modal-open' : '',
      },
    }
  },
  created() {
    this.$nuxt.$on('openModalContact', () => this.openModalContact())
  },
  methods: {
    openModalContact() {
      this.showModal = true
    },
  },
}
</script>
