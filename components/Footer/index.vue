<template>
  <footer class="bg-white py-10 lg:pt-16 lg:pb-12">
    <div class="container">
      <div class="lg:flex lg:justify-between">
        <div class="lg:max-w-screen-sm" data-aos="fade-left">
          <div class="pb-10">
            <svg-icon
              name="logoDark2"
              class="w-[130px] h-[51px] lg:w-[200px] lg:h-[79px]"
            />
          </div>

          <h3 class="font-medium text-xl tracking-tight lg:text-2xl">
            {{ $t('footer.conect') }}
          </h3>
          <p class="pt-4 pb-10 font-normal text-xs lg:text-base">
            {{ $t('footer.address1') }}
            <span class="block mt-2 lg:mt-4"
              >{{ $t('footer.address2') }}

              <span class="lg:block lg:mt-1">{{
                $t('footer.address3')
              }}</span></span
            >
          </p>
        </div>

        <div class="lg:max-w-[530px]" data-aos="fade-right">
          <p class="font-normal text-xs lg:text-xl">
            {{ $t('footer.singup') }}
          </p>
          <label
            for="email"
            class="flex w-ful justify-between items-center pt-10 pb-4 lg:border-b-[1px] lg:border-black"
          >
            <input
              type="email"
              name="email"
              :placeholder="$t('footer.signupPlaceholder')"
              class="font-medium text-xs text-black placeholder-black w-10/12 lg:text-base"
            />
            <svg-icon name="arrowRight" class="w-4 h-4 cursor-pointer" />
          </label>
          <p class="font-normal text-xs pt-6 lg:text-sm">
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
        <div class="font-normal text-xs lg:text-base">
          {{ $t('footer.oxygea') }}
        </div>
        <div class="flex gap-5 items-center">
          <svg-icon name="linkedin" class="w-[23px] h-[23px] cursor-pointer" />
          <svg-icon name="instagram" class="w-6 h-6 cursor-pointer" />
          <svg-icon
            name="youtube"
            class="w-[30px] h-[21px] -ml-1 cursor-pointer"
          />
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
