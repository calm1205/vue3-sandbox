import { createApp } from "vue"
import App from "./App.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { routes } from "./router"
import "./styles/global.scss"

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount("#app")
