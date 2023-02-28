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
          <h2>{{ $t('modals.privacy.el11.h2') }}</h2>

          <p>{{ $t('modals.privacy.el11.p1') }}</p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el12.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el12.p1') }}
          </p>
          <ul>
            <li>{{ $t('modals.privacy.el12.li1') }}</li>
            <li>{{ $t('modals.privacy.el12.li2') }}</li>
            <li>
              {{ $t('modals.privacy.el12.li3') }}
            </li>
            <li>
              {{ $t('modals.privacy.el12.li4') }}
            </li>
            <li>
              {{ $t('modals.privacy.el12.li5') }}
            </li>
            <li>
              {{ $t('modals.privacy.el12.li6') }}
            </li>
            <li>
              {{ $t('modals.privacy.el12.li7') }}
            </li>
            <li>
              {{ $t('modals.privacy.el12.li8') }}
            </li>
            <li>
              {{ $t('modals.privacy.el12.li9') }}
            </li>
          </ul>
          <p>
            {{ $t('modals.privacy.el12.p2') }}
          </p>
          <p>
            {{ $t('modals.privacy.el12.p3') }}
          </p>
          <p>
            {{ $t('modals.privacy.el12.p4') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el13.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el13.p') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.privacy.el14.h2') }}</h2>

          <p>
            {{ $t('modals.privacy.el14.p1') }}
          </p>
          <p>
            {{ $t('modals.privacy.el14.p2') }}
          </p>
        </div>
        <div class="text-right pt-[64px]">
          <span>{{ $t('modals.privacy.footer.span1') }}</span>
          <span>{{ $t('modals.privacy.footer.span2') }}</span>
          <span>{{ $t('modals.privacy.footer.span3') }}</span>
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
