<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <component_one/>
    <productList></productList>
    <productListVuex></productListVuex>
  </div>
</template>

<script>
//Ипортируем компоненты
import component_one from "./components/component-one.vue";
import productList from "./components/product-list.vue";
import productListVuex from './components/product-list-vuex';

export default {
  name: "app",
  //Регистрируем компоненты
  components: {
    component_one,
    productList,
    productListVuex
  }
};
</script>
