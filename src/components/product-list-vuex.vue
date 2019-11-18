
//Компонент product-list-vuex который будет получать данные с помощью store (для примера)
<template>
    <div>
        <productItem v-for="(product, i) in productsState" :key="i" :product="product" :index="(i+1)" @viewDetails="viewDetails" ></productItem>
    </div>
</template>

<script>

    import productItem from "./product-item.vue";

    export default {
        components: {
            productItem
        },
        data() {
            return{}
        },
        //Метод отработает после загрузки компонента
        computed: {
            productsState() {
                return this.$store.getters.getProducts //Прокидываем state productsState - из store с помощью getter - getProducts
            }
        },
        created() {
           this.$store.dispatch('actionLoadProducts', this.$store.state.productsState) //Вызовим action и прокинем в него данные
        },
        //В методах описываем функции
        methods: {
            viewDetails(id) { //Создадим событие viewDetails
                alert(id)
            }
        }
    }

</script>