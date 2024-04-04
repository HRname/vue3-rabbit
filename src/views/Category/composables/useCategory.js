// 封装分类页获取数据业务相关代码
import { onMounted, ref } from "vue";
import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id=route.params.id) => {
        const data = await getCategoryAPI(id);
        categoryData.value = data.result;
    }

    onMounted(() => getCategory())

    // 当路由变化时，获取分类页数据,完成分类页之间的切换
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id);
    })

    return {
        categoryData
    }
}