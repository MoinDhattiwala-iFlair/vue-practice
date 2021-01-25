<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.name" v-if="item.name !== 'java'">
      {{ item.name }}
      <button @click="remove(index)">X</button>
    </li>
    <li v-else>Java is not Allowed</li>
  </ul>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    remove(index) {
      EventBus.$emit("itemRemove", index);
    },
  },
};
</script>

<style></style>
