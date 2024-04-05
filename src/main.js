import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

// 引入懒加载指令插件
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)

// 注册懒加载插件
app.use(lazyPlugin)
app.use(componentPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')