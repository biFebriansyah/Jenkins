<template>
    <nav class="navbar navbar-light">
        <div class="navbar-text ml-auto d-flex">
            <button class="btn btn-sm btn-outline-success mr-2" @click="showChekout">
                <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
            </button>
            <div class="mr-2" v-if="cart.length > 0">
                <button type="button" class="btn btn-sm btn-success">
                    <span class="badge badge-pill badge-light mr-2">{{ qty }}</span>
                    <span class="price">$ {{ total }}</span>
                </button>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
                <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
            </button>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
    name: "Navbar",
    props: ["qty", "total", "cart"],
    components: {
        FontAwesomeIcon,
    },
    methods: {
        showChekout() {
            this.$emit("show")
        },
    },
}
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap.scss";

.price {
    font-weight: bold;
}
</style>
