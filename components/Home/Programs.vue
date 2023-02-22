<template>
  <section class="bg-white !py-10">
    <h2 class="pb-4 font-bold text-2xl container">Programas</h2>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="mt-10 pl-5 flex items-center"
    >
      <div
        class="w-full max-w-[200px] h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
      >
        <div class="w-full">
          <h4 class="font-medium text-xl text-white">Incubação</h4>
          <p class="font-normal text-xs text-white leading-4">
            Startups que validaram seu mercado, definiram a primeira versão do
            seu produto e estão prontas para tirar o MVP do papel.
          </p>
        </div>
        <svg-icon name="circle" class="w-10 h-10" />
      </div>
      <div
        class="w-full max-w-[200px] h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
      >
        <div class="w-full">
          <h4 class="font-medium text-xl text-white">Aceleração</h4>
          <p class="font-normal text-xs text-white leading-4">
            Startups que desenvolveram um produto e estão prontas para ir a
            mercado.
          </p>
        </div>
        <svg-icon name="circle" class="w-10 h-10" />
      </div>
      <div
        class="w-full max-w-[200px] h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
      >
        <div class="w-full">
          <h4 class="font-medium text-xl text-white">Investimento</h4>
          <p class="font-normal text-xs text-white leading-4">
            Startups que já têm um negócio promissor e querem acelerar seu
            crescimento
          </p>
        </div>
        <svg-icon name="circle" class="w-10 h-10" />
      </div>
      <div
        class="w-full max-w-[200px] h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
      >
        <div class="w-full">
          <h4 class="font-medium text-xl text-white">Suporte In House</h4>
          <p class="font-normal text-xs text-white leading-4">
            Não importa o estágio de maturidade, todas as empresas do nosso
            portfolio sempre terão acesso às principais capabilities de
            desenvolvimento.
          </p>
        </div>
        <svg-icon name="circle" class="w-10 h-10" />
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
export default {
  name: 'HomePrograms',
  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 1.4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.slick-track {
  display: flex;
  align-items: center;
}
</style>
