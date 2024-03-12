<template>
  <div>
    <div>count : {{ count }}</div>
    <div v-if="count % 2 == 0 && count != 0" class="red"></div>
    <div v-else-if="count % 2 != 0 && count != 0" class="blue"></div>
    <div v-else class="yellow"></div>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    minus() {
      this.count--;
    },
  },
};
</script>

<style scoped>
.red {
  width: 100px;
  height: 100px;

  background-color: red;
}
.blue {
  width: 100px;
  height: 100px;

  background-color: blue;
}
.yellow {
  width: 100px;
  height: 100px;

  background-color: yellow;
}
</style>
