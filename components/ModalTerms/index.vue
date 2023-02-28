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
        <h1>TERMOS E CONDIÇÕES DE USO</h1>

        <div>
          <p>
            Os seguintes tópicos guiarão este documento, cujo objetivo é dar
            transparência e explicar como funciona o nosso Site para nossos
            Usuários (“Termos de Uso” ou “Documento”).
          </p>
        </div>

        <ol>
          <li>O que é a Oxygea?</li>
          <li>Informações iniciais</li>
          <li>Dados coletados pela Oxygea</li>
          <li>Como funciona a newsletter da Oxygea?</li>
          <li>Responsabilidades do Usuário ao utilizar o Site da Oxygea</li>
          <li>Limitações de responsabilidade da Oxygea</li>
          <li>
            O que é contemplado pelos Direitos de Propriedade Intelectual no
            Site?
          </li>
          <li>Quais são as regras de Rescisão Contratual destes Termos?</li>
          <li>Como posso entrar em contato com a Oxygea?</li>
          <li>O que mais devo saber sobre esses Termos?</li>
          <li>Qual é a Lei e o Foro aplicável a estes Termos?</li>
        </ol>

        <div>
          <h2>1. O QUE É A OXYGEA?</h2>

          <p>
            A Oxygea (“Oxygea”) é um veículo para investimento e aceleração de
            startups e inovação da Braskem S.A., inscrita no CNPJ/MF sob o nº
            46.356.778/0001-39, com sede na cidade de São Paulo, estado de São
            Paulo, na Rua Lemos Monteiro, nº 120, bairro Butantã, CEP
            05.501-050.
          </p>
          <p>
            Somos um hub voltado para startups e feito para impulsionar a
            inovação sustentável e a transformação digital da indústria química.
            Nosso objetivo é unir investimentos a programas de incubação,
            acelerando negócios e estimulando o novo. O que queremos é um novo
            futuro.
          </p>
          <p>
            Acreditamos que a melhor maneira de estar preparado para o futuro é
            ser parte dele, e foi essa ideia que impulsionou a criação do Site
            da Oxygea, que funciona como um espaço de conexão para quem quer
            fazer parte de nosso ecossistema (“Site”).
          </p>
          <p>
            Esse espaço virtual permite que agentes do ecossistema de inovação
            entrem em contato conosco e sinalizem seu interesse em serem nossos
            parceiros, seja como startups, mentores ou founders. Além disso, a
            partir das informações fornecidas por esses agentes, criamos e
            mantemos um banco de dados sobre o ecossistema.
          </p>
        </div>

        <div>
          <h2>2. INFORMAÇÕES INICIAIS</h2>

          <p>
            Esse Documento foi elaborado para que os Usuários de nosso Site
            conheçam as regras relacionadas a sua utilização de maneira simples,
            clara e objetiva, conforme previsto na legislação aplicável.
          </p>
          <p>
            Recomendamos que você leia, atenta e integralmente, as condições
            aqui dispostas, assim como nossa Política de Privacidade (disponível
            em LINK). A Política de Privacidade é parte integrante e inseparável
            destes Termos, de modo que ao aceitá-los, você declara, também,
            possuir ciência em relação ao nela disposto.
          </p>
          <p>
            A sua utilização de nosso Site é feita sob sua inteira e exclusiva
            responsabilidade. Caso discorde desse Documento ou de qualquer
            cláusula aqui mencionada, deve abster-se da utilização do Site
            imediatamente.
          </p>
          <p>
            A partir do momento em que acessa o Site, você expressa sua
            concordância informada e inequívoca com todas as regras aqui
            previstas, bem como declara que é maior de dezoito anos de idade e
            civilmente capaz.
          </p>
          <p>
            Você reconhece e compreende que estes Termos e Condições de Uso
            poderão ser modificados a qualquer momento sem notificação prévia,
            desde que não haja vedação legal neste sentido, sendo de sua única e
            exclusiva responsabilidade verificá-los periodicamente. Em caso de
            suspensão, modificação ou desativação do Site, você concorda que a
            Oxygea não será responsabilizada e nem terá quaisquer obrigações
            adicionais ou implícitas para com seus Usuários.
          </p>
        </div>

        <div>
          <h2>3. DADOS COLETADOS PELA OXYGEA</h2>

          <p>
            Os únicos dados coletados pela Oxygea são aqueles cadastrados pelo
            Usuário no Site. Tais dados poderão ser usados para a formação e
            manutenção do banco de dados do hub sobre o ecossistema de inovação
            e startups.
          </p>
          <p>
            Os dados coletados variam de acordo com as seguintes categorias:
          </p>

          <p>
            Há ainda a seção “Entre em Contato” em nosso Site (www.oxygea.com),
            na qual são coletados os seguintes dados:
          </p>
          <p>Nome do Usuário;</p>
          <p>E-mail;</p>
          <p>Mensagem a ser enviada para Oxygea.</p>
          <p>
            Por fim, é possível inscrever-se na newsletter da Oxygea, na aba
            “Newsletter” disponível no Site. Nesse caso, é coletado apenas o
            e-mail do Usuário.
          </p>
          <p>
            Quaisquer outros dados não solicitados e enviados à Oxygea pelo
            Site, especialmente por meio do campo livre “Mensagem”, são de
            responsabilidade única e exclusiva do Usuário. A Oxygea não solicita
            e não se responsabiliza pelo eventual recebimento de dados técnicos
            e/ou relacionados à Propriedade Intelectual do Usuário.
          </p>
          <p>
            Ressaltamos que o cadastro do Usuário no Site na intenção de fazer
            parte do nosso ecossistema NÃO implica em resposta obrigatória por
            parte da Oxygea, nem na efetiva participação do Usuário nesse meio.
          </p>
          <p>
            Após o cadastro, existe a possibilidade de (i) a Oxygea entrar em
            contato com o Usuário no interesse de firmar parcerias; e/ou (ii)
            apenas usar os dados cadastrados apenas para os fins relacionados ao
            banco de dados.
          </p>
          <p>
            O Usuário poderá solicitar a exclusão de seus dados pessoais por
            meio do endereço de e-mail privacy@oxygea.com, conforme definido em
            nossa Política de Privacidade, exceto quando tais dados forem
            coletados ou tratados mediante outras bases legais ou, quando a
            Oxygea seja obrigada por lei a armazenar os dados.
          </p>
        </div>

        <div>
          <h2>4. COMO FUNCIONA A NEWSLETTER DA OXYGEA?</h2>

          <p>
            A Oxygea envia sua newsletter por e-mail aos Usuários que nela se
            inscreverem. O Usuário que deseja recebê-la deve realizar seu
            cadastro no Site, indicando o seu e-mail na aba “Newsletter”.
          </p>
          <p>
            Para cancelar o recebimento da newsletter, o Usuário deverá
            solicitar o cancelamento de seu cadastro por meio do link de
            cancelamento disponível ao final dos e-mails da Oxygea.
          </p>
        </div>

        <div>
          <h2>5. RESPONSABILIDADES DO USUÁRIO AO UTILIZAR O SITE DA OXYGEA</h2>

          <p>
            Você é o único responsável pelas atividades realizadas em nosso
            Site. Assim, em qualquer hipótese, será o único responsável pelo uso
            que fizer do Site, bem como por qualquer conteúdo que nele inserir.
          </p>
          <p>Como Usuário, é de sua responsabilidade:</p>

          <ol class="!pt-0">
            <li>
              Inserir corretamente os seus dados e os dados da startup ou
              empresa parceira, para devida análise da Oxygea, ao cadastrar-se
              como interessado em fazer parte de nosso ecossistema;
            </li>
            <li>
              Notificar a Oxygea imediatamente sobre qualquer suspeita ou
              violação de segurança, ou de uso não autorizado de seus dados;;
            </li>
            <li>
              Observar a legislação aplicável, bem como o disposto nestes
              Termos, em toda e qualquer interação com o Site e/ou com a Oxygea.
            </li>
          </ol>
        </div>

        <div>
          <h2>6. LIMITAÇÕES DE RESPONSABILIDADE DA OXYGEA</h2>

          <p>
            Empregaremos nossos melhores esforços para garantir que o Site
            funcione adequadamente, entretanto, não podemos garantir que ele
            estará disponível ininterruptamente ou livre de quaisquer erros ou
            falhas. Além disso, não podemos assegurar a impossibilidade de o
            Site ser atacado, invadido e/ou modificado por terceiros.
          </p>
          <p>
            Desse modo, o Usuário declara estar ciente de que a Oxygea não se
            responsabiliza, em nenhuma hipótese, por perdas e danos de qualquer
            natureza, inclusive lucros cessantes e danos emergentes, causados:
          </p>
          <ul class="!pt-0">
            <li>
              Por mau desempenho, indisponibilidades e problemas técnicos e/ou
              operacionais apresentados pelo Site, bem como por qualquer falha,
              perda de informação, suspensão, interrupção e/ou qualquer
              dificuldade de acesso que o Usuário possa vir a ter;
            </li>
            <li>
              Por indisponibilidade, erros ou falhas apresentadas pelo Site
              decorrentes de evento fortuito ou força maior ou, de ataques
              cibernéticos de vândalos ou hackers, alheios ao controle da Oxygea
              e que ocorram contra a sua vontade;
            </li>
            <li>
              Por erros ou eventuais inconsistências na transmissão de dados,
              pela qualidade ou disponibilidade da conexão de Internet, que
              impeçam o adequado recebimento de informações pelo Site ou pelo
              Usuário;
            </li>
            <li>
              Pela presença de vírus ou demais elementos nocivos ao Site,
              capazes de causar alterações em seus sistemas informáticos
              (software e hardware) e documentos eletrônicos.
            </li>
          </ul>
          <p>
            A Oxygea se reserva o direito de alterar as especificações e/ou
            características do Usuário para a melhoria e/ou correções de
            eventuais erros, sem aviso prévio aos Usuários.
          </p>
          <p>
            A Oxygea armazenará os registros de acesso dos Usuários, incluindo
            as informações referentes à data, hora e endereço de IP, na
            Plataforma, pelo prazo previsto no Marco Civil da Internet (Lei
            Federal nº 12.965/2014) e seu Decreto Regulamentador (Decreto nº
            8.771/2016), segundo o previsto neste documento e em sua Política de
            Privacidade.
          </p>
          <p>
            Você se declara ciente que eventualmente a Oxygea pode compartilhar
            seus dados pessoais com órgãos governamentais e/ou autoridades
            públicas, entre outras pessoas físicas e jurídicas, conforme
            previsto em nossa Política de Privacidade e nos termos da Lei Geral
            de Proteção de Dados (Lei Federal nº 13.709/2018 - “LGPD”).
          </p>
        </div>

        <div>
          <h2>
            7. O QUE É CONTEMPLADO PELOS DIREITOS DE PROPRIEDADE INTELECTUAL NO
            SITE?
          </h2>

          <p>
            Todos os textos, fotografias, imagens, vídeos, ilustrações, ícones,
            tecnologias, links e demais conteúdos audiovisuais ou sonoros,
            desenhos gráficos e códigos fonte, são de propriedade exclusiva da
            Oxygea ou de terceiro que tenha autorizado sua utilização, estando
            protegidos pelas leis e tratados internacionais, sendo vedada sua
            cópia, reprodução ou qualquer outro tipo de utilização, ficando os
            infratores sujeitos às sanções civis e criminais correspondentes,
            nos termos das Leis 9.279 de 1996, 9.609 de 1998 e 9.610 de 1998.
          </p>
          <p>
            Ainda, as marcas, os nomes comerciais, sinais distintivos ou
            logotipos de qualquer espécie apresentados por meio do Site seguem
            essa mesma regra e são de propriedade da Oxygea, ou de terceiro que
            permitiu o seu uso, de modo que a utilização do Site NÃO fornece
            autorização para que o Usuário faça qualquer tipo de uso ou
            disposição de tais ativos.
          </p>
        </div>

        <div>
          <h2>8. QUAI SÃO AS REGRAS DE RESCISÃO CONTRATUAL DESSES TERMOS?</h2>

          <p>
            Esses Termos serão considerados vigentes por tempo indeterminado.
          </p>
          <p>
            Este Documento poderá ser modificado a qualquer momento sem
            notificação prévia, desde que não haja vedação legal neste sentido.
          </p>
          <p>
            A Oxygea poderá suspender, interromper ou extinguir o acesso do
            Usuário ao Site, temporária e unilateralmente, a qualquer momento e
            sem necessidade de prévio aviso, sem ônus jurídicos, financeiros
            e/ou direito à indenização, em caso de violação de quaisquer das
            disposições destes Termos.
          </p>
          <p>
            Em caso de descumprimento de qualquer cláusula e/ou compromisso
            assumido por meio deste instrumento, você será responsável por
            indenizar a Oxygea e/ou quaisquer terceiros por danos diretos,
            indiretos, morais e/ou lucros cessantes, ocasionados por ou
            relacionados à utilização do Site.
          </p>
        </div>

        <div>
          <h2>9. COMO POSSO ENTRAR EM CONTATO COM A OXYGEA?</h2>

          <p>
            Você poderá entrar em conosco através do Site (www.oxygea.com), na
            aba “Entre em contato” ou, por meio do e-mail contact@oxygea.com.
          </p>
        </div>

        <div>
          <h2>10. O QUE MAIS DEVO SABER SOBRE ESSES TERMOS?</h2>

          <p>
            Se qualquer parte destes Termos for considerada inválida ou
            inexequível, tal trecho deve ser interpretado de forma consistente
            com a lei aplicável, para refletir, na medida do possível, a
            intenção original das partes, sendo que as demais disposições
            permanecerão em pleno vigor e efeito.
          </p>
          <p>
            Se eventualmente a Oxygea deixar de exigir quaisquer direitos ou
            disposições dos presentes Termos, tal fato não constituirá renúncia,
            podendo ela exercer regularmente o seu direito, dentro dos prazos
            legais.
          </p>
          <p>
            Os casos fortuitos ou de força maior serão excludentes de
            responsabilidades das partes, na forma da legislação brasileira e o
            segundo o previsto nestes Termos.
          </p>
          <p>
            Você concorda com a eventual cessão ou transferência das obrigações
            e direitos previstos nestes Termos pela Oxygea a outras empresas,
            incluindo: (i) subsidiárias ou afiliadas da Oxygea; (ii) adquirentes
            das participações acionárias, negócios ou bens da Oxygea; ou (iii)
            para um sucessor em razão de qualquer operação societária da Oxygea.
          </p>
        </div>

        <div>
          <h2>11. QUAL É A LEI E O FORO APLICÁVEL A ESTES TERMOS?</h2>

          <p>
            A Oxygea empenhará seus melhores esforços para que eventuais
            controvérsias sejam resolvidas extrajudicialmente por meios de
            resolução pacíficos e consensuais. Assim, estamos sempre à
            disposição para ouvi-lo, no que for necessário, e encontrar o melhor
            caminho para solucionarmos sua solicitação por meio de nosso Site
            (www.oxygea.com), na aba “Entre em contato” ou, por meio do e-mail
            contact@oxygea.com.
          </p>
          <p>
            Não sendo possível uma resolução amigável, informamos que estes
            Termos serão regidos, interpretados e executados de acordo com as
            Leis da República Federativa do Brasil, sendo competente o foro da
            Comarca de São Paulo/SP para dirimir quaisquer solicitações
            decorrentes deste documento.
          </p>
        </div>

        <div class="text-right pt-[64px]">
          <span>Atualizado em Janeiro/2023</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalTerms',
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
