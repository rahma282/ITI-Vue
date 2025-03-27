import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import './style.css'
import Wrapper from './Wrapper.vue'
import { createPinia } from 'pinia'
import router from './router/index.js'


const pinia = createPinia();
createApp(Wrapper).use(pinia).use(router).mount('#app')

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
