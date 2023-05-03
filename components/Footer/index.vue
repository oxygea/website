<template>
  <footer class="bg-white py-10 lg:pt-16 lg:pb-12">
    <div class="container">
      <div class="lg:flex lg:justify-between">
        <div class="lg:max-w-screen-sm">
          <div class="pb-10">
            <svg-icon
              name="logoDark"
              class="w-[130px] h-[51px] lg:w-[200px] lg:h-[79px]"
            />
          </div>

          <h3 class="font-medium text-xl tracking-tight lg:text-2xl">
            {{ $t('footer.conect') }}
          </h3>
          <p class="pt-4 pb-10 font-normal font-poppins text-xs lg:text-base">
            {{ $t('footer.address1') }}
            <span class="block mt-2 lg:mt-4"
              >{{ $t('footer.address2') }}

              <span class="lg:block lg:mt-1">{{
                $t('footer.address3')
              }}</span></span
            >
          </p>
        </div>

        <div class="lg:max-w-[530px] lg:w-full lg:mt-[118px] lg:mb-9">
          <h4 class="text-xl font-bold mb-6">{{ $t('footer.singup') }}</h4>
          <p
            class="cursor-pointer lg:max-w-[169px] text-center rounded-[100px] uppercase font-medium text-sm bg-green text-black self-center px-4 py-2 hover:bg-[#18A790] transition-all duration-300 font-poppins"
            @click="$nuxt.$emit('openModalContact')"
          >
            {{ $t('footer.btnSign') }}
          </p>
        </div>
      </div>

      <div
        class="flex justify-between items-center pt-14 lg:border-t-[1px] border-black"
      >
        <div class="font-normal font-poppins text-xs lg:text-base">
          {{ $t('footer.oxygea') }}
        </div>
        <div class="flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/company/oxygeaventures/"
            target="_blank"
          >
            <svg-icon
              name="linkedin"
              class="w-[23px] h-[23px] cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/oxygea.ventures/" target="_blank">
            <svg-icon name="instagram" class="w-6 h-6 cursor-pointer" />
          </a>

          <!-- <a href="https://www.youtube.com/@oxygeaventures2916" target="_blank">
            <svg-icon
              name="youtube"
              class="w-[30px] h-[21px] -ml-1 cursor-pointer"
            />
          </a> -->
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
