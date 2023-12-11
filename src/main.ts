import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import '@/assets/styles/base.scss'
import '@/assets/styles/vant-reset.scss'
import '@/assets/styles/common.scss'

createApp(App).use(router).use(store, key).mount('#app')
