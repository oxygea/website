<template>
  <section class="bg-white !pt-10 !pb-5">
    <h2 class="pb-4 font-bold text-2xl container">Programas</h2>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="mt-10 pl-5 flex items-center"
    >
      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6 transition-all duration-300s ease-linear"
        :class="[
          {
            '!bg-green': showMenu1,
          },
        ]"
      >
        <div class="w-full" :class="{ hidden: showMenu1 }">
          <h4 class="font-medium text-xl text-white">Incubação</h4>
          <p class="font-normal text-xs text-white leading-4">
            Startups que validaram seu mercado, definiram a primeira versão do
            seu produto e estão prontas para tirar o MVP do papel.
          </p>
        </div>
        <div class="w-full" :class="{ hidden: !showMenu1 }">
          <h4 class="font-medium text-xl">Benefícios</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>
              Assessment de riscos do negócio e proposição de plano de melhorias
              personalizado
            </li>
            <li>Investimento de até BRL 700 mil para desenvolvimento do MVP</li>
            <li>Acesso à rede de mentores altamente qualificados</li>
            <li>Assessment do Modelo de Negócio e Solução</li>
            <li>Suporte no Desenvolvimento de MVP e Produtos</li>
            <li>Suporte Jurídico, Tecnológico e de Compliance</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu1 = !showMenu1"
        />
      </div>
      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        :class="[
          {
            '!bg-green': showMenu2,
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: showMenu2 }"
        >
          <h4 class="font-medium text-xl text-white">Aceleração</h4>
          <p class="font-normal text-xs text-white leading-4">
            Startups que desenvolveram um produto e estão prontas para ir a
            mercado.
          </p>
        </div>
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: !showMenu2 }"
        >
          <h4 class="font-medium text-xl">Benefícios</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>
              Assessment de riscos do negócio e proposição de plano de melhorias
              personalizado
            </li>
            <li>
              Investimento de BRL 250K no início do programa e até R$ 1,5 Milhão
              para Startups selecionadas
            </li>
            <li>Acesso a rede de mentores altamente qualificados</li>
            <li>Acesso ao Network de Parceiros</li>
            <li>Suporte na Definição da Estratégia do Negócio</li>
            <li>Suporte na Definição da Estratégia de Marketing</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu2 = !showMenu2"
        />
      </div>
      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        :class="[
          {
            '!bg-green': showMenu3,
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: showMenu3 }"
        >
          <h4 class="font-medium text-xl text-white">Investimento</h4>
          <p class="font-normal text-xs text-white leading-4">
            Startups que já têm um negócio promissor e querem acelerar seu
            crescimento
          </p>
        </div>
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: !showMenu3 }"
        >
          <h4 class="font-medium text-xl">Benefícios</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>Acesso à rede de experts e advisors altamente qualificados</li>
            <li>Acesso ao Network de Parceiros</li>
            <li>Acesso aos canais de distribuição</li>
            <li>Acesso a dados e informações de mercado</li>
            <li>Acesso às capabilities e expertise para escalar negócios</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu3 = !showMenu3"
        />
      </div>
      <div
        class="w-full max-w-[200px] h-auto min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6"
        :class="[
          {
            '!bg-green': showMenu4,
          },
        ]"
      >
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: showMenu4 }"
        >
          <h4 class="font-medium text-xl text-white">Suporte In House</h4>
          <p class="font-normal text-xs text-white leading-4">
            Não importa o estágio de maturidade, todas as empresas do nosso
            portfolio sempre terão acesso às principais capabilities de
            desenvolvimento.
          </p>
        </div>
        <div
          class="w-full transition-all duration-300s"
          :class="{ hidden: !showMenu4 }"
        >
          <h4 class="font-medium text-xl">Benefícios</h4>
          <ul
            class="list-disc pt-4 text-xs font-normal leading-4 pl-[15px] flex flex-col gap-2"
          >
            <li>Mentoria de Experts</li>
            <li>Acesso e conhecimento/base de dados</li>
            <li>Acesso a laboratórios, centros de pesquisa e plantas piloto</li>
            <li>Espaço Físico e Serviços Compartilhados</li>
          </ul>
        </div>
        <svg-icon
          name="circle"
          class="w-10 h-10 mt-5"
          @click.prevent="showMenu4 = !showMenu4"
        />
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
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
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
