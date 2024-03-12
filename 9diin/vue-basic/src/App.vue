<template>
  <div>{{ rawHtml }}</div>
  <div>{{ rawHtml2 }}</div>
</template>

<script>
export default {
  data() {
    return {
      // 텍스트 보간법을 이용한 선언적 렌더링
      rawHtml: "텍스트 입니다",
    };
  },
};
</script>

<style lang="scss" scoped></style>
