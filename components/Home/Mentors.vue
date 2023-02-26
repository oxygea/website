<template>
  <section class="bg-white !py-10">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-[42px] lg:pb-6">Mentores</h2>
      <p
        class="font-normal text-xs leading-4 pb-10 lg:text-base lg:ml-[110px] lg:max-w-[530px]"
      >
        Especialistas reconhecidos em diversos campos do conhecimento colaboram
        com a gente. Referências da indústria, da ciência, da pesquisa, da
        inovação e da sustentabilidade, com a missão de oferecer a profundidade
        necessária para mudar o mercado.
      </p>
      <p class="font-bold text-xs lg:hidden">FILTRAR POR</p>
    </div>

    <div class="hidden lg:flex container items-center !pb-10">
      <p class="font-bold text-xs ml-[110px] w-full mr-6 min-w-max">
        FILTRAR POR
      </p>

      <VueSlickCarousel v-bind="slickOptions" class="flex items-center w-full">
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'All',
              'text-white': selectFilter === 'All',
            },
          ]"
          @click.prevent="selectFilter = 'All'"
        >
          Todos
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'Sustainability',
              'text-white': selectFilter === 'Sustainability',
            },
          ]"
          @click.prevent="selectFilter = 'Sustainability'"
        >
          Sustentabilidade
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'Technology',
              'text-white': selectFilter === 'Technology',
            },
          ]"
          @click.prevent="selectFilter = 'Technology'"
        >
          Tecnologia
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'Biochemistry',
              'text-white': selectFilter === 'Biochemistry',
            },
          ]"
          @click.prevent="selectFilter = 'Biochemistry'"
        >
          Bioquímica
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'HumanResources',
              'text-white': selectFilter === 'HumanResources',
            },
          ]"
          @click.prevent="selectFilter = 'HumanResources'"
        >
          Recursos Humanos
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container !pr-0 !pb-10 !pt-2 lg:hidden">
      <VueSlickCarousel v-bind="slickOptions" class="flex items-center w-full">
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'All',
              'text-white': selectFilter === 'All',
            },
          ]"
          @click.prevent="selectFilter = 'All'"
        >
          Todos
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'Sustainability',
              'text-white': selectFilter === 'Sustainability',
            },
          ]"
          @click.prevent="selectFilter = 'Sustainability'"
        >
          Sustentabilidade
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'Technology',
              'text-white': selectFilter === 'Technology',
            },
          ]"
          @click.prevent="selectFilter = 'Technology'"
        >
          Tecnologia
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'Biochemistry',
              'text-white': selectFilter === 'Biochemistry',
            },
          ]"
          @click.prevent="selectFilter = 'Biochemistry'"
        >
          Bioquímica
        </div>
        <div
          class="border-solid border border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectFilter === 'HumanResources',
              'text-white': selectFilter === 'HumanResources',
            },
          ]"
          @click.prevent="selectFilter = 'HumanResources'"
        >
          Recursos Humanos
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container">
      <div class="w-full flex flex-wrap">
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
            <p class="font-bold text-sm">VER MAIS</p>
            <svg-icon name="arrowCircle" class="w-6 h-6" />
          </div>
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        variableWidth: true,
      },
      selectFilter: 'All',
    }
  },
}
</script>
