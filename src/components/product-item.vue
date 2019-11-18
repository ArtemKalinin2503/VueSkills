//Компонент product-item который содержит данные о каждом продукте
<template>
    <div>
        <!--Данные прокидываем из компонента product-list - с помощью свойства (props) product-->
        <h4>{{ index }} {{ product.title }}</h4>
        <p>{{ product.qt }} items for ${{ product.price }}</p>
        <button @click="viewDetailsClicked" >View Details</button>
    </div>
</template>

<script>
export default {
    //регистрируем props - которые принимает данный компонент
    props: ["product", "index"],
    data(){
        return {
            // product: {},
            // index: 1
        }
    },
    //В методах описываем функции
    methods: {
        viewDetailsClicked() {
            this.$emit("viewDetails", this.product.id) //Emit - записывает событие (эмулирует) с именем viewDetails и передает его в viewDetailsClicked
        }
    }
}
</script>