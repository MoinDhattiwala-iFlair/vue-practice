<template>
  <div id="app">
    <Students />
  </div>
</template>

<script>
import Students from "./components/Students.vue";

export default {
  name: "App",
  components: {
    Students,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
