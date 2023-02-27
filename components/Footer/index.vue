<template>
  <footer class="bg-white !py-10">
    <div class="container">
      <div class="lg:flex lg:justify-between">
        <div class="lg:max-w-screen-sm">
          <div class="pb-10">
            <svg-icon name="logoDark2" class="w-[130px] h-[51px]" />
          </div>

          <h3 class="font-medium text-xl tracking-tight">
            {{ $t('footer.conect') }}
          </h3>
          <p class="pt-4 pb-10 font-normal text-xs">
            {{ $t('footer.address') }}
          </p>
        </div>

        <div class="lg:max-w-[530px]">
          <p class="font-normal text-xs">
            {{ $t('footer.singup') }}
          </p>
          <label
            for="email"
            class="flex w-ful justify-between items-center pt-10 pb-4 lg:border-b-[1px] lg:border-black"
          >
            <input
              type="email"
              name="email"
              placeholder="Insira seu e-email"
              class="font-medium text-xs text-black placeholder-black w-10/12"
            />
            <svg-icon name="arrowRight" class="w-4 h-4 cursor-pointer" />
          </label>
          <p class="font-normal text-xs pt-6">
            {{ $t('footer.signit') }}
            <strong
              class="cursor-pointer"
              @click="$nuxt.$emit('openModalTerms')"
            >
              {{ $t('footer.terms') }}</strong
            >
            {{ $t('footer.terms2') }}
            <strong
              class="cursor-pointer"
              @click="$nuxt.$emit('openModalPrivacy')"
            >
              {{ $t('footer.privacy') }}</strong
            >
            {{ $t('footer.response') }}
          </p>
        </div>
      </div>

      <div
        class="flex justify-between items-center pt-14 lg:border-t-[1px] border-black"
      >
        <div class="font-normal text-xs">{{ $t('footer.oxygea') }}</div>
        <div class="flex gap-5 items-center">
          <svg-icon name="linkedin" class="w-[18px] h-[18px]" />
          <svg-icon name="instagram" class="w-5 h-5" />
          <svg-icon name="youtube" class="w-5 h-[14px]" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
}
</script>
