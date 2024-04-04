import request from '@/utils/http'

// 获取商品详情
export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

// 获取热榜数据
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return request({
      url:'/goods/hot',
      params:{
        id, 
        type, 
        limit
      }
    })
  }