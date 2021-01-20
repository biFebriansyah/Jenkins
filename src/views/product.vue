<template>
    <div class="container">
        <Navbar :qty="quantity" :total="calculate" :cart="allChart" @show="showChekout" />
        <main>
            <Checkout :cart="allChart" :cartTotal="calculate" :show="checkoutShow" />
            <section class="config">
                <h2>Product</h2>
                <div class="input">
                    <input
                        type="text"
                        class="filterPrice"
                        placeholder="filter price"
                        v-model="max"
                    />
                </div>
            </section>
            <section class="prod">
                <div class="content" v-for="items in getProd" :key="items.id">
                    <div class="if" v-if="Number(items.price) <= max">
                        <Cards
                            :name="items.name"
                            :image="items.image"
                            :price="items.price"
                            :prod="items"
                        />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import Cards from "@/components/Cards.vue"
import Navbar from "@/components/Navbar.vue"
import Checkout from "@/components/Checkout.vue"
import { mapGetters, mapActions } from "vuex"

export default {
    name: "product",
    components: {
        Cards,
        Navbar,
        Checkout,
    },
    data() {
        return {
            datas: null,
            max: 99,
            chart: [],
            checkoutShow: true,
        }
    },
    methods: {
        ...mapActions(["fatching"]),
        showChekout() {
            this.checkoutShow = !this.checkoutShow
        },
    },
    computed: {
        ...mapGetters(["getProd", "calculate", "allChart", "quantity"]),
    },
    mounted() {
        this.fatching()
    },
}
</script>

<style scoped>
main {
    width: 80%;
    margin: 0 auto;
    height: 100vh;
    margin-top: 20px;
}

.prod {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.config {
    padding: 20px;
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filterPrice {
    padding: 5px;
    font-size: 11pt;
}
</style>
