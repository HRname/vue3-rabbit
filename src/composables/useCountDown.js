import { ref,computed,onUnmounted } from 'vue'
import dayjs from 'dayjs'
// 倒计时函数

export const useCountDown = () =>{
    let timer = null
    const time = ref(0)
    // 格式化时间
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    // 倒计时函数
    const start =(currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        },1000)
    }

    // 清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })

    return {
        formatTime,
        start
    }
}