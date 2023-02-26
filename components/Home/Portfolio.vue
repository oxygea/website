<template>
  <section class="bg-[#EDEDEF] container !pt-10 !pb-5">
    <h2 class="pb-4 font-bold text-2xl">{{ $t('portfolio.title') }}</h2>
    <p class="font-normal text-xs leading-4 pb-10"></p>
    <div class="flex flex-wrap gap-4">
      <div class="w-full max-w-[280px] bg-green px-6 py-6">
        <h3 class="text-xs font-bold pb-2">XTELLAR</h3>
        <p class="text-xs font-normal">
          {{ $t('portfolio.XTELLAR') }}
        </p>
      </div>
      <div class="w-full max-w-[280px] bg-green px-6 py-6">
        <h3 class="text-xs font-bold pb-2">LOADSHARK</h3>
        <p class="text-xs font-normal">
          {{ $t('portfolio.LOADSHARK') }}
        </p>
      </div>
      <div class="w-full max-w-[280px] bg-green px-6 py-6">
        <h3 class="text-xs font-bold pb-2">BABEL</h3>
        <p class="text-xs font-normal">
          {{ $t('portfolio.BABEL') }}
        </p>
      </div>
      <div class="w-full max-w-[280px] bg-green px-6 py-6">
        <h3 class="text-xs font-bold pb-2">ZAYA</h3>
        <p class="text-xs font-normal">
          {{ $t('portfolio.ZAYA') }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomePortfolio',
}
</script>
