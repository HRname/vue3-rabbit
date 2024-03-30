import httpInstance from '@/utils/http'
/**
 * 获取分类API
 *
 * @returns 返回http请求结果
 */
export function getCategoryAPI () {
    return httpInstance({
        url:"/home/category/head"
    })
}