<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <component_one/>
  </div>
</template>

<script>
import component_one from "./components/component-one.vue";

export default {
  name: "app",
  components: {
    component_one
  }
};
</script>
