import { createApp } from "vue"
import App from "./App.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { routes } from "./router"
import ElementPlus from "element-plus"

import "ress"
import "./styles/global.scss"

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount("#app")
