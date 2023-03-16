<template>
  <section class="bg-white pt-10 mb-[-20px] lg:mb-0 lg:py-20">
    <div
      class="container flex flex-col items-center justify-center lg:flex-row lg:items-center"
    >
      <div
        data-aos="fade"
        data-aos-delay="0"
        class="custom-border w-full max-w-[180px] h-[180px] flex flex-col gap-2 items-center justify-center text-center lg:top-0 xl:max-w-[310px] xl:h-[310px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">US$150MM</p>
        <p
          class="text-violet text-[12px] max-w-[91px] font-normal font-poppins leading-4 xl:text-base lg:max-w-[150px] lg:!leading-6"
        >
          {{ $t('numbers.capital') }}
        </p>
      </div>

      <div
        data-aos="fade"
        data-aos-delay="200"
        class="custom-background relative -top-5 w-full max-w-[140px] h-[140px] flex flex-col gap-2 items-center justify-center text-center lg:top-0 lg:-left-3 xl:max-w-[213px] xl:h-[213px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">4</p>
        <p
          class="text-violet text-[12px] font-poppins font-normal leading-4 max-w-[128px] xl:text-base lg:max-w-[110px] lg:!leading-6"
        >
          {{ $t('numbers.companies') }}
        </p>
      </div>

      <div
        data-aos="fade"
        data-aos-delay="400"
        class="custom-border relative -top-10 w-full max-w-[180px] h-[180px] flex flex-col gap-2 items-center justify-center text-center lg:top-0 lg:-left-5 xl:max-w-[310px] xl:h-[310px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">7</p>
        <p
          class="text-violet text-[12px] font-poppins font-normal leading-4 max-w-[128px] xl:text-base lg:max-w-[220px] lg:!leading-6"
        >
          {{ $t('numbers.search') }}
        </p>
      </div>

      <div
        data-aos="fade"
        data-aos-delay="600"
        class="custom-border custom-border--gray relative -top-[60px] w-full max-w-[140px] h-[140px] flex flex-col gap-2 items-center justify-center text-center lg:top-0 lg:-left-7 xl:max-w-[213px] xl:h-[213px]"
      >
        <p class="text-violet text-[28px] font-normal xl:text-5xl">7</p>
        <p
          class="text-violet text-[12px] font-poppins font-normal leading-4 max-w-[128px] xl:text-base lg:!leading-6"
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

<style lang="postcss" scoped>
.custom-border {
  position: relative;

  &::before {
    @apply transition-transform;
    @apply rounded-full;
    @apply border-2;
    @apply border-violet;

    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &--gray::before {
    @apply border-gray;
  }

  &:hover::before {
    @apply scale-110;
  }
}

.custom-background {
  position: relative;

  p {
    z-index: 2;
  }

  &::before {
    @apply transition-transform;
    @apply rounded-full;
    @apply bg-gray;

    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    @apply scale-110;
  }
}
</style>
