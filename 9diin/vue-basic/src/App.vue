<template>
  <div>
    <!-- v-show : 항상 렌더링 되어 DOM에 남아있다 / display css속성만 전환됨 -->
    <div v-show="isVisible" class="red"></div>
    <div v-show="!isVisible" class="blue"></div>
    <!-- v-if : 조건이 만족 할때만 렌더링 된다 -->
    <div v-if="isVisible" class="yellow"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {},
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
