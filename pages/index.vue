<template>
  <main>
    <Hero />
    <Future />
    <Oxigea />
    <Invest />
    <BigNumbers />
    <Startup />
    <Programs />
    <Cover />
    <Partners />
    <Mentors />
    <Portfolio />
    <Team />
  </main>
</template>

<script>
import Hero from '../components/Home/Hero.vue'
import Oxigea from '../components/Home/Oxigea.vue'
import Mentors from '../components/Home/Mentors.vue'
import Invest from '../components/Home/Invest.vue'
import Team from '../components/Home/Team.vue'
import Programs from '../components/Home/Programs.vue'
import Partners from '../components/Home/Partners.vue'
import Startup from '../components/Home/Startup.vue'
import Portfolio from '../components/Home/Portfolio.vue'
import BigNumbers from '../components/Home/BigNumbers.vue'
import Cover from '../components/Home/Cover.vue'
import Future from '../components/Home/Future.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    Future,
    Oxigea,
    Invest,
    BigNumbers,
    Startup,
    Programs,
    Cover,
    Partners,
    Mentors,
    Portfolio,
    Team,
  },
  head() {
    return {
      title: 'Oxygea',
      meta: [
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-url', property: 'og:url', content: '' },
        { hid: 'og:title', property: 'og:title', content: 'Oxygea' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Somos um Corporate Venture Capital, um hub de aceleração e Venture Building com foco em sustentabilidade e transformação digital na indústria.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://files.fm/thumb_show.php?i=7ecyfm3jp',
        },
      ],
    }
  },
}
</script>
