<template>
  <nuxt-link
    :to="url"
    class="text-white relative h-[56px] flex justify-center items-center text-base font-medium -tracking-[2%] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:w-full hover:after:right-auto focus:after:left-0 focus:after:w-full focus:after:right-auto active:after:left-0 active:after:w-full active:after:right-auto"
    :title="$t('menu.about')"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AnchorMenu',
  props: {
    url: {
      default: '#',
      type: String,
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply flex;
}
</style>
