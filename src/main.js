import { createApp } from 'vue'
import App from './App.vue'
import VeeValidatePlugin from "./plugins/validation"

import './assets/main.css'

createApp(App).use(VeeValidatePlugin).mount('#app')
