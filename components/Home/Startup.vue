<template>
  <section class="bg-[#EDEDEF]">
    <div
      class="md:flex items-center lg:max-w-[1440px] 2xl:max-w-none lg:mx-auto"
    >
      <nuxt-img
        preload
        :src="`startup.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        sizes="320px sm:320px md:300px lg:300px xl:720px"
        :alt="
          $i18n.locale === 'pt'
            ? 'Pessoas em reunião sobre startups'
            : 'People in a meeting about startups'
        "
        :title="
          $i18n.locale === 'pt'
            ? 'Programas para startups '
            : 'Programs for startups'
        "
        class="w-full h-auto grayscale 2xl:hidden"
        data-aos="fade"
      />

      <nuxt-img
        preload
        :src="`startup2.png`"
        format="webp"
        fit="fill"
        quality="100"
        loading="lazy"
        sizes="320px sm:320px md:300px lg:300px xl:720px"
        :alt="
          $i18n.locale === 'pt'
            ? 'Pessoas em reunião sobre startups'
            : 'People in a meeting about startups'
        "
        :title="
          $i18n.locale === 'pt'
            ? 'Programas para startups '
            : 'Programs for startups'
        "
        class="w-full min-w-[50%] h-auto grayscale hidden 2xl:block"
        data-aos="fade"
      />

      <div class="container !py-10 xl:ml-[45px]">
        <p
          class="font-normal text-[28px] leading-8 xl:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] xl:text-[48px]"
        >
          {{ $t('startup.title1') }}
        </p>
        <p
          class="font-normal text-[28px] leading-8 xl:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] xl:text-[48px]"
        >
          {{ $t('startup.title2') }}
        </p>
        <p
          class="font-normal text-[28px] leading-8 xl:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] xl:text-[48px]"
          :class="{ 'pb-6': $i18n.locale === 'pt' }"
        >
          {{ $t('startup.title3') }}
        </p>

        <p
          v-if="$i18n.locale !== 'pt'"
          class="font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] lg:text-[48px]"
        >
          {{ $t('startup.title4') }}
        </p>

        <p
          v-if="$i18n.locale !== 'pt'"
          class="font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] lg:max-w-[418px] lg:text-[48px]"
        >
          {{ $t('startup.title5') }}
        </p>

        <p
          v-if="$i18n.locale !== 'pt'"
          class="font-normal text-[28px] leading-8 lg:leading-[56px] -tracking-[0.03%] pb-6 lg:max-w-[418px] lg:text-[48px]"
        >
          {{ $t('startup.title6') }}
        </p>

        <p
          v-if="$i18n.locale === 'pt'"
          class="font-bold text-xl xl:text-2xl -tracking-[0.03%] lg:max-w-[418px]"
        >
          {{ $t('startup.desc') }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeStartup',
}
</script>
