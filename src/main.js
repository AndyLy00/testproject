import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import { createPinia } from 'pinia'
import router from './router/index.js'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import App from "@/App.vue";

const app = createApp(App)
app.use(createBootstrap()) // Important
app.use(createPinia())
app.use(router)
app.mount('#app')
