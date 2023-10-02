import { createApp } from "vue"
import App from "./App.vue"
import index1 from "./pages/Index.1.vue"
import index2 from "./pages/Index.2.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import "./styles/global.scss"

const routes = [
  { path: "/", component: { template: index1 } },
  // { path: "/about", component: { template: index2 } },
  { path: "/about", component: { template: "<div>bbb</div>" } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount("#app")
