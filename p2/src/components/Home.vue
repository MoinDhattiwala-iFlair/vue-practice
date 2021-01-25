<template>
  <div>
    <h1>Hello World</h1>
    <form @submit.prevent="add">
      <input v-model="inputText" />
      <button type="submit">+</button>
    </form>
    <items :items="lists"></items>
  </div>
</template>

<script>
import Items from "./Items.vue";
export default {
  components: { Items },
  data() {
    return {
      inputText: null,
      lists: [
        { name: "Php" },
        { name: "Android" },
        { name: "Python" },
        { name: "Vue js" },
        { name: "React js" },
        { name: "Node js" },
      ],
    };
  },
  methods: {
    add() {
      this.lists.push({ name: this.inputText });
      this.inputText = null;
    },
  },
  created() {
    EventBus.$on("itemRemove", (index) => {
      this.lists.splice(index, 1);
    });
  },
};
</script>

<style></style>
