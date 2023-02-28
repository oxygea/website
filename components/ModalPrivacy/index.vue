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
        <h1>{{ $t('modals.privacy.h1') }}</h1>

        <div>
          <p>
            {{ $t('modals.privacy.el1.p1') }}
          </p>
          <p>
            {{ $t('modals.privacy.el1.p2') }}
          </p>
          <p>
            {{ $t('modals.privacy.el1.p3') }}
          </p>
          <p>
            {{ $t('modals.privacy.el1.p4') }}
          </p>
          <p>
            {{ $t('modals.privacy.el1.p5') }}
          </p>
          <p>{{ $t('modals.privacy.el1.p6') }}</p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el2.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el2.p1') }}
          </p>

          <table>
            <tbody>
              <tr>
                <th>{{ $t('modals.privacy.table1.tr1.th1') }}</th>
                <th>{{ $t('modals.privacy.table1.tr1.th2') }}</th>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr2.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table1.tr2.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr3.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table1.tr3.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr4.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table1.tr4.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr5.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table1.tr5.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr6.td1') }}</td>
                <td>{{ $t('modals.privacy.table1.tr6.td2') }}</td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr7.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table1.tr7.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table1.tr8.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table1.tr8.td2') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el3.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el3.p1') }}
          </p>

          <table>
            <tbody>
              <tr>
                <th>{{ $t('modals.privacy.table2.tr1.th1') }}</th>
                <th>{{ $t('modals.privacy.table2.tr1.th2') }}</th>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr2.td1') }}</td>
                <td>{{ $t('modals.privacy.table2.tr2.td2') }}</td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr3.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr3.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr4.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr4.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr5.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr5.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr6.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr6.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr7.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr7.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr8.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr8.td2') }}
                </td>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table2.tr9.td1') }}
                </td>
                <td>
                  {{ $t('modals.privacy.table2.tr9.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr10.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr10.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr11.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr11.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr12.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr12.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr13.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr13.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr14.td1') }}</td>
                <td>
                  {{ $t('modals.privacy.table2.tr14.td2') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table2.tr15.td1') }}</td>
                <td>{{ $t('modals.privacy.table2.tr15.td2') }}</td>
              </tr>
            </tbody>
          </table>

          <p>
            {{ $t('modals.privacy.el4.p') }}
          </p>

          <table>
            <tbody>
              <tr>
                <th>{{ $t('modals.privacy.table3.tr1.th1') }}</th>
                <th>{{ $t('modals.privacy.table3.tr1.th2') }}</th>
                <th>{{ $t('modals.privacy.table3.tr1.th3') }}</th>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table3.tr2.th1') }}
                </td>
                <td>{{ $t('modals.privacy.table3.tr2.th2') }}</td>
                <td>
                  {{ $t('modals.privacy.table3.tr2.th3') }}
                </td>
              </tr>
              <tr>
                <td>{{ $t('modals.privacy.table3.tr3.th1') }}</td>
                <td>{{ $t('modals.privacy.table3.tr3.th2') }}</td>
                <td>
                  {{ $t('modals.privacy.table3.tr3.th3') }}
                </td>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table3.tr4.th1') }}
                </td>
                <td>{{ $t('modals.privacy.table3.tr4.th2') }}</td>
                <td>
                  {{ $t('modals.privacy.table3.tr4.th3') }}
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            {{ $t('modals.privacy.el5.p') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el6.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el6.p1') }}
          </p>

          <h3>{{ $t('modals.privacy.el6.h31') }}</h3>

          <p>
            {{ $t('modals.privacy.el6.p2') }}
          </p>
          <p>
            {{ $t('modals.privacy.el6.p3') }}
          </p>

          <h3>{{ $t('modals.privacy.el6.h32') }}</h3>

          <p>
            {{ $t('modals.privacy.el6.p4') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el7.h2') }}</h2>

          <p>{{ $t('modals.privacy.el7.p1') }}</p>
          <p>{{ $t('modals.privacy.el7.p2') }}</p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el8.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el8.p1') }}
          </p>

          <table>
            <tbody>
              <tr>
                <th>{{ $t('modals.privacy.table4.tr1.th1') }}</th>
                <th>{{ $t('modals.privacy.table4.tr1.th2') }}</th>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table4.tr2.td1') }}
                </td>
                <td>{{ $t('modals.privacy.table4.tr2.td2') }}</td>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table4.tr3.td1') }}
                </td>
                <td>{{ $t('modals.privacy.table4.tr3.td2') }}</td>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table4.tr4.td1') }}
                </td>
                <td>{{ $t('modals.privacy.table4.tr4.td2') }}</td>
              </tr>
              <tr>
                <td>
                  {{ $t('modals.privacy.table4.tr5.td1') }}
                </td>
                <td>{{ $t('modals.privacy.table4.tr5.td2') }}</td>
              </tr>
            </tbody>
          </table>

          <p>
            {{ $t('modals.privacy.el9.p1') }}
          </p>
          <p>
            {{ $t('modals.privacy.el9.p2') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el10.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el10.p1') }}
          </p>
          <p>
            {{ $t('modals.privacy.el10.p2') }}
          </p>
          <ul>
            <li>{{ $t('modals.privacy.el10.l1') }}</li>
            <li>
              {{ $t('modals.privacy.el10.l2') }}
            </li>
          </ul>
          <p>
            {{ $t('modals.privacy.el10.p3') }}
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
