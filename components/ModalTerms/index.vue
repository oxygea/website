<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="h-full bg-white overflow-auto transition-all duration-500 fixed w-full flex flex-col z-50 lg:h-screen"
    >
      <div class="w-full lg:max-w-[860px] m-auto">
        <div class="flex justify-end pt-4">
          <svg-icon
            name="close2"
            class="w-[32px] h-[32px] cursor-pointer"
            @click="$emit('close-modal')"
          />
        </div>
        <div class="pt-4 pb-10 modal-texts">
          <h1>{{ $t('modals.terms.h1') }}</h1>

          <div>
            <p>
              {{ $t('modals.terms.el1.p1') }}
            </p>
          </div>

          <ol>
            <li>{{ $t('modals.terms.el2.li1') }}</li>
            <li>{{ $t('modals.terms.el2.li2') }}</li>
            <li>{{ $t('modals.terms.el2.li3') }}</li>
            <li>{{ $t('modals.terms.el2.li4') }}</li>
            <li>{{ $t('modals.terms.el2.li5') }}</li>
            <li>{{ $t('modals.terms.el2.li6') }}</li>
            <li>{{ $t('modals.terms.el2.li7') }}</li>
            <li>{{ $t('modals.terms.el2.li8') }}</li>
            <li>{{ $t('modals.terms.el2.li9') }}</li>
            <li>{{ $t('modals.terms.el2.li10') }}</li>
            <li>{{ $t('modals.terms.el2.li11') }}</li>
          </ol>

          <div>
            <h2>{{ $t('modals.terms.el3.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el3.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el3.p2') }}
            </p>
            <p>
              {{ $t('modals.terms.el3.p3') }}
            </p>
            <p>
              {{ $t('modals.terms.el3.p4') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el4.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el4.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el4.p2') }}
            </p>
            <p>
              {{ $t('modals.terms.el4.p3') }}
            </p>
            <p>
              {{ $t('modals.terms.el4.p4') }}
            </p>
            <p>
              {{ $t('modals.terms.el4.p5') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el5.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el5.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el5.p2') }}
            </p>

            <table>
              <tbody>
                <tr>
                  <th>{{ $t('modals.terms.table1.tr1.th1') }}</th>
                  <th>{{ $t('modals.terms.table1.tr1.th2') }}</th>
                  <th>{{ $t('modals.terms.table1.tr1.th3') }}</th>
                  <th>{{ $t('modals.terms.table1.tr1.th4') }}</th>
                </tr>
                <tr>
                  <td>
                    {{ $t('modals.terms.table1.tr2.td1.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr2.td1.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td1.li2') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td1.li3') }}</li>
                    </ul>
                  </td>
                  <td>
                    {{ $t('modals.terms.table1.tr2.td2.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr2.td2.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td2.li2') }}</li>
                    </ul>
                  </td>
                  <td>
                    {{ $t('modals.terms.table1.tr2.td3.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr2.td3.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td3.li2') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td3.li3') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td3.li4') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td3.li5') }}</li>
                    </ul>
                  </td>
                  <td>
                    {{ $t('modals.terms.table1.tr2.td4.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr2.td4.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr2.td4.li2') }}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    {{ $t('modals.terms.table1.tr3.td1.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr3.td1.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td1.li2') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td1.li3') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td1.li4') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td1.li5') }}</li>
                    </ul>
                  </td>
                  <td>
                    {{ $t('modals.terms.table1.tr3.td2.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr3.td2.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td2.li2') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td2.li3') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td2.li4') }}</li>
                    </ul>
                  </td>
                  <td>
                    {{ $t('modals.terms.table1.tr3.td3.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr3.td3.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td3.li2') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td3.li3') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td3.li4') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td3.li5') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td3.li6') }}</li>
                    </ul>
                  </td>
                  <td>
                    {{ $t('modals.terms.table1.tr3.td4.p') }}
                    <ul>
                      <li>{{ $t('modals.terms.table1.tr3.td4.li1') }}</li>
                      <li>{{ $t('modals.terms.table1.tr3.td4.li2') }}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              {{ $t('modals.terms.el6.p1') }}
            </p>
            <p>{{ $t('modals.terms.el6.p2') }}</p>
            <p>{{ $t('modals.terms.el6.p3') }}</p>
            <p>{{ $t('modals.terms.el6.p4') }}</p>
            <p>
              {{ $t('modals.terms.el6.p5') }}
            </p>
            <p>
              {{ $t('modals.terms.el6.p6') }}
            </p>
            <p>
              {{ $t('modals.terms.el6.p7') }}
            </p>
            <p>
              {{ $t('modals.terms.el6.p8') }}
            </p>
            <p>
              {{ $t('modals.terms.el6.p9') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el7.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el7.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el7.p2') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el8.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el8.p1') }}
            </p>
            <p>{{ $t('modals.terms.el8.p2') }}</p>

            <ol class="!pt-0">
              <li>
                {{ $t('modals.terms.el8.li1') }}
              </li>
              <li>
                {{ $t('modals.terms.el8.li2') }}
              </li>
              <li>
                {{ $t('modals.terms.el8.li3') }}
              </li>
            </ol>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el9.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el9.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el9.p2') }}
            </p>
            <ul class="!pt-0">
              <li>{{ $t('modals.terms.el9.li1') }}</li>
              <li>
                {{ $t('modals.terms.el9.li2') }}
              </li>
              <li>
                {{ $t('modals.terms.el9.li3') }}
              </li>
              <li>
                {{ $t('modals.terms.el9.li4') }}
              </li>
            </ul>
            <p>
              {{ $t('modals.terms.el9.p3') }}
            </p>
            <p>
              {{ $t('modals.terms.el9.p4') }}
            </p>
            <p>
              {{ $t('modals.terms.el9.p5') }}
            </p>
          </div>

          <div>
            <h2>
              {{ $t('modals.terms.el10.h2') }}
            </h2>

            <p>
              {{ $t('modals.terms.el10.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el10.p2') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el11.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el11.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el11.p2') }}
            </p>
            <p>
              {{ $t('modals.terms.el11.p3') }}
            </p>
            <p>
              {{ $t('modals.terms.el11.p4') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el12.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el12.p') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el13.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el13.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el13.p2') }}
            </p>
            <p>
              {{ $t('modals.terms.el13.p3') }}
            </p>
            <p>
              {{ $t('modals.terms.el13.p4') }}
            </p>
          </div>

          <div>
            <h2>{{ $t('modals.terms.el14.h2') }}</h2>

            <p>
              {{ $t('modals.terms.el14.p1') }}
            </p>
            <p>
              {{ $t('modals.terms.el14.p2') }}
            </p>
          </div>

          <div class="text-right pt-[64px]">
            <span>{{ $t('modals.terms.footer.span') }}</span>
          </div>
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
  watch: {
    show() {
      if (this.show) {
        document.querySelector('html').style.overflowY = 'hidden'
      } else {
        document.querySelector('html').style.overflowY = 'auto'
      }
    },
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
