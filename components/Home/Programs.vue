<template>
  <section
    id="ecosystem"
    class="bg-white pt-10 pb-5 lg:py-20"
    data-aos="fade-in"
  >
    <h2 class="pb-4 font-bold text-2xl container lg:text-5xl">
      {{ $t('programs.title') }}
    </h2>

    <VueSlickCarousel
      v-bind="slickOptions"
      class="mt-10 pl-5 flex items-center lg:max-w-[1440px] lg:mx-auto lg:pl-[180px]"
    >
      <div
        v-for="(item, index) of programs"
        :key="`program=${index}`"
        class="w-full max-w-[200px] overflow-hidden min-w-[200px] relative h-full min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6 transition-all duration-500 ease-linear mr-4 lg:mr-[27px] lg:min-h-[492px] lg:max-h-[492px] lg:max-w-[277px] lg:min-w-[277px]"
        :class="[
          {
            '!bg-green': $data[`showMenu${item.value}`],
            [item.heightClassName]: $data[`showMenu${item.value}`],
          },
        ]"
      >
        <transition name="slide-fade">
          <div
            v-if="!$data[`showMenu${item.value}`]"
            class="w-full h-full transition-all flex-1 duration-500 ease-linear flex flex-wrap justify-between"
          >
            <div>
              <h4 class="font-medium text-xl text-white lg:text-2xl lg:mb-4">
                {{ $t(`programs.card${item.value}.title`) }}
              </h4>
              <p class="font-normal text-xs text-white leading-4 lg:text-sm">
                {{ $t(`programs.card${item.value}.desc`) }}
              </p>
            </div>
            <svg-icon
              name="circle"
              class="w-10 h-10 cursor-pointer mt-auto"
              @click.prevent="($event) => toggle(item.value)"
            />
          </div>
        </transition>
        <transition name="slide-fade">
          <div
            v-if="$data[`showMenu${item.value}`]"
            class="w-full h-full transition-all absolute flex-1 top-0 left-0 duration-500 ease-linear flex flex-wrap justify-between p-6"
          >
            <div>
              <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
              <ul
                class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
              >
                <li
                  v-for="(benefit, benefitIndex) in item.benefits"
                  :key="benefitIndex"
                >
                  {{
                    $t(
                      `programs.card${item.value}.benefits.t${benefitIndex + 1}`
                    )
                  }}
                </li>
              </ul>
            </div>
            <svg-icon
              name="buttonCircle"
              class="w-10 h-10 mt-auto cursor-pointer"
              @click.prevent="($event) => toggle(item.value)"
            />
          </div>
        </transition>
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
      programs: [
        { value: 1, benefits: 6, heightClassName: 'min-h-[524px]' },
        { value: 2, benefits: 6, heightClassName: 'min-h-[524px]' },
        { value: 3, benefits: 5, heightClassName: 'min-h-[404px]' },
        { value: 4, benefits: 4, heightClassName: 'min-h-[380px]' },
      ],
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

.slide-enter-active {
  transition-duration: 0.5s;
  transition-timing-function: linear;
}

.slide-leave-active {
  transition-duration: 0.5s;
  transition-timing-function: linear;
}

.slide-enter-to,
.slide-leave {
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
}
</style>
