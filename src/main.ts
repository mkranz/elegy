import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  config: {
    // colors defined in quasar-variables.sass
    // brand: {
    //   primary: '#1976D2',
    //   secondary: '#26A69A',
    //   accent: '#9C27B0',
    //   dark: '#1D1D1D',
    //   positive: '#21BA45',
    //   negative: '#C10015',
    //   info: '#31CCEC',
    //   warning: '#F2C037'
    // }
  }
})

app.mount('#app')
