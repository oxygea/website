<template>
  <section
    id="inthenews"
    data-section="news"
    class="bg-[#EDEDEF] py-10 lg:py-20"
  >
    <div class="container">
      <h2
        class="pb-4 font-bold text-2xl lg:text-[42px] lg:pb-6"
        data-aos="fade"
      >
        {{ $t('news.title') }}
      </h2>

      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-start-2">
          <p
            class="font-normal font-poppins text-xs pb-10 lg:max-w-[860px] lg:text-base !leading-4 lg:!leading-6"
            data-aos="fade"
          >
            {{ $t('news.desc') }}
          </p>
        </div>
        <div class="col-span-12 lg:col-start-2 lg:col-span-3">
          <h4 class="text-xl font-bold text-black mb-4 lg:text-2xl">
            {{ $t('news.highlight') }}
          </h4>
          <a
            :href="News.highlight.link"
            class="bg-white w-full p-6 flex flex-col font-poppins text-base group"
            :title="News.highlight.title"
            target="_Blank"
          >
            <div class="flex">
              <span class="text-xs font-bold mr-2">{{
                News.highlight.author
              }}</span>
              <span class="text-xs">{{ News.highlight.date }}</span>
            </div>
            <h2 class="mb-6 mt-2">
              {{ News.highlight.title }}
            </h2>
            <img
              :src="'/img/news/' + News.highlight.image"
              class="w-full transition-all ease-in-out duration-300 grayscale group-hover:grayscale-0"
            />
            <span
              class="flex cursor-pointer lg:max-w-[169px] text-center rounded-[100px] uppercase font-medium text-sm mt-6 lg:!hidden bg-green text-black self-start px-4 py-2 hover:bg-[#18A790] transition-all duration-300 font-poppins"
              >{{ $t('news.read') }}</span
            >
          </a>
        </div>
        <div class="col-span-12 lg:col-start-6 lg:col-span-6">
          <div class="flex justify-between items-center mt-10 lg:mt-0">
            <h4
              class="text-xl mt-3 font-bold text-black mb-4 lg:text-2xl lg:mt-0 justify-start"
            >
              {{ $t('news.other') }}
            </h4>
            <div class="flex items-center justify-end lg:!hidden">
              <button
                class="next-slide rotate-180 flex items-center mr-4 justify-center border-2 border-black rounded-full min-h-[32px] min-w-[32px]"
                @click="prevSlide"
              >
                <svg-icon
                  name="arrow-right"
                  class="w-[9px] h-[13px] cursor-pointer text-black fill-current"
                />
              </button>
              <button
                class="next-slide flex items-center justify-center border-2 border-black rounded-full min-h-[32px] min-w-[32px]"
                @click="nextSlide"
              >
                <svg-icon
                  name="arrow-right"
                  class="w-[9px] h-[13px] cursor-pointer text-black fill-current"
                />
              </button>
            </div>
          </div>

          <VueSlickCarousel
            ref="carouselNews"
            v-bind="slickOptionsNews"
            class="carouselnews ml-5 lg:ml-0 lg:!hidden"
          >
            <a
              v-for="(n, is) in News.news"
              :key="'listNewsMob-' + is"
              :href="n.link"
              class="!w-[220px] flex flex-col font-poppins text-xs"
              :title="n.title"
              target="_Blank"
            >
              <div class="flex">
                <span class="text-xs font-bold mr-2">{{ n.author }}</span>
                <span class="text-xs">{{ n.date }}</span>
              </div>
              <h2 class="mt-2">{{ n.title }}</h2>
            </a>
          </VueSlickCarousel>

          <div class="lg:grid lg:grid-cols-2 lg:gap-5 hidden">
            <a
              v-for="(n, is) in displayedNews"
              :key="'listNews-' + is"
              :href="n.link"
              class="bg-transparent lg:hover:bg-white transition-all duration-500 w-full p-6 flex flex-col font-poppins text-base group"
              :title="n.title"
              target="_Blank"
            >
              <div class="flex">
                <span class="text-xs font-bold mr-2">{{ n.author }}</span>
                <span class="text-xs">{{ n.date }}</span>
              </div>
              <h2 class="mt-2">{{ n.title }}</h2>
            </a>
          </div>
          <button
            v-if="hasMoreNews"
            class="hidden lg:flex cursor-pointer lg:max-w-[169px] text-center rounded-[100px] uppercase font-medium text-sm m-auto mt-4 bg-green text-black self-center px-4 py-2 hover:bg-[#18A790] transition-all duration-300 font-poppins"
            @click="loadMoreNews"
          >
            Veja mais
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TeamJSON from '../../assets/json/news'
export default {
  name: 'HomeNews',

  data() {
    return {
      News: TeamJSON,
      page: 1, // Página atual
      itemsPerPage: 4, // Quantidade de notícias por página
      slickOptionsNews: {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
        variableWidth: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      },
    }
  },
  computed: {
    // Lista de notícias a serem exibidas
    displayedNews() {
      const startIndex = (this.page - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.News.news.slice(0, endIndex)
    },

    // Verifica se há mais notícias para carregar
    hasMoreNews() {
      const startIndex = this.page * this.itemsPerPage
      return startIndex < this.News.news.length
    },
  },
  methods: {
    nextSlide() {
      this.$refs.carouselNews.next()
    },
    prevSlide() {
      this.$refs.carouselNews.prev()
    },
    loadMoreNews() {
      this.page++
    },
  },
}
</script>

<style lang="postcss">
.carouselnews {
  .slick-track {
    display: flex !important;
    align-items: center;
  }

  .slick-slide {
    margin-left: 20px;
  }

  .slick-list {
    margin-left: -20px;
  }
}
</style>
