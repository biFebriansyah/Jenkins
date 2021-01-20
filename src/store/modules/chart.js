const state = {
    chart: [],
}

const getters = {
    allChart: (state) => {
        return state.chart
    },
    calculate: (state) => {
        let harga = 0
        for (const key in state.chart) {
            harga = harga + state.chart[key].product.price * state.chart[key].qty
        }
        return harga
    },
    quantity: (state) => {
        let qty = 0
        for (const key in state.chart) {
            qty = qty + state.chart[key].qty
        }
        return qty
    },
}

const actions = {
    addChart({ commit, state }, prod) {
        let indexItem
        let isExist = state.chart.filter((item, index) => {
            if (item.product.id == Number(prod.id)) {
                indexItem = index
                return true
            } else {
                return false
            }
        })

        if (isExist.length) {
            commit("incrementQty", indexItem)
        } else {
            commit("addChart", { product: prod, qty: 1 })
        }
    },
    delChrt({ commit }, idx) {
        if (state.chart[idx].qty > 1) {
            commit("decrementChart", idx)
        } else {
            commit("delChart", idx)
        }
    },
}

const mutations = {
    addChart(state, data) {
        state.chart.push(data)
    },
    incrementQty(state, idx) {
        state.chart[idx].qty++
    },
    delChart(state, idx) {
        state.chart.splice(idx, 1)
    },
    decrementChart(state, idx) {
        state.chart[idx].qty--
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
