<script setup>
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
    import LayoutFixed from './components/LayoutFixed.vue'

    import { useCategoryStore } from '@/stores/category'
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
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
</template>

<style scoped>

</style>