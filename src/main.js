import Vue from "vue"
import App from "./App.vue"
import routes from "./routes"
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faShoppingCart, faDollarSign, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

library.add(faShoppingCart, faDollarSign, faSignOutAlt)

Vue.config.productionTip = false

new Vue({
    store: store,
    router: routes,
    render: (h) => h(App),
}).$mount("#app")
