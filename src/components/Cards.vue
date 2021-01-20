<template>
    <div class="container" @mouseover="showHver()" @mouseleave="hideHOver()">
        <div :class="hoverShow ? 'hover show' : 'hide'"></div>
        <div class="image">
            <!-- <div :class="hoverShow ? 'hover show' : 'hide'"></div> -->
            <img :src="image" :alt="name" />
            <p :class="hoverShow ? 'chapter zindex' : 'chapter'">{{ "$ " + price }}</p>
            <p :class="hoverShow ? 'read' : 'read hide'" @click="addChart(prod)">Add</p>
        </div>
        <div class="dsc">
            <p class="name">{{ name }}</p>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "Cards",
    data() {
        return {
            hoverShow: false,
        }
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        prod: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions(["addChart"]),
        showHver() {
            this.hoverShow = true
        },

        hideHOver() {
            this.hoverShow = false
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    border-radius: 7px;
    width: 164px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .image {
        height: 210px;
        position: relative;

        img {
            border-radius: 7px;
            width: 165px;
            max-height: 100%;
        }

        .chapter {
            bottom: 0;
            margin-left: 10px;
            margin-bottom: 10px;
            border-radius: 7px;
            text-align: center;
            background: #4cb6cb;
            padding: 5px;
            color: white;
            font-size: 10pt;
            position: absolute;
            font-weight: bold;
        }
    }

    .dsc {
        padding: 10px;
    }
}

.hover {
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 50%;
    position: absolute;
    border-radius: 7px;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.read {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14pt;
    font-weight: bold;
    cursor: pointer;
    z-index: 2;
}

.zindex {
    z-index: 999;
}

.hide {
    display: none;
}
</style>
