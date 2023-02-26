<template>
  <section id="acceleration" class="bg-green py-10 lg:py-20">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-[42px]">
        {{ $t('invest.title') }}
      </h2>

      <div
        class="flex flex-wrap pt-10 gap-8 md:justify-between lg:ml-[110px] lg:pt-6"
      >
        <div
          v-for="(item, index) of itens"
          :key="`invest-${index}`"
          class="md:w-[45%] lg:w-1/3 lg:max-w-[310px]"
        >
          <svg-icon :name="item.icon" class="w-8 h-8 lg:w-16 lg:h-16" />
          <h3
            class="pb-2 pt-4 pt-text-base font-medium leading-5 lg:text-2xl"
            :class="item.titleClassNames"
          >
            {{ item.title }}
          </h3>
          <p class="text-xs font-normal leading-4 lg:text-base">
            <span
              v-for="(description, descriptionIndex) of item.descriptions"
              :key="`invest-description-${descriptionIndex}`"
              :class="descriptionIndex !== 0 ? 'mt-4 block' : ''"
            >
              {{ description }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeInvest',
  data: function () {
    return {
      itens: [
        {
          icon: 'circularEconomy',
          title: this.$t('invest.card1.title'),
          descriptions: [
            this.$t('invest.card1.info'),
            this.$t('invest.card1.info2'),
          ],
          titleClassNames: 'lg:max-w-[200px]',
        },
        {
          icon: 'fintech',
          title: this.$t('invest.card2.title'),
          descriptions: [
            this.$t('invest.card2.info'),
            this.$t('invest.card2.info2'),
          ],
          titleClassNames: '',
        },
        {
          icon: 'carbonNeutrality',
          title: this.$t('invest.card3.title'),
          descriptions: [this.$t('invest.card3.info')],
          titleClassNames: 'lg:max-w-[180px]',
        },
        {
          icon: 'biotechnology',
          title: this.$t('invest.card4.title'),
          descriptions: [
            this.$t('invest.card4.info'),
            this.$t('invest.card4.info2'),
          ],
          titleClassNames: '',
        },
        {
          icon: 'industry',
          title: this.$t('invest.card5.title'),
          descriptions: [
            this.$t('invest.card5.info'),
            this.$t('invest.card5.info2'),
            this.$t('invest.card5.info3'),
          ],
          titleClassNames: 'lg:max-w-[150px]',
        },
        {
          icon: 'biochemicals',
          title: this.$t('invest.card6.title'),
          descriptions: [this.$t('invest.card6.info')],
          titleClassNames: 'lg:max-w-[150px]',
        },
      ],
    }
  },
}
</script>
