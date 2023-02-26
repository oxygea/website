<template>
  <section
    class="container bg-white flex flex-wrap items-center justify-center !pt-10"
  >
    <div
      class="w-full max-w-[180px] h-[180px] rounded-full border-2 border-violet flex flex-col gap-2 items-center justify-center text-center"
    >
      <p class="text-violet text-[28px] font-normal">U$150MM</p>
      <p class="text-violet text-[12px] max-w-[91px] font-normal leading-4">
        {{ $t('numbers.capital') }}
      </p>
    </div>
    <div
      class="relative -top-5 w-full max-w-[140px] h-[140px] rounded-full bg-gray flex flex-col gap-2 items-center justify-center text-center"
    >
      <p class="text-violet text-[28px] font-normal">4</p>
      <p class="text-violet text-[12px] font-normal leading-4 max-w-[128px]">
        {{ $t('numbers.companies') }}
      </p>
    </div>
    <div
      class="relative -top-10 w-full max-w-[180px] h-[180px] rounded-full border-2 border-violet flex flex-col gap-2 items-center justify-center text-center"
    >
      <p class="text-violet text-[28px] font-normal">7</p>
      <p
        class="text-violet text-[12px] font-normal leading-4 max-w-[128px]"
      ></p>
    </div>
    <div
      class="relative -top-[60px] w-full max-w-[140px] h-[140px] rounded-full border-2 border-gray flex flex-col gap-2 items-center justify-center text-center"
    >
      <p class="text-violet text-[28px] font-normal">7</p>
      <p class="text-violet text-[12px] font-normal leading-4 max-w-[128px]">
        {{ $t('numbers.plants') }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeBigNumbers',
}
</script>
