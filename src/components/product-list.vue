//Компонент product-list (без Vuex)
<template>
    <div>
        <!--В свойство :product передаем item product который будет брать данные из массива products-->
        <productItem v-for="(product, i) in products" :key="i" :product="product" :index="(i+1)" @viewDetails="viewDetails" ></productItem>
    </div>
</template>

<script>
    //Ипортируем компоенент productItem - который будет выводить данные по продукту
    import productItem from "./product-item.vue";

    export default {
        //Регистрируем компонент
        components: {
            productItem
        },
        data() {
            return {
                products: [
                    {
                        id: 1,
                        title: 'Product #1',
                        price: 50,
                        qt: 10
                    },
                        {
                        id: 2,
                        title: 'Product #2',
                        price: 520,
                        qt: 110
                    },
                        {
                        id: 3,
                        title: 'Product #3',
                        price: 800,
                        qt: 30
                    }
                ]
            }
        },
        methods: {
            viewDetails(id) {
                alert(id)
            }
        }
    }
</script>