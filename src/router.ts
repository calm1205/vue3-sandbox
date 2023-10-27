import { RouteRecordRaw } from "vue-router"
import top from "@/pages/Top.vue"
import index1 from "@/pages/split/Split.vue"
import index2 from "@/pages/emit/EmitParent.vue"

export const routes: RouteRecordRaw[] = [
  { path: "/", name: "top", component: top },
  { path: "/split", name: "split", component: index1 },
  { path: "/emit", name: "emit", component: index2 },
]
