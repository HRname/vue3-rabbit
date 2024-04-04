import request from '@/utils/http'

// 获取指定id的分类信息
export function getCategoryAPI(id) {
  return request({
    url: '/category',
    params:{
        id
    }
  })
}