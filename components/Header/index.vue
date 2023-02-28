<template>
  <header
    class="header fixed left-0 top-0 w-full z-40 lg:flex items-center justify-between lg:px-4 xs:px-10 lg:pb-4"
    :class="[
      {
        'header-open': showMenu,
        fadeIn2: showMenu,
      },
    ]"
  >
    <div
      class="container flex flex-row justify-between items-center h-[64px]"
      :class="[
        {
          'bg-white': showMenu,
        },
      ]"
    >
      <!-- logo -->
      <n-link :to="localePath('/')" title="Oxygea">
        <svg-icon
          name="logo"
          class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
          :class="{ hidden: showMenu }"
        />
        <svg-icon
          name="logoDark"
          class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
          :class="{ hidden: !showMenu }"
        />
      </n-link>

      <span
        class="btn p-0 w-[32px] h-[32px] cursor-pointer flex z-[99] justify-center items-center lg:hidden"
        @click.prevent="showMenu = !showMenu"
      >
        <svg-icon
          name="hamburger"
          :class="{ hidden: showMenu }"
          class="w-[18px] h-[16px]"
        />
        <svg-icon
          name="close"
          :class="{ hidden: !showMenu }"
          class="w-[20px] h-[20px] text-white"
        />
      </span>

      <!-- menu desktop-->
      <div class="h-full lg:flex justify-center items-center hidden">
        <nav class="text-white flex flex-row gap-10 pt-4">
          <AnchorMenu :url="'#'" :title="$t('menu.future')">
            {{ $t('menu.future') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.acceleration')">
            {{ $t('menu.acceleration') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.ecosystem')">
            {{ $t('menu.ecosystem') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.about')">
            {{ $t('menu.about') }}
          </AnchorMenu>
          <AnchorMenu :url="'#'" :title="$t('menu.contact')">
            {{ $t('menu.contact') }}
          </AnchorMenu>

          <n-link
            v-if="$i18n.locale !== 'pt'"
            title="Ver em  Português"
            :to="switchLocalePath('pt')"
            class="rounded-[100px] bg-green text-black font-medium self-center px-4 py-1"
            @click="onSelectLanguage('pt')"
          >
            <span class="relative z-[2]"> PT </span>
          </n-link>

          <n-link
            v-else
            title="Select English"
            :to="switchLocalePath('en')"
            class="rounded-[100px] bg-green text-black font-medium self-center px-4 py-1"
            @click="onSelectLanguage('en')"
          >
            <span class="relative z-[2]"> EN </span>
          </n-link>

          <div class="flex items-center gap-4">
            <svg-icon name="linkedin-white" class="w-6 h-6 relative" />
            <svg-icon name="instagram-white" class="w-6 h-6 relative" />
            <svg-icon name="youtube-white" class="w-6 h-6 relative" />
          </div>
        </nav>
      </div>
    </div>

    <!-- menu mobile -->
    <nav
      v-if="showMenu"
      class="h-full w-full lg:pt-0 bg-white lg:hidden container fadeIn"
    >
      <div class="lg:mt-0 bg-white pt-[72px]">
        <div class="flex flex-col h-full items-start">
          <AnchorMenu
            :url="'#future'"
            :title="$t('menu.future')"
            class="text-black"
          >
            {{ $t('menu.future') }}
          </AnchorMenu>
          <AnchorMenu
            :url="'#acceleration'"
            :title="$t('menu.acceleration')"
            class="text-black"
          >
            {{ $t('menu.acceleration') }}
          </AnchorMenu>
          <AnchorMenu
            :url="'#ecosystem'"
            :title="$t('menu.ecosystem')"
            class="text-black"
          >
            {{ $t('menu.ecosystem') }}
          </AnchorMenu>
          <AnchorMenu
            :url="'#about'"
            :title="$t('menu.about')"
            class="text-black"
          >
            {{ $t('menu.about') }}
          </AnchorMenu>

          <p
            class="text-base font-bold -tracking-[2%] h-[50px] flex justify-center items-center"
            @click="$nuxt.$emit('openModalContact')"
          >
            {{ $t('menu.contact') }}
          </p>

          <div
            class="flex justify-center items-center rounded-full bg-green w-[159px] h-12 mt-6 mb-[51px]"
            @click="closeMenu()"
          >
            <nuxt-link
              v-show="$i18n.locale !== 'pt'"
              :to="switchLocalePath('pt')"
              class="font-bold text-xs"
              @click="onSelectLanguage('pt')"
            >
              Portuguese version
            </nuxt-link>
            <nuxt-link
              v-show="$i18n.locale !== 'en'"
              :to="switchLocalePath('en')"
              class="font-bold text-xs"
              @click="onSelectLanguage('en')"
            >
              Versão em inglês
            </nuxt-link>
          </div>
        </div>

        <div class="lg:hidden ml-2">
          <div class="flex">
            <svg-icon
              name="linkedin"
              class="w-6 h-6 relative text-yellow mr-4"
            />
            <svg-icon
              name="instagram"
              class="w-6 h-6 relative text-yellow mr-4"
            />
            <svg-icon
              name="youtube"
              class="w-6 h-6 relative text-yellow mr-4"
            />
          </div>
        </div>
      </div>
    </nav>
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

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
