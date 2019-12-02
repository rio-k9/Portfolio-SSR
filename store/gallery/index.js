import { each, random, extend } from 'underscore'
const namespaced = true
const state = {
  target: 0,
  loader: true,
  faded: false,
  mosaic: '',
  imageList: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
  imageRaw: [
    require('~/static/gallery/1.png'),
    require('~/static/gallery/2.png'),
    require('~/static/gallery/3.png'),
    require('~/static/gallery/4.png'),
    require('~/static/gallery/5.png'),
    require('~/static/gallery/6.png')
  ],
  urlList: [
    'https://datalyse.io',
    'https://instantecare.com',
    'https://instantecare.com',
    'https://rio-karim.github.io/mr-crypto/',
    'https://instantecare.com',
    'https://rio-karim.github.io/websoar/'
  ],
  urlCache: {
    '1.png': 'https://datalyse.io',
    '2.png': 'https://instantecare.com',
    '3.png': 'https://instantecare.com',
    '4.png': 'https://rio-karim.github.io/mr-crypto/',
    '5.png': 'https://instantecare.com',
    '6.png': 'https://rio-karim.github.io/websoar/',
    '7.png': 'https://rio-karim.github.io/websoar/',
    '8.png': 'https://datalyse.io',
    '9.png': 'https://datalyse.io',
    '10.png': 'https://rio-karim.github.io/mr-crypto/',
    '11.png': 'https://datalyse.io',
    '12.png': 'https://rio-karim.github.io/mr-crypto/',
    '13.png': 'https://datalyse.io',
    '14.png': 'https://instantecare.com',
    '15.png': 'https://pilltime.co.uk'
  }
}
const getters = {}
const mutations = {}
const actions = {
  start({ state }) {
    setTimeout(() => {
      state.loader = false
      state.mosaic = setInterval(() => {
        let newTarget = random(0, 5)
        let targetExists = state.target === newTarget
        while (targetExists) {
          newTarget = random(0, 5)
          targetExists = state.target === newTarget
        }
        state.target = newTarget
        state.faded = true
        setTimeout(() => {
          let newImg = random(1, 16)
          let imgExists = state.imageList.includes(`${newImg}.png`)
          while (imgExists) {
            newImg = random(1, 16)
            imgExists = state.imageList.includes(`${newImg}.png`)
          }
          state.imageList[state.target] = `${newImg}.png`
          state.imageRaw[
            state.target
          ] = require(`~/static/gallery/${newImg}.png`)
          state.urlList[state.target] = state.urlCache[`${newImg}.png`]
        }, 750)
        setTimeout(() => {
          state.faded = false
        }, 1500)
      }, 4000)
    }, 1500)
  },
  stop({ state }) {
    clearInterval(state.mosaic)
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
