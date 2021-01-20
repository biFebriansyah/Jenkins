import Vue from "vue"
import Vuex from "vuex"

import Product from "./modules/product"
import Chart from "./modules/chart"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Product,
        Chart,
    },
})
