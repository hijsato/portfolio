export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'EB Garamond': { wght: [400], ital: [400] },
      'Shippori Mincho': [400],
    },
    display: 'swap'
  },
})
