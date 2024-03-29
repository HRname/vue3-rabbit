import httpInstance from "@/utils/http";

export function getCategory(){
    // 调用 httpInstance 函数发起 HTTP 请求
    return httpInstance({
        // 请求的 URL 地址为 "home/category/head"
        url: "home/category/head",
    })
}