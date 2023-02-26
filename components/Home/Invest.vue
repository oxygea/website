<template>
  <section id="acceleration" class="bg-green container !py-10">
    <h2 class="pb-4 font-bold text-2xl">{{ $t('invest.title') }}</h2>
    <div class="flex flex-wrap pt-10 gap-8">
      <div>
        <svg-icon name="circularEconomy" class="w-8 h-8" />
        <h3 class="pb-2 pt-4 pt-text-base font-medium leading-5">
          {{ $t('invest.card1.title') }}
        </h3>
        <p class="text-xs font-normal leading-4">
          {{ $t('invest.card1.info') }}
          <br />
          {{ $t('invest.card1.info2') }}
        </p>
      </div>
      <div>
        <svg-icon name="fintech" class="w-8 h-8" />
        <h3 class="pb-2 pt-4 pt-text-base font-medium leading-5">
          {{ $t('invest.card2.title') }}
        </h3>
        <p class="text-xs font-normal leading-4">
          {{ $t('invest.card2.info') }}
          <br />
          {{ $t('invest.card2.info2') }}
        </p>
      </div>
      <div>
        <svg-icon name="carbonNeutrality" class="w-8 h-8" />
        <h3 class="pb-2 pt-4 pt-text-base font-medium leading-5">
          {{ $t('invest.card3.title') }}
        </h3>
        <p class="text-xs font-normal leading-4">
          {{ $t('invest.card3.info') }}
        </p>
      </div>
      <div>
        <svg-icon name="biotechnology" class="w-8 h-8" />
        <h3 class="pb-2 pt-4 pt-text-base font-medium leading-5">
          {{ $t('invest.card4.title') }}
        </h3>
        <p class="text-xs font-normal leading-4">
          {{ $t('invest.card4.info') }}
          <br />
          {{ $t('invest.card4.info2') }}
        </p>
      </div>
      <div>
        <svg-icon name="industry" class="w-8 h-8" />
        <h3 class="pb-2 pt-4 pt-text-base font-medium leading-5">
          {{ $t('invest.card5.title') }}
        </h3>
        <p class="text-xs font-normal leading-4">
          {{ $t('invest.card5.info') }}
          <br />
          {{ $t('invest.card5.info2') }}
          <br />
          {{ $t('invest.card5.info3') }}
        </p>
      </div>
      <div>
        <svg-icon name="biochemicals" class="w-8 h-8" />
        <h3 class="pb-2 pt-4 pt-text-base font-medium leading-5">
          {{ $t('invest.card6.title') }}
        </h3>
        <p class="text-xs font-normal leading-4">
          {{ $t('invest.card6.info') }}

          <br />
          {{ $t('invest.card6.info2') }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeInvest',
}
</script>
