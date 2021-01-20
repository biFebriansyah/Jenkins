<template>
    <div class="container">
        <div class="items">
            <div class="pic">
                <img :src="images" :alt="name" />
            </div>
            <div class="desc">
                <h2 class="name">{{ name }}</h2>
                <h2 class="detail">{{ desc }}</h2>
                <h2 class="price">{{ price }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
// const kata =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique dicta amet possimus! Dicta nihil cum obcaecati, rem assumenda ipsam fugit, atque minus consequatur, similique pariatur id. Voluptatibus, blanditiis consequatur!"

export default {
    name: "list",
    props : {
        images : {
            type: String,
            required: true,
        },
        name : {
            type: String,
            required: true
        },
        desc : {
            type: String,
            required: true
        },
        price : {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
}
.pic {
    width: 400px;
}
.inp {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
}
.detail {
    line-height: 20px;
    font-size: 14pt;
    margin-bottom: 20px;
}
.name {
    margin-bottom: 20px;
    color: rgb(0, 153, 255);
}
.price {
    text-align: right;
    margin-right: 20px;
    color: rgb(124, 123, 123);
}
.desc {
    width: 40%;
}
.items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>
