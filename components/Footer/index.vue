<template>
  <footer class="bg-white container !py-10">
    <div class="pb-10">
      <svg-icon name="logoDark2" class="w-[130px] h-[51px]" />
    </div>
    <div>
      <h3 class="font-medium text-xl tracking-tight">
        Conexão com o ecossistema de startups para acelerar e investir em um
        futuro sustentável.
      </h3>
      <p class="pt-4 pb-10 font-normal text-xs">
        Estamos localizados no Cubo by Itaú Alameda Vicente Pinzon 54, 11º
        andar. Vila Olímpia, SP. CEP 04547-130
      </p>
      <p class="font-normal text-xs">
        Inscreva-se e fique por dentro do que acontece em nosso ecossistema.
      </p>
      <label
        for="email"
        class="flex w-ful justify-between items-center pt-10 pb-4 border-b-[1px] border-black"
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
        Ao assinar a newsletter, você concorda com os
        <strong @click="$nuxt.$emit('openModalTerms')"
          >Termos e Condições de Uso</strong
        >
        e a nossa
        <strong @click="$nuxt.$emit('openModalPrivacy')"
          >Política de Privacidade.</strong
        >
        Nós tratamos sua informação com responsabilidade.
      </p>
    </div>
    <div class="flex justify-between items-center pt-14">
      <div class="font-normal text-xs">© 2023 Oxygea</div>
      <div class="flex gap-5 items-center">
        <svg-icon name="linkedin" class="w-[18px] h-[18px]" />
        <svg-icon name="instagram" class="w-5 h-5" />
        <svg-icon name="youtube" class="w-5 h-[14px]" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
}
</script>
