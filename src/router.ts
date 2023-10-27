import { RouteRecordRaw } from "vue-router"
import top from "@/pages/Top.vue"
import index1 from "@/pages/split/Split.vue"
import index2 from "@/pages/emit1/EmitParent.vue"
import index3 from "@/pages/emit2/EmitParent.vue"

export const routes: RouteRecordRaw[] = [
  { path: "/", name: "top", component: top },
  { path: "/split", name: "split", component: index1 },
  {
    path: "/emit-child-parent",
    name: "emit child to parent",
    component: index2,
  },
  {
    path: "/emit-parent-child",
    name: "emit parent to child",
    component: index3,
  },
]
