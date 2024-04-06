// 封装购物车相关接口
import request from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 删除购物车
export const delCartAPI = ({ ids }) => {
    return request({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 修改购物车
export const updateCartAPI = ({ skuId, count }) => {
    return request({
        url: `/member/cart/${skuId}`,
        method: 'PUT',
        data: {
            count
        }
    })
}

// 获取购物车列表
export const findNewCartListAPI = () => {
    return request({
        url: '/member/cart'
    })
}

// 合并本地购物车
export const mergeCartAPI = (data) => {
    return request({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}