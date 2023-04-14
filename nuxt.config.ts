export default {
  nitro: {
    preset: 'vercel-edge',
  },
  publicRuntimeConfig: {
   
},
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
};
