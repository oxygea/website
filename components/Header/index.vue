<template>
  <header
    data-header
    :class="[
      {
        '!bg-white': !menuDark,
      },
    ]"
    class="header fixed left-0 top-0 w-full z-40 menu-desktop items-center justify-between lg:px-4 xs:px-10 lg:py-4"
  >
    <div class="container flex flex-row justify-between items-center h-[64px]">
      <n-link
        :class="{ hidden: !menuDark }"
        :to="localePath('/')"
        title="Oxygea"
      >
        <svg-icon
          name="logo"
          class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
        />
      </n-link>

      <n-link
        :class="{ hidden: menuDark }"
        :to="localePath('/')"
        title="Oxygea"
      >
        <svg-icon
          name="logoDark"
          class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
        />
      </n-link>

      <span
        class="btn p-0 w-[32px] h-[32px] cursor-pointer flex z-[99] justify-center items-center svg-mobile"
        @click="$nuxt.$emit('openMenuMobile')"
      >
        <svg-icon name="hamburger" class="w-[18px] h-[16px]" />
      </span>

      <!-- menu desktop-->
      <div class="h-full menu-desktop justify-center items-center hidden">
        <nav
          class="text-white flex flex-row gap-8 menu-desktop--list"
          :class="{ menuWhite: !menuDark }"
        >
          <AnchorMenu
            data-link="future"
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
            data-link="acceleration"
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
            data-link="ecosystem"
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
            data-link="about"
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

          <AnchorMenu
            data-link="inthenews"
            :url="
              localeLocation({
                name: 'index',
                hash: '#inthenews',
                params: { offset: -80 },
              })
            "
            :title="$t('menu.inthenews')"
          >
            {{ $t('menu.inthenews') }}
          </AnchorMenu>

          <p
            class="text-white font-poppins relative h-[50px] flex justify-center items-center text-xs lg:text-sm font-medium transition-colors hover:text-violet cursor-pointer"
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

          <div :class="{ hidden: !menuDark }" class="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/oxygeaventures/"
              target="_blank"
            >
              <svg-icon name="linkedin-white" class="w-6 h-6 relative" />
            </a>
            <a
              href="https://www.instagram.com/oxygea.ventures/"
              target="_blank"
            >
              <svg-icon name="instagram-white" class="w-6 h-6 relative" />
            </a>

            <!-- <a
              href="https://www.youtube.com/@oxygeaventures2916"
              target="_blank"
            >
              <svg-icon name="youtube-white" class="w-6 h-6 relative" />
            </a> -->
          </div>

          <div :class="{ hidden: menuDark }" class="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/oxygeaventures/"
              target="_blank"
            >
              <svg-icon name="linkedin" class="w-6 h-6 relative" />
            </a>
            <a
              href="https://www.instagram.com/oxygea.ventures/"
              target="_blank"
            >
              <svg-icon name="instagram" class="w-6 h-6 relative" />
            </a>

            <!-- <a
              href="https://www.youtube.com/@oxygeaventures2916"
              target="_blank"
            >
              <svg-icon name="youtube" class="w-6 h-6 relative" />
            </a> -->
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
      menuDark: true,
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

    const header = document.querySelector('[data-header]')
    const sections = [...document.querySelectorAll('[data-section]')]

    const options = {
      rootMargin: `-${header.offsetHeight - 1}px 0px -${
        header.offsetHeight - 1
      }px 0px`,
      threshold: 0.6,
    }

    const onIntersect = (entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting)
      if (visibleSections.length > 0) {
        const theme = visibleSections[0].target.dataset.section
        header.setAttribute('data-theme', theme)
      } else {
        header.removeAttribute('data-theme')
      }
    }

    const observer = new IntersectionObserver(onIntersect, options)

    sections.forEach((section) => {
      observer.observe(section)
    })
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onSelectLanguage(language) {
      this.language = language
    },

    onScroll() {
      const isMobile = window.innerWidth < 1024

      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition > 1200 && !isMobile) {
        this.menuDark = false
      } else {
        this.menuDark = true
      }
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

[data-theme='ecosystem'] [data-link='ecosystem'] {
  color: rgb(130 130 235);
}

[data-theme='future'] [data-link='future'] {
  color: rgb(130 130 235);
}

[data-theme='acceleration'] [data-link='acceleration'] {
  color: rgb(130 130 235);
}

[data-theme='about'] [data-link='about'] {
  color: rgb(130 130 235);
}

.menu-desktop {
  @media (min-width: 1090px) {
    display: flex;
    padding-left: 40px;
  }
}

.svg-mobile {
  @media (min-width: 1090px) {
    display: none;
  }
}
</style>
