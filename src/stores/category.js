import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category',() => {
    // 获取导航列表数据
    const categoryList = ref([])
    // 获取导航列表数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})
