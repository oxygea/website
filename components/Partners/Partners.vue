<template>
  <section
    class="h-[638px] md:h-[766px] bg-gray flex justify-center items-center xl:h-[4000px] xl:items-start py-40"
    @scroll="handleScroll"
  >
    <div
      class="flex flex-col items-center gap-[10px] md:w-[1300px] md:h-[653px] md:sticky md:top-[160px] md:mb-[80px]"
    >
      <div class="flex flex-col mx-5 xl:w-[640px] xl:gap-6 xl:self-start">
        <h1 class="font-bold text-2xl md:text-5xl">Parceiros</h1>
        <p class="font-poppins text-xs md:text-base xl:ml-[110px]">
          O fazer junto potencializa resultados. Nos conectamos tanto com as
          instituições locais, quanto com as mundialmente renomadas. São
          conexões que compartilham expertise e proporcionam o que as startups
          mais precisam.
        </p>
      </div>
      <div
        class="w-[1300px] relative hidden xl:flex py-8"
        :style="{ height: containerHeight[scene] }"
      >
        <a
          v-for="(item, index) in positionNodes[scene]"
          :id="index"
          :key="index"
          :href="item.link ? item.link : null"
          :style="handleNode(item, 0)"
          class="node"
        />
        <div
          v-for="(item, index) in lines"
          :id="index"
          :key="index"
          class="line"
          :style="handleLine(item)"
        />
      </div>
      <div class="w-full xl:hidden">
        <Carousel />
      </div>
    </div>
  </section>
</template>

<script>
import { calcDeg, calcDiag } from './calc'
import { lines } from './NetworkAnimation/Lines'
import {
  sceneOne,
  sceneTwo,
  sceneThree,
  sceneFour,
  sceneFive,
} from './NetworkAnimation/Scenes'

import Carousel from './NetworkCarousel/Carousel.vue'

export default {
  name: 'Partners',
  components: {
    Carousel,
  },
  data() {
    return {
      positionNodes: {
        0: sceneOne,
        1: sceneTwo,
        2: sceneThree,
        3: sceneFour,
        4: sceneFive,
      },
      lines,
      containerHeight: {
        0: '537.24px',
        1: '542.24px',
        2: '537.24px',
        3: '537px',
        4: '591px',
      },
      scene: 0,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleLine({ from, to, borderColor }) {
      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      {
        const { left, top, size } = this.positionNodes[this.scene][from]
        x1 = left + size
        y1 = top + size
      }
      {
        const { left, top, size } = this.positionNodes[this.scene][to]
        x2 = left + size
        y2 = top + size
      }
      const diffX = x2 - x1
      const diffY = y2 - y1
      const deg = calcDeg(diffY, diffX)
      const diag = calcDiag(diffY, diffX)
      return {
        width: `${diag}px`,
        top: `${y1}px`,
        left: `${x1}px`,
        transform: `rotate(${deg}deg)`,
        'border-color': borderColor,
        transition: 'top 0.5s, left 0.5s, transform 0.5s, width 0.5s',
      }
    },
    handleNode({ top, left, size, border, background }) {
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${size * 2}px`,
        height: `${size * 2}px`,
        border,
        background,
        transition: 'top 0.5s, left 0.5s, width 0.5s, height 0.5s',
      }
    },
    handleScroll() {
      let timeoutId = () => {}

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const pageHeight = 5436 + 320
        const scrollPos = window.scrollY

        const scenesPositions = {
          sceneZero: scrollPos < pageHeight + 250,
          sceneOne:
            scrollPos > pageHeight + 250 && scrollPos < pageHeight + 500,
          sceneTwo:
            scrollPos > pageHeight + 500 && scrollPos < pageHeight + 750,
          sceneThree:
            scrollPos > pageHeight + 950 && scrollPos < pageHeight + 1200,
          sceneFour:
            scrollPos > pageHeight + 1450,
        }

        switch (true) {
          case scenesPositions.sceneZero:
            this.scene = 0
            break
          case scenesPositions.sceneOne:
            this.scene = 1
            break
          case scenesPositions.sceneTwo:
            this.scene = 2
            break
          case scenesPositions.sceneThree:
            this.scene = 3
            break
          case scenesPositions.sceneFour:
            this.scene = 4
            break
        }
      }, 75)
    },
  },
}
</script>

<style scoped>
.node {
  border-radius: 9999px;
  position: absolute;
  z-index: 10;
}

.line {
  border-top-width: 1px;
  border-style: solid;
  position: absolute;
  transform-origin: top left;
}
</style>
