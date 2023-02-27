<template>
  <section id="ecosystem" class="bg-white pt-10 pb-5 lg:py-20">
    <h2 class="pb-4 font-bold text-2xl container">
      {{ $t('programs.title') }}
    </h2>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="mt-10 pl-5 flex items-center lg:max-w-[1440px] lg:mx-auto lg:px-[180px]"
    >
      <div
        v-for="(item, index) of programs"
        :key="`program=${index}`"
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6 transition-all duration-500 ease-linear mr-4 lg:mr-[27px]"
        :class="[
          {
            '!bg-green': $data[`showMenu${item}`],
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300 ease-linear"
          :class="{ hidden: $data[`showMenu${item}`] }"
        >
          <h4 class="font-medium text-xl text-white">
            {{ $t(`programs.card${item}.title`) }}
          </h4>
          <p class="font-normal text-xs text-white leading-4">
            {{ $t(`programs.card${item}.desc`) }}
          </p>
        </div>
        <div
          class="w-full transition-all duration-300 ease-linear"
          :class="{ hidden: !$data[`showMenu${item}`] }"
        >
          <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>{{ $t(`programs.card${item}.benefits.t1`) }}</li>
            <li>{{ $t(`programs.card${item}.benefits.t2`) }}</li>
            <li>{{ $t(`programs.card${item}.benefits.t3`) }}</li>
            <li>{{ $t(`programs.card${item}.benefits.t4`) }}</li>
            <li>{{ $t(`programs.card${item}.benefits.t5`) }}</li>
            <li>{{ $t(`programs.card${item}.benefits.t6`) }}</li>
          </ul>
        </div>
        <svg-icon
          :class="{ hidden: $data[`showMenu${item}`] }"
          name="circle"
          class="w-10 h-10 mt-5 cursor-pointer"
          @click.prevent="($event) => toggle(item)"
        />
        <svg-icon
          :class="{ hidden: !$data[`showMenu${item}`] }"
          name="buttonCircle"
          class="w-10 h-10 mt-5 cursor-pointer"
          @click.prevent="($event) => toggle(item)"
        />
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
export default {
  name: 'HomePrograms',
  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        variableWidth: true,
      },
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      programs: [1, 2, 3, 4],
    }
  },

  methods: {
    toggle(item) {
      this[`showMenu${item}`] = !this[`showMenu${item}`]
    },
  },
}
</script>

<style>
.slick-track {
  display: flex;
  align-items: center;
}
</style>
