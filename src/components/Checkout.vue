<template>
    <div v-if="show">
        <h1>Checkout</h1>
        <table class="table table-hover">
            <caption class="text-right h3">
                <b>Total: </b>
                <b>$ {{ cartTotal }}</b>
            </caption>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Item</th>
                    <th scope="col" class="text-center">Qty</th>
                    <th scope="col" class="text-right">Price</th>
                    <th scope="col" class="text-right">Sub-total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="item.product.id">
                    <td class="text-center">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button class="btn btn-info" @click="addChart(item.product)">
                                +
                            </button>
                            <button class="btn btn-outline-info" @click="delChrt(index)">
                                -
                            </button>
                        </div>
                    </td>
                    <th scope="row">{{ item.product.name }}</th>
                    <td class="text-center">{{ item.qty }}</td>
                    <td class="text-right">{{ item.product.price }}</td>
                    <td class="text-right">{{ Number(item.qty * item.product.price) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: "Checkout",
    props: ["cart", "cartTotal", "show"],
    methods: {
        ...mapActions(["addChart", "delChrt"]),
    },
}
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
