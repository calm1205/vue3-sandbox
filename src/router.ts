import { RouteRecordRaw } from "vue-router"
import top from "@/pages/Top.vue"
import index1 from "@/pages/splitComponent/SplitComponent.vue"
import index2 from "@/pages/Index.2.vue"

export const routes: RouteRecordRaw[] = [
  { path: "/", name: "top", component: top },
  { path: "/splitComponent", name: "splitComponent", component: index1 },
  { path: "/about", name: "preRelease", component: index2 },
]
