import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/home"
import prod from "./views/product"
import Login from "@/views/Login.vue"
import Regist from "@/views/Regist.vue"

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/prod",
            name: "product",
            component: prod,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/register",
            name: "regist",
            component: Regist,
        },
    ],
})

export default mainRouter
