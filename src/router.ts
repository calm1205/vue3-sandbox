import { RouteRecordRaw } from "vue-router"
import top from "@/pages/Top.vue"
import index1 from "@/pages/split/Split.vue"
import index2 from "@/pages/emitChild2Parent/EmitParent.vue"
import index3 from "@/pages/emit2/EmitParent.vue"
import index4 from "@/pages/props/Parent.vue"
import index5 from "@/pages/propsType/PropsType.vue"

export const routes: RouteRecordRaw[] = [
  { path: "/", name: "top", component: top },
  { path: "/split", name: "split", component: index1 },
  {
    path: "/emit-to-parent",
    name: "emit to parent",
    component: index2,
  },
  {
    path: "/emit-to-child",
    name: "emit to child",
    component: index3,
  },
  {
    path: "/props",
    name: "props",
    component: index4,
  },
  {
    path: "/propsType",
    name: "propsType",
    component: index5,
  },
]
