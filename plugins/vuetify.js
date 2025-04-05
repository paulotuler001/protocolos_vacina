// plugins/vuetify.ts
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defineNuxtPlugin } from '#app'

import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customTheme',
        themes: {
          customTheme: {
            dark: false,
            colors: {
              primary: '#1867C0',
              secondary: '#5CBBF6',
            },
            variables: {
              'font-family': 'Inter, sans-serif',
            },
          },
        },
      },
  })

  nuxtApp.vueApp.use(vuetify)
})