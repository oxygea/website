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
        {
          hid: 'og-desc',
          property: 'og:description',
          content: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '../assets/img/oxygea.png',
        },
      ],
    }
  },
}
</script>
