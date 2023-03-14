<template>
  <div class="bg-[#EDEDEF] pt-10 pb-5 lg:py-20">
    <section class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-5xl lg:pb-4" data-aos="fade">
        {{ $t('portfolio.title') }}
      </h2>

      <p
        class="font-normal text-xs leading-4 pb-10 lg:max-w-[530px] lg:ml-[110px] lg:text-base"
      >
        {{ $t('portfolio.desc') }}
      </p>

      <div class="flex gap-5" @mouseleave="($event) => setSelected('XTELLAR')">
        <div class="hidden w-full max-w-[420px] h-[460px] relative lg:block">
          <nuxt-img
            v-for="(item, index) of itens"
            :key="`portfolio-image-${index}`"
            preload
            :src="`portfolio/${item.value.toLowerCase()}.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            :alt="`Imagem cover`"
            :title="`Cover`"
            class="w-full h-full grayscale absolute left-0 transition-opacity duration-300 eas opacity-0"
            :class="[
              {
                'opacity-100': item.value === selected,
              },
            ]"
          />
        </div>

        <div class="flex flex-wrap gap-4 lg:gap-0">
          <div
            v-for="(item, index) of itens"
            :key="index"
            class="w-full md:max-w-[380px] bg-green px-6 py-6 lg:max-w-[430px] lg:bg-white transition-colors duration-300 ease-linear"
            :class="[
              {
                'lg:bg-green': item.value === selected,
              },
            ]"
            @mouseenter="($event) => setSelected(item.value)"
          >
            <p
              class="text-xs font-normal lg:text-sm lg:font-medium lg:max-w-[366px]"
            >
              {{ $t(`portfolio.${item.value}`) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomePortfolio',
  data: function () {
    return {
      selected: 'XTELLAR',
      itens: [
        { value: 'XTELLAR' },
        { value: 'LOADSHARK' },
        { value: 'BABEL' },
        { value: 'ZAYA' },
      ],
    }
  },
  methods: {
    setSelected(value) {
      this.selected = value
    },
  },
}
</script>
