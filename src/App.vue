<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <component_one/>
    <productList></productList>
  </div>
</template>

<script>
//Ипортируем компоненты
import component_one from "./components/component-one.vue";
import productList from "./components/product-list.vue";

export default {
  name: "app",
  //Регистрируем компоненты
  components: {
    component_one,
    productList
  }
};
</script>
