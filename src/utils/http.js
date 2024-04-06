import axios from "axios";
import { ElMessage } from "element-plus";
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user";
import router from "@/router";

const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 20000,
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
    // 请求头携带token,判断是否有token
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        // 按后端要求，请求头携带token
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
},e=> Promise.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data,e => {
    // 登录页面的统一错误信息提示
    ElMessage({
        type: 'warning',
        message: e.response.data.msg
    })
    // 401token过期处理
    const userStore = useUserStore()
    if(e.response.status === 401) {
        // 清除token
       userStore.clearUserInfo()
       // 跳转到登录页
       router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance
