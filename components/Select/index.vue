<template>
  <div class="pb-[25px] relative w-full z-10">
    <span class="w-full pb-4 block font-medium text-sm font-poppins">{{
      label
    }}</span>
    <div class="relative inline-block text-left w-full bg-white">
      <button
        type="button"
        class="w-full flex items-center font-poppins text-sm font-medium justify-between text-black capitalize py-[16px] px-4 border border-[#9D9D9D] appearance-none select-box rounded-none"
        :class="[
          {
            'border-red-500 text-red-500': error,
            'focus:outline-1 focus:ring focus:ring-[#2DE6C8]': !isOpen,
          },
        ]"
        @click="isOpen = !isOpen"
      >
        {{ selectedOption ? selectedOption : placeholder }}
        <svg-icon
          v-show="!isOpen"
          name="arrowDown"
          class="-mr-1 ml-2 h-[6px] w-[13px] stroke-black"
          :class="error && 'stroke-red-500'"
        />
        <svg-icon
          v-show="isOpen"
          name="arrowDown"
          class="-mr-1 ml-2 h-[6px] w-[13px] rotate-180 stroke-black"
          :class="error && 'stroke-red-500'"
        />
      </button>
      <div
        v-show="isOpen"
        class="max-h-[285px] overflow-auto w-full origin-top-right absolute top-[42px] right-0 border-l border-r border-b border-[#9D9D9D] bg-white"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <span
            v-for="option in options"
            :key="option.id"
            href="#"
            class="block cursor-pointer font-poppins text-sm font-medium py-[15px] px-4 text-black hover:bg-slate-100 hover:text-slate-900"
            role="menuitem"
            @click="selectOption(option)"
          >
            {{ option.name }}
          </span>
        </div>
      </div>
    </div>

    <span
      v-if="error"
      class="font-medium lg:text-sm text-sm font-poppins text-red-500 pt-4"
      >Preenchimento obrigatório</span
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    }
  },
  watch: {
    value(newValue) {
      this.selectedOption =
        this.options.find((option) => option.id === newValue)?.name || ''
    },
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option.name
      this.isOpen = false
      this.$emit('input', this.selectedOption)
    },
  },
}
</script>
