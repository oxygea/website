<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full container bg-white overflow-auto transition-all duration-500 fixed w-full flex flex-col z-50 lg:flex-row lg:h-screen"
    >
      <div class="flex justify-end pt-4 lg:hidden">
        <svg-icon
          name="close2"
          class="w-[32px] h-[32px] cursor-pointer"
          @click="$emit('close-modal')"
        />
      </div>
      <div class="pt-4 pb-10 modal-texts">
        <h1>AVISO DE PRIVACIDADE</h1>

        <div>
          <p>
            Nós, da OXYGEA (BRASKEM VENTURES LTDA - CNPJ Nº.
            46.356.778/0001-39), desejamos manter uma relação de confiança,
            respeito e transparência junto a todos os titulares que tenham seus
            dados pessoais eventualmente tratados durante a condução de nossas
            atividades empresariais.
          </p>
          <p>
            A OXYGEA é um veículo para investimento e aceleração de startups e
            inovação da BRASKEN e assume papel predominantemente de agente
            controlador no tratamento dos seus dados pessoais, ou seja, somos
            nós quem decidimos como estes serão tratados, sempre em conformidade
            com a legislação aplicável. Em algumas outras situações, podemos
            assumir o papel de operador e, nesses casos, conduziremos as
            atividades de dados pessoais dentro dos limites estabelecidos
            diretamente pelo Controlador e de acordo com a legislação aplicável.
          </p>
          <p>
            Por isso, elaboramos este documento para ajudá-lo a entender quais
            Dados Pessoais coletamos, por quais motivos e como utilizamos suas
            informações pessoais. Este aviso também tem como objetivo informar
            quais são os seus direitos como titular e como você pode exercê-los
            junto à OXYGEA.
          </p>
          <p>
            Temos como prioridade zelar pela privacidade e segurança dos seus
            Dados Pessoais. Dessa forma, reforçamos que qualquer Dado Pessoal
            tratado pela OXYGEA seguirá as diretrizes e disposições aplicáveis
            previstas nesse Aviso, na Lei Federal nº 13.709/2018 – Lei Geral de
            Proteção de Dados (“LGPD”), no Marco Civil da Internet (Lei Federal
            n° 12.965/2014), seu Decreto regulamentador (Decreto nº 8.771/2016)
            e demais legislações aplicáveis ("Legislação Aplicável").
          </p>
          <p>
            Assim, recomendamos que você LEIA, ATENTA E INTEGRALMENTE, os termos
            deste Aviso, mas caso ainda tenha alguma dúvida, sugestão ou queira
            exercer algum dos seus direitos como titular de dados pessoais, por
            favor, entre em contato conosco na forma descrita no item “7” deste
            documento.
          </p>
          <p>Boa leitura!</p>
        </div>

        <div>
          <h2>DEFINIÇÕES:</h2>

          <p>
            Principais termos e definições relacionados ao tema “privacidade e
            proteção de dados pessoais” que poderão ser mencionados neste
            documento:
          </p>
        </div>

        <div>
          <h2>1. QUAIS DADOS PESSOAIS COLETAMOS E PARA QUAIS FINALIDADES?</h2>

          <p>
            De uma forma geral, dados pessoais podem ser categorizados da
            seguinte maneira:
          </p>

          <p>
            No caso específico da OXYGEA e dos seus Dados Pessoais, as seguintes
            Categorias de Dados Pessoais serão tratadas, para as finalidades e
            bases legais a seguir dispostas:
          </p>

          <p>
            A OXYGEA declara que poderá tratar seus dados para outros fins
            específicos após a obtenção do seu consentimento de forma expressa e
            inequívoca.
          </p>
        </div>

        <div>
          <h2>2. COMO OBTEMOS SEUS DADOS PESSOAIS?</h2>

          <p>
            Os Dados Pessoais que possuímos sobre você podem ter sido obtidos
            diretamente de você, de terceiros ou coletados em bases públicas.
          </p>

          <h3>Informações obtidas diretamente de você</h3>

          <p>
            Durante o seu relacionamento conosco, solicitamos algumas
            informações diretamente para você, como os seus dados de cadastro,
            informações de contato ou histórico profissional (biografia).
          </p>
          <p>
            Além disso, por meio de tecnologias padrões, nós também coletamos
            algumas informações de modo automático, tais como: características
            do dispositivo de acesso, IP (com data e hora), origem do IP,
            informações sobre cliques, geolocalização. O propósito dessa coleta
            é melhorar a sua experiência de navegação, de acordo com seus
            hábitos e suas preferências, bem como cumprir a Legislação
            Aplicável.
          </p>

          <h3>Informações disponíveis publicamente</h3>

          <p>
            Por fim, podemos coletar Dados Pessoais disponibilizados
            publicamente por você, desde que observadas as finalidades para as
            quais os dados foram tornados públicos e que sejam efetivamente
            relevantes e necessários para as finalidades informadas. Eventuais
            dados adicionais serão descartados. Isso inclui, por exemplo,
            informações que sejam publicadas por você em mídias sociais ou Dados
            Pessoais constantes de repositórios ou bancos de dados públicos
            mantidos por entes governamentais.
          </p>
        </div>

        <div>
          <h2>3. COMO ARMAZENAMOS DADOS PESSOAIS?</h2>

          <p>
            Os Dados Pessoais serão armazenados pela OXYGEA pelo tempo
            necessário para o tratamento para o qual esta informação se destina,
            ou conforme determina a Legislação Aplicável. Após atingir o
            objetivo pretendido, a OXYGEA eliminará tais Dados Pessoais.
          </p>
          <p>
            O titular poderá solicitar a eliminação de seus Dados Pessoais a
            qualquer momento, cabendo à OXYGEA avaliar e decidir se o pedido
            poderá ser atendido ou não. O não atendimento sempre estará embasado
            em alguma justificativa como (i) a existência de leis ou regulações
            que exijam ou permitam sua manutenção; (ii) se necessário para a
            OXYGEA prestar os serviços contratados, (iii) para defender os seus
            direitos, ou (iv) caso a OXYGEA atue apenas como agente operador no
            tratamento de dados em questão.
          </p>
        </div>

        <div>
          <h2>4. COM QUEM COMPARTILHAMOS OS SEUS DADOS?</h2>

          <p>
            Para a operacionalização dos nossos serviços, podemos compartilhar
            os Dados Pessoais coletados, em geral, para as seguintes categorias
            de terceiros:
          </p>

          <p>
            Também poderemos compartilhar Dados Pessoais para outros países
            envolvidos nas operações da OXYGEA. Nestes casos, serão sempre
            utilizadas as salvaguardas exigidas por lei.
          </p>
          <p>
            Em todos os casos, o compartilhamento de dados será fundamentado na
            mesma finalidade informada a você nesta Política.
          </p>
        </div>

        <div>
          <h2>5. COMO MANTEMOS OS SEUS DADOS PESSOAIS SEGUROS?</h2>

          <p>
            Temos políticas e procedimentos internos que determinam como os
            Dados Pessoais devem ser tratados pela OXYGEA. Essas normas internas
            têm como objetivo garantir que seus Dados sejam tratados de forma
            adequada e em observância à Legislação Aplicável.
          </p>
          <p>
            Para proteger os seus dados, implementamos as seguintes medidas:
          </p>
          <ul>
            <li>Proteção contra acesso não autorizado aos nossos sistemas;</li>
            <li>
              Acesso somente de pessoas específicas ao local onde são
              armazenadas as suas informações pessoais, desde que este acesso
              seja essencial ao desenvolvimento da atividade pretendida;
            </li>
          </ul>
          <p>
            Embora adotemos os melhores esforços no sentido de preservar a
            privacidade e proteger Dados Pessoais, nenhuma transmissão de
            informações é totalmente segura, de modo que não podemos garantir
            integralmente que todos os dados recebidos ou enviados não sejam
            alvo de acessos não autorizados executados com métodos voltados à
            obtenção de informações de maneira indevida e/ou ilegal.
          </p>
        </div>

        <div>
          <h2>6. DADOS PESSOAIS SENSÍVEIS</h2>

          <p>
            Não realizamos operações de tratamento envolvendo Dados Pessoais
            considerados sensíveis pela LGPD, sendo certo que, nas remotas e
            específicas hipóteses em que possamos fazê-lo, o tratamento se
            fundamentará em termos específicos previamente disponibilizados aos
            titulares, mediante seu consentimento específico ou com fundamento
            em base legal prevista pela LGPD.
          </p>
        </div>

        <div>
          <h2>7. QUAIS SÃO SEUS DIREITOS E COMO EXERCÊ-LOS?</h2>

          <p>
            Sempre que realizarmos o tratamento de Dados Pessoais na posição de
            “Controladora”, respeitaremos e garantiremos o exercício de seus
            direitos, conforme rol a seguir:
          </p>
          <ul>
            <li>Saber se tratamos algum Dado Pessoal seu;</li>
            <li>Saber quais Dados Pessoais seus são tratados por nós;</li>
            <li>
              Corrigir Dados incompletos, inexatos ou desatualizados, pelos
              meios exigidos pela regulamentação específica, quando necessário;
            </li>
            <li>
              Solicitar a anonimização, bloqueio ou eliminação de Dados
              desnecessários, excessivos ou que, porventura, tenham sido
              tratados em desconformidade com a lei;
            </li>
            <li>
              Solicitar a portabilidade dos Dados a outro fornecedor de serviço
              ou produto;
            </li>
            <li>
              Solicitar a eliminação dos Dados tratados com ou sem o seu
              consentimento;
            </li>
            <li>
              Obter informações sobre as entidades públicas ou privadas com as
              quais compartilhamos os seus Dados;
            </li>
            <li>
              Quando a atividade de tratamento necessitar do seu consentimento,
              você pode se negar a consentir. Nesse caso, iremos lhe informar
              sobre as consequências da falta do seu consentimento;
            </li>
            <li>
              Quando a atividade de tratamento necessitar do seu consentimento,
              a qualquer momento você poderá revogá-lo.
            </li>
          </ul>
          <p>
            Para acessar, obter cópia, corrigir, atualizar e/ou completar os
            seus Dados Pessoais, bem como exercer quaisquer outros direitos,
            você deve enviar e-mail para privacy@oxygea.com.
          </p>
          <p>
            Em casos específicos, é possível que a sua requisição não seja
            atendida. Nestas situações, nós explicaremos os motivos que
            justificaram o não atendimento, nos termos da Legislação Aplicável.
            Além disso, você fica ciente que em caso de eliminação dos Dados
            Pessoais implicará no término de seu cadastro, e exclusão no banco
            de dados, com consequente cancelamento do acesso aos
            serviços/soluções da OXYGEA.
          </p>
          <p>
            Requisições que envolvam Dados Pessoais e/ou documentos de outros
            titulares não serão atendidas, exceto mediante procuração, poder
            parental ou outra hipótese que autorize o exercício do direito de
            outro titular por você.
          </p>
        </div>

        <div>
          <h2>8. ALTERAÇÕES NESSE AVISO</h2>

          <p>
            A OXYGEA reserva-se ao direito de alterar este Aviso a qualquer
            momento. Em caso de alterações substanciais, informaremos a você.
          </p>
        </div>

        <div>
          <h2>9. QUAL O FORO E LEI APLICÁVEL A ESSE AVISO?</h2>

          <p>
            A OXYGEA empenhará seus melhores esforços para que eventuais
            controvérsias sejam resolvidas extrajudicialmente por meios de
            resolução pacíficos e consensuais. Assim, estamos sempre à
            disposição para ouvi-lo, no que for necessário, e encontrar o melhor
            caminho para solucionarmos sua solicitação no seguinte e-mail:
            privacy@oxygea.com.
          </p>
          <p>
            Não sendo possível uma resolução amigável, informamos que este Aviso
            será regido, interpretado e executado de acordo com as Leis da
            República Federativa do Brasil, sendo competente o foro de domicílio
            do titular para dirimir quaisquer solicitações decorrentes deste
            documento.
          </p>
        </div>
        <div class="text-right pt-[64px]">
          <span>Este Aviso foi alterado pela última vez e </span>
          <span>publicado em nosso website em: </span>
          <span>Janeiro/2023</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalPrivacy',
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
