<template>
  <div>
    <div>{{ rawHtml }}</div>
    <div>{{ rawHtml2 }}</div>
    <div v-html="rawHtml2"></div>
    <!-- <div v-bind:class="{active: isActive}">클래스</div> -->
    <div :class="{ active: isActive }">클래스 바인딩 테스트 입니다</div>
    <button @click="change">버튼</button>
    <h3 style="color: #535bf2; font-size: 30px">html 스타일 테스트</h3>
    <h3 :style="{ color: fontColor, fontSize: fontSize + 'px' }">
      스타일 바인딩 테스트
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 텍스트 보간법을 이용한 선언적 렌더링(declarative rendering)
      rawHtml: "텍스트 입니다",
      rawHtml2: '<span style="color: red">빨간색</span>',
      isActive: false,
      fontColor: "#888888",
      fontSize: 30,
    };
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
div.active {
  color: green;
}
</style>
