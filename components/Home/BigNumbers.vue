<template>
  <section class="bg-white">
    <div
      class="container flex flex-col items-center justify-center pt-10 lg:flex-row lg:items-center lg:py-20"
    >
      <div
        class="w-full max-w-[180px] h-[180px] rounded-full border-2 border-violet flex flex-col gap-2 items-center justify-center text-center lg:top-0 xl:max-w-[310px] xl:h-[310px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">U$150MM</p>
        <p
          class="text-violet text-[12px] max-w-[91px] font-normal leading-4 xl:text-base"
        >
          {{ $t('numbers.capital') }}
        </p>
      </div>

      <div
        class="relative -top-5 w-full max-w-[140px] h-[140px] rounded-full bg-gray flex flex-col gap-2 items-center justify-center text-center lg:top-0 lg:-left-3 xl:max-w-[213px] xl:h-[213px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">4</p>
        <p
          class="text-violet text-[12px] font-normal leading-4 max-w-[128px] xl:text-base"
        >
          {{ $t('numbers.companies') }}
        </p>
      </div>

      <div
        class="relative -top-10 w-full max-w-[180px] h-[180px] rounded-full border-2 border-violet flex flex-col gap-2 items-center justify-center text-center lg:top-0 lg:-left-5 xl:max-w-[310px] xl:h-[310px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">7</p>
        <p
          class="text-violet text-[12px] font-normal leading-4 max-w-[128px] xl:text-base"
        >
          {{ $t('numbers.search') }}
        </p>
      </div>

      <div
        class="relative -top-[60px] w-full max-w-[140px] h-[140px] rounded-full border-2 border-gray flex flex-col gap-2 items-center justify-center text-center lg:top-0 lg:-left-7 xl:max-w-[213px] xl:h-[213px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">7</p>
        <p
          class="text-violet text-[12px] font-normal leading-4 max-w-[128px] xl:text-base"
        >
          {{ $t('numbers.plants') }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeBigNumbers',
}
</script>
