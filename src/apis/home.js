import httpInstance from "@/utils/http"

// 获取banner
export function getBannerAPI(params = {}){
    const { distributionSite='1' } = params
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}

export function findNewAPI(){
    return httpInstance({
        url: '/home/new'
    })
}

export function findHotAPI(){
    return httpInstance({
        url: '/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
}