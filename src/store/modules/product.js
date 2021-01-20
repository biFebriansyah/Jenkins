import Axios from "axios"

const state = {
    product: null,
}

const getters = {
    getProd: (state) => {
        return state.product
    },
}

const actions = {
    fatching({ commit }) {
        Axios.get("http://hplussport.com/api/products/order/price")
            .then((res) => {
                commit("setProd", res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
}

const mutations = {
    setProd(state, prod) {
        state.product = prod
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
