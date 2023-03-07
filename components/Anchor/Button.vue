<template>
  <nuxt-link
    :to="url"
    class="text-white relative h-[50px] flex justify-center items-center lg:text-sm lg:font-medium transition-colors hover:text-violet text-base font-bold -tracking-[2%]"
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
      type: [String, Object],
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply flex;
}
</style>
