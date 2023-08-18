import {
  WHITE,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY,
  GREEN,
  PURPLE,
  LG,
  MD,
  SM,
} from '../constants'

import abstartups from '~/assets/img/partners/12.png'
import acecortex from '~/assets/img/partners/14.svg'
import abvcap from '~/assets/img/partners/13.svg'
import cazoolo from '~/assets/img/partners/15.svg'
import cubo from '~/assets/img/partners/16.svg'
import distrito from '~/assets/img/partners/17.svg'
import fiemglab from '~/assets/img/partners/05.png'
import caldeira from '~/assets/img/partners/07.png'
import ib from '~/assets/img/partners/01.png'
import onono from '~/assets/img/partners/04.png'
import inventivos from '~/assets/img/partners/08.png'
import latitude from '~/assets/img/partners/09.png'
import tmf from '~/assets/img/partners/10.png'
import plugandplay from '~/assets/img/partners/02.png'
import weimpact from '~/assets/img/partners/11.png'
import touchdown from '~/assets/img/partners/03.png'

export const nodesFirst = {
  'gray-0': {
    top: 7.74,
    left: 20.59,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-1': {
    top: 196.68,
    left: 132.94,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-2': {
    top: 128.57,
    left: 291.26,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-3': {
    top: 221.49,
    left: 310.13,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-border-0': {
    top: 283.87,
    left: 157.01,
    size: MD,
    background: GRAY_LIGHT,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-1': {
    top: 97,
    left: 180,
    size: LG,
    background: `url(${abvcap}) no-repeat center, ${GRAY}`,
    backgroundSize: '83.33px 33.33px',
    border: '1px solid black',
    link: '#',
  },
  'white-1': {
    top: 0,
    left: 64,
    size: LG,
    background: `url(${abstartups}) no-repeat center, ${WHITE}`,
    backgroundSize: '98.33px 15px',
    link: '#',
  },
  'white-2': {
    top: 174,
    left: 29,
    size: LG,
    background: `url(${acecortex}) no-repeat center, ${WHITE}`,
    backgroundSize: '93.33px 48.33px',
    link: '#',
  },
  'small-0': {
    top: 107.45,
    left: 76.65,
    size: SM,
    background: GREEN,
  },
  'small-1': {
    top: 22.97,
    left: 221.47,
    size: SM,
    background: PURPLE,
  },
  'small-2': {
    top: 261.68,
    left: 239.35,
    size: SM,
    background: PURPLE,
  },
}
export const nodesSecond = {
  'white-3': {
    top: 0,
    left: 136 + 320,
    size: LG,
    background: `url(${cazoolo}) no-repeat center, ${WHITE}`,
    backgroundSize: '82.5px 19.5px',
    link: '#',
  },
  'white-4': {
    top: 97,
    left: 20 + 320,
    size: LG,
    background: `url(${cubo}) no-repeat center, ${WHITE}`,
    backgroundSize: '62.25px 21px',
    link: '#',
  },
  'gray-4': {
    top: 81.02,
    left: 261.36 + 320,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-5': {
    top: 126.57,
    left: 161.26 + 320,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-6': {
    top: 186.34,
    left: 2.94 + 320,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-border-2': {
    top: 174,
    left: 180 + 320,
    size: LG,
    background: `url(${distrito}) no-repeat center, ${GRAY}`,
    backgroundSize: '73.5px 19.5px',
    border: '1px solid black',
    link: '#',
  },
  'gray-border-3': {
    top: 41.74,
    left: 257.76 + 320,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-4': {
    top: 149.76,
    left: 260.34 + 320,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-5': {
    top: 68.44,
    left: 23.53 + 320,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-6': {
    top: 273.54,
    left: 27.01 + 320,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-7': {
    top: 305,
    left: 263.56 + 320,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'small-3': {
    top: 22.97,
    left: 91.47 + 320,
    size: SM,
    background: PURPLE,
  },
  'small-4': {
    top: 251.34,
    left: 109.35 + 320,
    size: SM,
    background: PURPLE,
  },
}
export const nodesThird = {
  'white-5': {
    top: 0,
    left: 64 + 640,
    size: LG,
    background: `url(${fiemglab}) no-repeat center, ${WHITE}`,
    backgroundSize: '75.47px 21px',
    link: '#',
  },
  'white-6': {
    top: 174,
    left: 20 + 640,
    size: LG,
    background: `url(${caldeira}) no-repeat center, ${WHITE}`,
    backgroundSize: '71.14px 34.01px',
    link: '#',
  },
  'white-7': {
    top: 97,
    left: 180 + 640,
    size: LG,
    background: `url(${ib}) no-repeat center, ${WHITE}`,
    backgroundSize: '30.75px 36px',
    link: '#',
  },
  'gray-7': {
    top: 91.36,
    left: 211.36 + 640,
    size: MD,
    background: WHITE,
  },
  'gray-8': {
    top: 128.27,
    left: 111.26 + 640,
    size: MD,
    background: WHITE,
  },
  'gray-9': {
    top: 231.83,
    left: 130.13 + 640,
    size: MD,
    background: WHITE,
  },
  'gray-border-8': {
    top: 41.74,
    left: 207.76 + 640,
    size: MD,
    background: GRAY,
    backgroundSize: '73.5px 19.5px',
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-9': {
    top: 313 - 8,
    left: 213.56 + 640,
    size: MD,
    background: GRAY,
    backgroundSize: '73.5px 19.5px',
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-10': {
    top: 313 - 8,
    left: 213.56 + 640,
    size: MD,
    background: GRAY,
    backgroundSize: '73.5px 19.5px',
    border: `1px solid ${GRAY_DARK}`,
  },
  'small-5': {
    top: 33.31,
    left: 41.47 + 640,
    size: SM,
    background: PURPLE,
  },
  'small-6': {
    top: 141.11,
    left: 301.68 + 640,
    size: SM,
    background: GREEN,
  },
}
export const nodesFourth = {
  'white-8': {
    top: 166,
    left: 180 + 960,
    size: LG,
    background: `url(${onono}) no-repeat center, ${WHITE}`,
    backgroundSize: '73.31px 34.5px',
    link: '#',
  },
  'gray-10': {
    top: 2,
    left: 276.18 + 960,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-11': {
    top: 128.11,
    left: 299.67 + 960,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-12': {
    top: 91.36,
    left: 141.36 + 960,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-13': {
    top: 231.83,
    left: 60.13 + 960,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-border-11': {
    top: 0,
    left: 136 + 960,
    size: LG,
    background: `url(${inventivos}) no-repeat center, ${GRAY}`,
    backgroundSize: '67.5px 23.25px',
    border: '1px solid black',
    link: '#',
  },
  'gray-border-12': {
    top: 89,
    left: 20 + 960,
    size: LG,
    background: `url(${latitude}) no-repeat center, ${GRAY}`,
    backgroundSize: '93.97px 13.72px',
    border: '1px solid black',
    link: '#',
  },
  'gray-border-13': {
    top: 149.76,
    left: 140.34 + 960,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-22': {
    top: 299.67,
    left: 143.56 + 960,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-15': {
    top: 313 - 8,
    left: 213.56 + 960,
    size: MD,
    background: GRAY,
    backgroundSize: '73.5px 19.5px',
    border: `1px solid ${GRAY_DARK}`,
  },
  'small-7': {
    top: 141.11,
    left: 231.68 + 960,
    size: SM,
    background: GREEN,
  },
}
export const nodesFifth = {
  'white-9': {
    top: 0,
    left: 64 + 1280,
    size: LG,
    background: `url(${plugandplay}) no-repeat center, ${WHITE}`,
    backgroundSize: '82.5px 15.75px',
    link: '#',
  },
  'gray-14': {
    top: 2,
    left: 236.18 + 1280,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-15': {
    top: 128.11,
    left: 259.67 + 1280,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-16': {
    top: 188.72,
    left: 314.83 + 1280,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-17': {
    top: 263.08,
    left: 217.8 + 1280,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-19': {
    top: 231.83,
    left: 20.13 + 1280,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-border-14': {
    top: 136,
    left: 136 + 1280,
    size: LG,
    background: `url(${tmf}) no-repeat center, ${GRAY}`,
    backgroundSize: '36px 36px',
    border: '1px solid black',
    link: '#',
  },
  'gray-border-15': {
    top: 149.76,
    left: 100.34 + 1280,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-16': {
    top: 299.87,
    left: 103.56 + 1280,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
}
export const nodesSixth = {
  'white-10': {
    top: 0,
    left: 136 + 1600,
    size: LG,
    background: `url(${touchdown}) no-repeat center, ${WHITE}`,
    backgroundSize: '98.77px 21px',
    link: '#',
  },
  'gray-20': {
    top: 44.29,
    left: 284.24 + 1600,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-21': {
    top: 83.02,
    left: 51.36 + 1600,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-22': {
    top: 130.11,
    left: 209.67 + 1600,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-23': {
    top: 188.72,
    left: 264.83 + 1600,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-24': {
    top: 262.08,
    left: 167.8 + 1600,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-border-17': {
    top: 136,
    left: 64 + 1600,
    size: LG,
    background: `url(${weimpact}) no-repeat center, ${GRAY}`,
    backgroundSize: '90.75px 28.69px',
    border: '1px solid black',
    link: '#',
  },
  'gray-border-18': {
    top: 41.74,
    left: 47.76 + 1600,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-19': {
    top: 149.76,
    left: 50.34 + 1600,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-20': {
    top: 215.29,
    left: 166.78 + 1600,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-21': {
    top: 299.87,
    left: 53.56 + 1600,
    size: MD,
    background: GRAY,
    border: `1px solid ${GRAY_DARK}`,
  },
}

export const nodes = {
  ...nodesFirst,
  ...nodesSecond,
  ...nodesThird,
  ...nodesFourth,
  ...nodesFifth,
  ...nodesSixth,
}
