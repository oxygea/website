<template>
  <section class="bg-white !py-10">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl">
        {{ $t('mentors.title') }}
      </h2>
      <p class="font-normal text-xs leading-4 pb-10">
        {{ $t('mentors.desc') }}
      </p>
      <p class="font-bold text-xs">
        {{ $t('mentors.filter.title') }}
      </p>
    </div>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="pl-5 pb-10 pt-2 flex items-center w-full"
    >
      <div
        class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px]"
        :class="[
          {
            'bg-black': selectFilter === 'All',
            'text-white': selectFilter === 'All',
          },
        ]"
        @click.prevent="selectFilter = 'All'"
      >
        {{ $t('mentors.filter.all') }}
      </div>
      <div
        class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px]"
        :class="[
          {
            'bg-black': selectFilter === 'Sustainability',
            'text-white': selectFilter === 'Sustainability',
          },
        ]"
        @click.prevent="selectFilter = 'Sustainability'"
      >
        {{ $t('mentors.filter.sustainability') }}
      </div>
      <div
        class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px]"
        :class="[
          {
            'bg-black': selectFilter === 'Technology',
            'text-white': selectFilter === 'Technology',
          },
        ]"
        @click.prevent="selectFilter = 'Technology'"
      >
        {{ $t('mentors.filter.technology') }}
      </div>
      <div
        class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px]"
        :class="[
          {
            'bg-black': selectFilter === 'Biochemistry',
            'text-white': selectFilter === 'Biochemistry',
          },
        ]"
        @click.prevent="selectFilter = 'Biochemistry'"
      >
        {{ $t('mentors.filter.biochemistry') }}
      </div>
      <div
        class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px]"
        :class="[
          {
            'bg-black': selectFilter === 'HumanResources',
            'text-white': selectFilter === 'HumanResources',
          },
        ]"
        @click.prevent="selectFilter = 'HumanResources'"
      >
        {{ $t('mentors.filter.humanResources') }}
      </div>
    </VueSlickCarousel>
    <div class="w-full flex flex-wrap container">
      <div
        class="grid grid-cols-3 w-full items-center py-4 border-y border-gray"
      >
        <p class="font-medium text-xs">Jorge Soto</p>
        <nuxt-img
          preload
          :src="`defaultMentor.png`"
          format="webp"
          fit="fill"
          quality="100"
          loading="lazy"
          sizes="100px sm:100vw lg:300px"
          :alt="`Imagem team ${c}`"
          :title="`Team ${c}`"
          class="w-16 h-16 m-auto"
        />
        <div
          class="flex justify-between items-center min-w-max gap-2 cursor-pointer"
        >
          <p class="font-bold text-sm">{{ $t('mentors.filter.more') }}</p>
          <svg-icon name="arrowCircle" class="w-6 h-6" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeMentors',
  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 2.7,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      },
      selectFilter: 'All',
    }
  },
}
</script>
