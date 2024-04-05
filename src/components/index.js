// 将components中的组件都进行全局注册
// 通过插件的方式
import ImageView from './imageView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentPlugin = {
    install(app){
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',XtxSku)
    }
}