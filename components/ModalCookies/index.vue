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
        <h1>{{ $t('modals.cookies.h1') }}</h1>

        <div>
          <p>{{ $t('modals.cookies.el1.p1') }}</p>
          <p>{{ $t('modals.cookies.el1.p2') }}</p>
          <p>{{ $t('modals.cookies.el1.p3') }}</p>
          <p>{{ $t('modals.cookies.el1.p4') }}</p>
        </div>

        <div>
          <h2>{{ $t('modals.cookies.el2.h2') }}</h2>
          <p>
            {{ $t('modals.cookies.el2.p1') }}
          </p>
          <p>
            {{ $t('modals.cookies.el2.p2') }}
          </p>
          <p>
            {{ $t('modals.cookies.el2.p3') }}
          </p>
          <p>
            {{ $t('modals.cookies.el2.p4') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.cookies.el3.h2') }}</h2>
          <p>
            {{ $t('modals.cookies.el3.p1') }}
          </p>
          <p>
            {{ $t('modals.cookies.el3.p2') }}
          </p>
          <p>
            {{ $t('modals.cookies.el3.p3') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.cookies.el4.h2') }}</h2>

          <p>
            {{ $t('modals.cookies.el4.p1') }}
          </p>
          <p>
            {{ $t('modals.cookies.el4.p2') }}
          </p>
          <p>
            {{ $t('modals.cookies.el4.p3') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.cookies.el5.h2') }}</h2>

          <p>
            {{ $t('modals.cookies.el5.p1') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p2') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p3') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p4') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p5') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p6') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p7') }}
          </p>
          <p>
            {{ $t('modals.cookies.el5.p8') }}
          </p>
        </div>

        <div>
          <h2>{{ $t('modals.cookies.el6.h2') }}</h2>

          <p>
            {{ $t('modals.cookies.el6.p1') }}
          </p>
          <p>
            {{ $t('modals.cookies.el6.p2') }}
          </p>
        </div>

        <div class="text-right pt-[64px]">
          <span>{{ $t('modals.cookies.footer.span1') }}</span>
          <span>{{ $t('modals.cookies.footer.span2') }}</span>
          <span>{{ $t('modals.cookies.footer.span3') }}</span>
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
