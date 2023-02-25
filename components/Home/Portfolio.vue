<template>
  <div class="bg-[#EDEDEF] pt-10 pb-5 lg:py-20">
    <section class="container">
      <h2 class="pb-4 font-bold text-2xl">Portfolio de empresas</h2>
      <p
        class="font-normal text-xs leading-4 pb-10 lg:max-w-[530px] lg:ml-[110px] lg:text-base"
      >
        4 novas ventures chegam como legado da inovação na Braskem. Agora, elas
        dão um passo adiante e desenvolvem seu potencial para impactar a
        indústria positivamente.
      </p>

      <div class="flex gap-5">
        <img
          src="https://via.placeholder.com/420x460"
          class="hidden lg:block"
        />

        <div class="flex flex-wrap gap-4 lg:gap-0">
          <div class="w-full max-w-[280px] bg-green px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">XTELLAR</h3>
            <p class="text-xs font-normal">
              Produção e venda de filamento para impressoras 3D, utilizando a
              tecnologia convencional/ bio - polímero e tecnologia PCR da
              Braskem para fornecer soluções sustentáveis e eficientes.
            </p>
          </div>

          <div class="w-full max-w-[280px] px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">LOADSHARK</h3>
            <p class="text-xs font-normal">
              Sistema de gerenciamento de frete, com funcionalidade de leilão
              reverso para embarcadores.
            </p>
          </div>

          <div class="w-full max-w-[280px] px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">BABEL</h3>
            <p class="text-xs font-normal">
              Otimização do processo de produção de transformadores da indústria
              de plásticos por meio de machine learning.
            </p>
          </div>

          <div class="w-full max-w-[280px] px-6 py-6 lg:max-w-[430px]">
            <h3 class="text-xs font-bold pb-2">ZAYA</h3>
            <p class="text-xs font-normal">
              Padrão de sustentabilidade para empresas e consumidores para
              comparar o impacto ambiental de diferentes produtos ao longo de
              seu ciclo de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomePortfolio',
}
</script>
