<template>
  <nuxt-link
    :to="url"
    class="text-white relative h-[50px] flex justify-center items-center text-xs font-medium transition-colors hover:text-violet"
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
