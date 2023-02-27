<template>
  <section id="ecosystem" class="bg-white !pt-10 !pb-5">
    <h2 class="pb-4 font-bold text-2xl container">
      {{ $t('programs.title') }}
    </h2>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="mt-10 pl-5 flex items-center"
    >
      <transition name="height-transition" mode="out-in">
        <div
          v-if="!showMenu1"
          class="w-full max-w-[200px] min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        >
          <div class="w-full">
            <h4 class="font-medium text-xl text-white">
              {{ $t('programs.card1.title') }}
            </h4>
            <p class="font-normal text-xs text-white leading-4">
              {{ $t('programs.card1.desc') }}
            </p>
          </div>
          <svg-icon
            name="circle"
            class="w-10 h-10 mt-5"
            @click.prevent="showMenu1 = !showMenu1"
          />
        </div>
        <div
          v-if="showMenu1"
          class="w-full max-w-[200px] min-h-[288px] bg-green !flex flex-col justify-between px-6 py-6"
        >
          <div class="w-full">
            <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
            <ul
              class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
            >
              <li>{{ $t('programs.card1.benefits.t1') }}</li>
              <li>{{ $t('programs.card1.benefits.t2') }}</li>
              <li>{{ $t('programs.card1.benefits.t3') }}</li>
              <li>{{ $t('programs.card1.benefits.t4') }}</li>
              <li>{{ $t('programs.card1.benefits.t5') }}</li>
              <li>{{ $t('programs.card1.benefits.t6') }}</li>
            </ul>
          </div>
          <svg-icon
            name="buttonCircle"
            class="w-10 h-10 mt-5"
            @click.prevent="showMenu1 = !showMenu1"
          />
        </div>
      </transition>

      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        :class="[
          {
            '!bg-green': showMenu2,
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: showMenu2 }"
        >
          <h4 class="font-medium text-xl text-white">
            {{ $t('programs.card2.title') }}
          </h4>
          <p class="font-normal text-xs text-white leading-4">
            {{ $t('programs.card2.desc') }}
          </p>
        </div>
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: !showMenu2 }"
        >
          <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>{{ $t('programs.card2.benefits.t1') }}</li>
            <li>{{ $t('programs.card2.benefits.t2') }}</li>
            <li>{{ $t('programs.card2.benefits.t3') }}</li>
            <li>{{ $t('programs.card2.benefits.t4') }}</li>
            <li>{{ $t('programs.card2.benefits.t5') }}</li>
            <li>{{ $t('programs.card2.benefits.t6') }}</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu2 = !showMenu2"
        />
      </div>
      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        :class="[
          {
            '!bg-green': showMenu3,
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: showMenu3 }"
        >
          <h4 class="font-medium text-xl text-white">
            {{ $t('programs.card3.title') }}
          </h4>
          <p class="font-normal text-xs text-white leading-4">
            {{ $t('programs.card3.desc') }}
          </p>
        </div>
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: !showMenu3 }"
        >
          <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>{{ $t('programs.card3.benefits.t1') }}</li>
            <li>{{ $t('programs.card3.benefits.t2') }}</li>
            <li>{{ $t('programs.card3.benefits.t3') }}</li>
            <li>{{ $t('programs.card3.benefits.t4') }}</li>
            <li>{{ $t('programs.card3.benefits.t5') }}</li>
            <li>{{ $t('programs.card3.benefits.t6') }}</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu3 = !showMenu3"
        />
      </div>
      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        :class="[
          {
            '!bg-green': showMenu4,
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: showMenu4 }"
        >
          <h4 class="font-medium text-xl text-white">
            {{ $t('programs.card4.title') }}
          </h4>
          <p class="font-normal text-xs text-white leading-4">
            {{ $t('programs.card4.desc') }}
          </p>
        </div>
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: !showMenu4 }"
        >
          <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>{{ $t('programs.card4.benefits.t1') }}</li>
            <li>{{ $t('programs.card4.benefits.t2') }}</li>
            <li>{{ $t('programs.card4.benefits.t3') }}</li>
            <li>{{ $t('programs.card4.benefits.t4') }}</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu4 = !showMenu4"
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
        slidesToShow: 1.4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      },
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
    }
  },
}
</script>

<style>
.slick-track {
  display: flex;
  align-items: center;
}

.height-transition-enter-active,
.height-transition-leave-active {
  transition: height 0.5s ease;
}

.height-transition-enter,
.height-transition-leave-to {
  height: 0;
  overflow: hidden;
}
</style>
