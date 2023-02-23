<template>
  <transition name="slide-fade">
    <header
      class="header sticky transition-all left-0 top-0 w-full h-full z-40 duration-500 lg:flex items-center justify-between lg:px-4 xs:px-10"
      :class="[
        {
          fixed: notTop && lastScrollPosition > 80,
          'opacity-0': !showNavbar && lastScrollPosition > 100,
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
            class="w-32 h-32"
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

      <!-- menu mobile -->
      <nav
        v-if="showMenu"
        class="h-full w-full lg:pt-0 bg-white lg:hidden container"
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
  </transition>
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

<style lang="postcss" scoped>
.header {
  backdrop-filter: blur(8px);
  background-color: rgb(0 0 0 / 80%);
}
</style>
