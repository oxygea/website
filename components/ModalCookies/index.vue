<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full container bg-gray overflow-auto transition-all duration-500 fixed w-full flex flex-col z-50 lg:flex-row lg:h-screen"
    >
      <div class="flex justify-end pt-4 lg:hidden">
        <svg-icon
          name="close2"
          class="w-[32px] h-[32px] cursor-pointer"
          @click="$emit('close-modal')"
        />
      </div>
      <div class="pt-4 pb-10 modal-texts">
        <h1>AVISO DE COOKIES</h1>

        <div>
          <p>
            Nós, da OXYGEA (BRASKEM VENTURES LTDA, inscrita no CNPJ sob o nº.
            46.356.778/0001-39), desejamos manter uma relação de confiança,
            respeito e transparência junto a todos os titulares que tenham seus
            dados pessoais eventualmente tratados durante a condução de nossas
            atividades empresariais.
          </p>
          <p>
            Temos como prioridade zelar pela privacidade e segurança dos seus
            Dados Pessoais. Dessa forma, reforçamos que qualquer Dado Pessoal
            tratado pela OXYGEA seguirá as diretrizes e disposições aplicáveis
            previstas nesse Aviso, especialmente na Lei Federal nº 13.709/2018 –
            Lei Geral de Proteção de Dados (“LGPD”).
          </p>
          <p>
            Como utilizamos cookies para melhorar sua experiência a cada visita
            em nosso website e nos preocupamos com a sua segurança e
            privacidade, desenvolvemos esse Aviso de Cookies (“Aviso”) para que
            você saiba quais são utilizados, para quais finalidades e como
            desabilitá-los.
          </p>
          <p>
            Caso ainda tenha alguma dúvida, sugestão ou queira exercer algum dos
            seus direitos como titular de dados pessoais, por favor, entre em
            contato conosco por meio de nosso website www.oxygea.com.
          </p>
        </div>

        <div>
          <h2>1. 1) O QUE SÃO COOKIES E PARA QUE OS UTILIZAMOS?</h2>
          <p>
            Os cookies são pequenos arquivos de texto gerados em seu computador
            ou dispositivo móvel através do navegador de internet (browser) nos
            sites acessados por você. A utilização de cookies torna o nosso site
            mais rápido e eficiente, na medida em que o auxiliam a reconhecer o
            seu dispositivo numa próxima visita, garantem a segurança e
            enriquecem a página com conteúdo melhor adaptado aos seus
            interesses.
          </p>
          <p>
            Em resumo, os cookies identificam os dispositivos dos usuários,
            permitindo a execução de funcionalidades necessárias ou adicionais,
            bem como o aprimoramento da interatividade na navegação.
          </p>
          <p>
            Caso deseje, você poderá bloquear a entrada de nossos cookies não
            necessários por meio da opção “Gerenciador de Opt-out” em nosso
            cookie banner. Você também poderá bloquear todos os cookies de
            nossas páginas em seu sistema através do seu navegador (browser),
            porém ressaltamos que os cookies necessários e/ou essenciais
            garantem as funcionalidades da página e o desempenho adequado de
            nosso website, sem os quais este pode não operar corretamente.
          </p>
          <p>
            Já os outros tipos de cookies de funcionalidades adicionais são
            usados para levantar dados estatísticos, otimizar e aprimorar a
            experiência de navegação de nossos usuários.
          </p>
        </div>

        <div>
          <h2>2. QUE TIPOS DE COOKIES UTILIZAMOS?</h2>
          <p>
            i. Cookies necessários: esses cookies são essenciais para o
            funcionamento de nosso website, bem como para permitir que você
            possa utilizar todas as funcionalidades disponíveis em nossas
            páginas. Sem os cookies necessários nossas páginas poderão não
            carregar corretamente, impossibilitando que você utilize todas as
            funcionalidades da navegação. Os cookies necessários não extraem
            dados pessoais sobre os nossos usuários para fins de marketing ou
            rastreamento de sua navegação na internet.
          </p>
          <p>
            ii. Cookies de desempenho/analíticos: esses cookies nos ajudam a
            entender como os visitantes interagem com as páginas da OXYGEA,
            fornecendo informações sobre as áreas visitadas, o tempo de visita e
            quaisquer problemas encontrados, como mensagens de erro. A coleta de
            informação sobre as interações do usuário com a nossa página pode
            ocorrer por meio da integração de ferramentas de terceiros, tais
            como Google Analytics, HotJar, AdSense, entre outros.
          </p>
          <p>
            iii. Cookies de funcionalidade: esses cookies possibilitam que nosso
            site relembre suas preferências, proporcionando uma experiência mais
            personalizada e evitando ter de configurá-lo a cada nova visita.
            Como exemplo, os cookies de funcionalidade evitam que você precise
            digitar o seu nome em seções do site a cada novo acesso, além de
            fornecer serviços avançados como a realização de comentários em uma
            postagem ou artigo em nossas páginas.
          </p>
        </div>

        <div>
          <h2>3. O QUE SÃO COOKIES PERMANENTES E DE SESSÃO?</h2>

          <p>
            Em termos de duração, nossos cookies podem ser classificados em:
          </p>
          <p>
            Cookies permanentes: esses cookies permanecem armazenados em seu
            navegador de internet (browser) e nos dispositivos móveis de acesso
            por um período maior ou até que sejam apagados manualmente. O tempo
            de permanência desses arquivos dependerá das definições de seu
            browser ou do “tempo de vida” do cookie específico. Geralmente, os
            cookies permanentes concedem o direcionamento de acordo com os seus
            interesses, permitindo com que o site realize um serviço mais
            personalizado.
          </p>
          <p>
            Cookies de sessão: esses cookies são temporários e permanecem em seu
            navegador de internet (browser) e dispositivos até que você saia de
            nosso site. A informação obtida pelos cookies de sessão nos permite
            identificar problemas e fornecer uma melhor experiência de
            navegação.
          </p>
        </div>

        <div>
          <h2>4. COMO DESATIVAR NOSSOS COOKIES?</h2>

          <p>
            Os cookies são habilitados automaticamente em nossa página na
            internet visando a melhor experiência de navegação. De qualquer
            modo, você sempre pode desativá-los quando desejar.
          </p>
          <p>
            Entretanto, ao desativar as configurações de cookies, o acesso ao
            site com o melhor desempenho pode ser comprometido e alguns serviços
            da web podem não funcionar corretamente, afetando sua navegação
            total ou parcialmente.
          </p>
          <p>
            Todos os browsers de internet possuem ferramentas que possibilitam
            configurações específicas para aceitar, recusar ou remover cookies.
            Para mais informações sobre como proceder em relação à gestão dos
            cookies nos navegadores, disponibilizamos os links abaixo:
          </p>
          <p>
            Internet Explorer:
            https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies
          </p>
          <p>
            Mozilla Firefox:
            https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam
          </p>
          <p>
            Google Chrome:
            https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=pt-BR
          </p>
          <p>
            Safari: https://support.apple.com/pt-br/guide/safari/sfri11471/mac
          </p>
          <p>
            Microsoft Edge:
            https://support.microsoft.com/pt-br/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy
          </p>
        </div>

        <div>
          <h2>5. TRANSFERÊNCIAS INTERNACIONAIS</h2>

          <p>
            Alguns dos dados pessoais obtidos por meio de cookies estarão
            sujeitos a transferências internacionais, como, por exemplo, para
            Estados Unidos, em razão do uso do Google Analytics e Yahoo. Nestes
            casos, asseguramos que sejam adotadas as garantias necessárias e
            salvaguardas mínimas, nos termos do artigo 33 da LGPD
          </p>
          <p>
            Este Aviso de cookies será regido, interpretado e executado de
            acordo com as Leis da República Federativa do Brasil, sendo
            competente o foro de domicílio do Usuário para dirimir qualquer
            dúvida decorrente deste documento.
          </p>
        </div>

        <div class="text-right pt-[64px]">
          <span>Este Aviso foi alterado pela última vez e</span>
          <span>publicado em nosso website em:</span>
          <span>Janeiro/2023</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalCookies',
  props: {
    show: Boolean,
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
