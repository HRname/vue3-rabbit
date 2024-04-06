import { defineStore } from 'pinia';
import { ref,computed } from 'vue';
import { useUserStore } from './user';
import { insertCartAPI, findNewCartListAPI,delCartAPI } from '@/apis/cart';

// 封装购物车模块
export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const userStore = useUserStore()
    // 获取购物车中的最新商品列表
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }

    const isLogin = computed(() => userStore.userInfo.token)
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if(isLogin.value){
            console.log(skuId,count)
            await insertCartAPI({skuId,count})
            updateNewList()
        }else{
            // 1.判断购物车中是否有该商品
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 2.有则数量加1
                item.count++
            } else {
                // 3.没有则新增商品
                cartList.value.push(goods)
            }
        }
        
    }

    // 删除购物车中的商品
    const delCart = async (skuId) => {
        if(isLogin.value){
            // 1.删除服务器中的数据
            await delCartAPI([skuId])
            updateNewList()
        }else{
            const idx = cartList.value.findIndex((item) => skuId === itemm.skuId)
            cartList.value.splice(idx, 1)
        }
        
    }

    // 退出登录时，清空购物车中的数据
    const clearCart = () => {
        cartList.value = []
    }

    // 获取购物车中商品的总数量
    const allCount = computed(() => cartList.value.reduce((a,c) => a+c.count,0))
    // 获取购物车中商品的总金额
    const allPrice = computed(() => cartList.value.reduce((a,c) => a+c.price*c.count,0))

    // 单选功能
    const singleCheck = (skuId,selected) => {
        const item = cartList.value.find((item) => skuId === item.skuId)
        item.selected = selected
    } 

    // 是否全选
    const isAll = computed(() => cartList.value.every((item)=> item.selected))

    // 全选功能
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }

    // 选中的商品数量
    const selectedCount = computed(() => cartList.value.filter((item)=> item.selected).reduce((a,c) => a+c.count,0))

    // 选中的商品金额
    const selectedPrice = computed(() => cartList.value.filter((item)=> item.selected).reduce((a,c) => a+c.price*c.count,0))

    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart,
        updateNewList
    }
},{
    persist: true
})
