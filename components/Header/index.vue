<template>
  <header
    :class="{ navbarhidden: !showNavbar }"
    class="header fixed left-0 top-0 w-full z-40 lg:flex items-center justify-between lg:px-4 xs:px-10 lg:py-4 navbar"
  >
    <div class="container flex flex-row justify-between items-center h-[64px]">
      <n-link :to="localePath('/')" title="Oxygea">
        <svg-icon
          name="logo"
          class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
        />
      </n-link>

      <span
        class="btn p-0 w-[32px] h-[32px] cursor-pointer flex z-[99] justify-center items-center lg:hidden"
        @click="$nuxt.$emit('openMenuMobile')"
      >
        <svg-icon name="hamburger" class="w-[18px] h-[16px]" />
      </span>

      <!-- menu desktop-->
      <div class="h-full lg:flex justify-center items-center hidden">
        <nav class="text-white flex flex-row gap-10 pt-4">
          <AnchorMenu
            :url="
              localeLocation({
                name: 'index',
                hash: '#future',
                params: { offset: -80 },
              })
            "
            :title="$t('menu.future')"
          >
            {{ $t('menu.future') }}
          </AnchorMenu>
          <AnchorMenu
            :url="
              localeLocation({
                name: 'index',
                hash: '#acceleration',
                params: { offset: -80 },
              })
            "
            :title="$t('menu.acceleration')"
          >
            {{ $t('menu.acceleration') }}
          </AnchorMenu>
          <AnchorMenu
            :url="
              localeLocation({
                name: 'index',
                hash: '#ecosystem',
                params: { offset: -80 },
              })
            "
            :title="$t('menu.ecosystem')"
          >
            {{ $t('menu.ecosystem') }}
          </AnchorMenu>
          <AnchorMenu
            :url="
              localeLocation({
                name: 'index',
                hash: '#about',
                params: { offset: -80 },
              })
            "
            :title="$t('menu.about')"
          >
            {{ $t('menu.about') }}
          </AnchorMenu>
          <p
            class="text-white relative h-[50px] flex justify-center items-center text-xs lg:text-sm font-medium transition-colors hover:text-violet cursor-pointer"
            @click="$nuxt.$emit('openModalContact')"
          >
            {{ $t('menu.contact') }}
          </p>

          <n-link
            v-if="$i18n.locale !== 'pt'"
            title="Ver em  Português"
            :to="switchLocalePath('pt')"
            class="rounded-[100px] bg-green text-black font-medium self-center px-4 py-1 hover:bg-[#18A790] transition-all duration-300"
            @click="onSelectLanguage('pt')"
          >
            <span class="relative z-[2]"> PT </span>
          </n-link>

          <n-link
            v-else
            title="Select English"
            :to="switchLocalePath('en')"
            class="rounded-[100px] bg-green text-black font-medium self-center px-4 py-1 hover:bg-[#18A790] transition-all duration-300"
            @click="onSelectLanguage('en')"
          >
            <span class="relative z-[2]"> EN </span>
          </n-link>

          <div class="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/oxygeaventures/"
              target="_blank"
            >
              <svg-icon name="linkedin-white" class="w-6 h-6 relative" />
            </a>
            <a href="https://www.instagram.com/oxygeaventures/" target="_blank">
              <svg-icon name="instagram-white" class="w-6 h-6 relative" />
            </a>

            <a
              href="https://www.youtube.com/@oxygeaventures2916"
              target="_blank"
            >
              <svg-icon name="youtube-white" class="w-6 h-6 relative" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import AnchorMenu from '@/components/Anchor/Button'
export default {
  name: 'HeaderDefault',
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
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>

<style scoped>
.header {
  backdrop-filter: blur(8px);
  background-color: rgb(0 0 0 / 80%);

  @media (min-width: 1024px) {
    background-color: #000;
  }
}

.slide-fade-enter-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.navbarhidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
