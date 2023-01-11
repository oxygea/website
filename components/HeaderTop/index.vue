<template>
  <header
    class="header fixed transition-all left-0 top-0 w-full z-40 duration-300 flex items-center justify-between px-4 xs:px-10 header"
    :class="[
      {
        fixed: notTop && lastScrollPosition > 80,
        'opacity-0': !showNavbar && lastScrollPosition > 100,
      },
    ]"
  >
    <div class="container flex flex-row justify-between items-center h-[88px]">
      <!-- logo -->
      <n-link :to="localePath('/')" title="Oxygea">
        <svg-icon
          name="logo"
          class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
        />
      </n-link>

      <!-- menu -->
      <div class="h-full flex justify-center items-center">
        <nav class="text-white flex flex-row gap-10 pt-4">
          <AnchorMenu :url="'#'" :title="$t('menu.about')">
            {{ $t('menu.about') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.startups')">
            {{ $t('menu.startups') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.partners')">
            {{ $t('menu.partners') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.mentors')">
            {{ $t('menu.mentors') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.founders')">
            {{ $t('menu.founders') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.contact')">
            {{ $t('menu.contact') }}
          </AnchorMenu>

          <n-link
            v-if="$i18n.locale !== 'pt'"
            title="Ver em  Português"
            :to="switchLocalePath('pt')"
            class="text-white w-[38px] h-10 border border-white border-solid text-base font-medium flex justify-center items-center mt-2 relative after:w-0 after:h-full after:bg-white after:absolute after:top-0 after:right-0 after:transition-all after:duration-300 after:ease-out lg:hover:text-black hover:after:left-0 hover:after:w-full hover:after:right-auto"
            @click="onSelectLanguage('pt')"
          >
            <span class="relative z-[2]"> PT </span>
          </n-link>

          <n-link
            v-else
            title="Select English"
            :to="switchLocalePath('en')"
            class="text-white w-[38px] h-10 border border-white border-solid text-base font-medium flex justify-center items-center mt-2 relative after:w-0 after:h-full after:bg-white after:absolute after:top-0 after:right-0 after:transition-all after:duration-300 after:ease-out lg:hover:text-black hover:after:left-0 hover:after:w-full hover:after:right-auto"
            @click="onSelectLanguage('en')"
          >
            <span class="relative z-[2]"> EN </span>
          </n-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import AnchorMenu from '@/components/Anchor/Button'
export default {
  name: 'HeaderTop',
  components: {
    AnchorMenu,
  },
  data() {
    return {
      showNavbar: true,
      notTop: false,
      lastScrollPosition: 0,
      showMenu: false,
      language: 'pt',
    }
  },

  watch: {
    $route() {
      this.showNavbar = false
      this.notTop = false
      this.showMenu = false
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onSelectLanguage(language) {
      this.language = language
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition < 0 && window.pageYOffset > 105) {
        return
      }
      if (currentScrollPosition > 100) {
        this.notTop = true
      } else {
        this.notTop = false
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      if (this.showNavbar) {
        this.showMenu = false
      }
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>

<style lang="postcss" scoped>
.header {
  backdrop-filter: blur(8px);
  background-color: rgb(0 0 0 / 80%);
}
</style>
