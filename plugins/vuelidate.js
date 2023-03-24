import Vue from 'vue'
import Vuelidate, { validationMixin } from 'vuelidate'

Vue.use(Vuelidate)

// eslint-disable-next-line no-unused-vars
const Component = Vue.extend({
  mixins: [validationMixin],
})
