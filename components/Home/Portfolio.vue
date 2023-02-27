<template>
  <div class="bg-[#EDEDEF] pt-10 pb-5 lg:py-20">
    <section class="container">
      <h2 class="pb-4 font-bold text-2xl">{{ $t('portfolio.title') }}</h2>
      <p
        class="font-normal text-xs leading-4 pb-10 lg:max-w-[530px] lg:ml-[110px] lg:text-base"
      >
        {{ $t('portfolio.desc') }}
      </p>

      <div class="flex gap-5">
        <img
          src="https://via.placeholder.com/420x460"
          class="hidden lg:block"
        />

        <div class="flex flex-wrap gap-4 lg:gap-0">
          <div class="w-full max-w-[280px] bg-green px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">XTELLAR</h3>
            <p class="text-xs font-normal">
              {{ $t('portfolio.XTELLAR') }}
            </p>
          </div>

          <div class="w-full max-w-[280px] px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">LOADSHARK</h3>
            <p class="text-xs font-normal">
              {{ $t('portfolio.LOADSHARK') }}
            </p>
          </div>

          <div class="w-full max-w-[280px] px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">BABEL</h3>
            <p class="text-xs font-normal">
              {{ $t('portfolio.BABEL') }}
            </p>
          </div>

          <div class="w-full max-w-[280px] px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">ZAYA</h3>
            <p class="text-xs font-normal">
              {{ $t('portfolio.ZAYA') }}
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
}
</script>
