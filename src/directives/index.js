// 定义懒加载插件

// 判断图片是否在窗口中的函数
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin ={
    // 定义全局指令实现图片懒加载
    install(app){
        // 懒加载指令逻辑
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
    }
}