<script setup>
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
    import LayoutFixed from './components/LayoutFixed.vue'

    import { useCategoryStore } from '@/stores/categoryStore'
    import { onMounted } from 'vue'

    const categoryStroe = useCategoryStore()

    onMounted(() => {
       categoryStroe.getCategory() 
    })
</script>

<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!-- 使用key绑定路由路径(唯一标识)来避免元素复用从而使跳转时不更新数据 -->
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
</template>

<style scoped>

</style>