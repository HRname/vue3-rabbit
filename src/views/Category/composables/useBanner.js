// 封装轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner () {
    const bannerList = ref([])
    // 获取轮播图数据
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }

    onMounted(() => getBanner())

    return {
        bannerList
    }
}