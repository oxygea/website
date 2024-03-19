<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full bg-white transition-all duration-500 fixed w-full z-50 menu-mobile"
    >
      <div
        class="container flex justify-between items-center h-[96px] lg:!px-[85px]"
      >
        <n-link :to="localePath('/')" title="Oxygea">
          <svg-icon
            name="logoDark"
            class="w-[80px] h-[32px] lg:w-[141px] lg:h-[56px]"
          />
        </n-link>

        <span
          class="btn p-0 w-[32px] h-[32px] cursor-pointer flex z-[99] justify-center items-center menu-mobile"
          @click="$emit('close-modal')"
        >
          <svg-icon name="close" class="w-[32px] h-[32px] text-white" />
        </span>
      </div>
      <nav
        class="h-full w-full lg:pt-0 bg-white menu-mobile container lg:!px-[85px] fadeIn"
      >
        <div class="lg:mt-0 bg-white pt-[72px]">
          <div class="flex flex-col h-full items-start">
            <!-- <AnchorMenu
              :url="
                localeLocation({
                  name: 'index',
                  hash: '#future',
                  params: { offset: -64 },
                })
              "
              :title="$t('menu.future')"
              class="!text-black"
            >
              <p @click="$emit('close-modal')">
                {{ $t('menu.future') }}
              </p>
            </AnchorMenu> -->
            <AnchorMenu
              :url="
                localeLocation({
                  name: 'index',
                  hash: '#acceleration',
                  params: { offset: -64 },
                })
              "
              :title="$t('menu.acceleration')"
              class="!text-black"
            >
              <p @click="$emit('close-modal')">
                {{ $t('menu.acceleration') }}
              </p>
            </AnchorMenu>
            <AnchorMenu
              :url="
                localeLocation({
                  name: 'index',
                  hash: '#ecosystem',
                  params: { offset: -64 },
                })
              "
              :title="$t('menu.ecosystem')"
              class="!text-black"
            >
              <p @click="$emit('close-modal')">
                {{ $t('menu.ecosystem') }}
              </p>
            </AnchorMenu>
            <AnchorMenu
              :url="
                localeLocation({
                  name: 'index',
                  hash: '#about',
                  params: { offset: -64 },
                })
              "
              :title="$t('menu.about')"
              class="!text-black"
            >
              <p @click="$emit('close-modal')">
                {{ $t('menu.about') }}
              </p>
            </AnchorMenu>
            <AnchorMenu
              :url="
                localeLocation({
                  name: 'index',
                  hash: '#inthenews',
                  params: { offset: -64 },
                })
              "
              class="!text-black"
              :title="$t('menu.inthenews')"
            >
              <p @click="$emit('close-modal')">{{ $t('menu.inthenews') }}</p>
            </AnchorMenu>
            <p
              class="text-base font-bold font-poppins -tracking-[2%] h-[50px] flex justify-center items-center"
              @click="$nuxt.$emit('openModalContact')"
            >
              {{ $t('menu.contact') }}
            </p>

            <div
              class="flex justify-center items-center rounded-full bg-green w-[159px] h-12 mt-6 mb-6"
              @click="$emit('close-modal')"
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

          <div class="menu-mobile ml-2">
            <div class="flex">
              <a
                href="https://www.linkedin.com/company/oxygeaventures/"
                target="_blank"
              >
                <svg-icon
                  name="linkedin"
                  class="w-6 h-6 relative text-yellow mr-4"
                />
              </a>
              <a
                href="https://www.instagram.com/oxygea.ventures/"
                target="_blank"
              >
                <svg-icon
                  name="instagram"
                  class="w-6 h-6 relative text-yellow mr-4"
                />
              </a>
              <!-- <a
                href="https://www.youtube.com/@oxygeaventures2916"
                target="_blank"
              >
                <svg-icon
                  name="youtube"
                  class="w-6 h-6 relative text-yellow mr-4"
                />
              </a> -->
            </div>
          </div>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script>
import AnchorMenu from '@/components/Anchor/Button'

export default {
  name: 'MenuMobile',
  components: {
    AnchorMenu,
  },
  props: {
    show: Boolean,
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.menu-mobile {
  @media (min-width: 1090px) {
    display: none;
  }
}
</style>
