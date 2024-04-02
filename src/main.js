import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
// 判断图片是否在窗口中的函数
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令实现图片懒加载

app.directive('img-lazy',{
    mounted(el,binding){
        useIntersectionObserver(el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if(isIntersecting){
                    el.src = binding.value
                }
            }
        )
    }
})
