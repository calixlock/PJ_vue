<template>
  <div>
    <!-- <li v-for="i in sampleArray">{{ i }}</li> -->
    <li v-for="(i, idx) in sampleArray" :key="idx">{{ i }}</li>
    <!-- 고유 key값이 있으면 key를 기준으로 렌더링 대상 식별하므로 부하가 적게 발생한다   -->
    <!-- key값이 없다면 순서 기반으로 짐작해서 렌더링 대상을 정하고 더 많은 DOM을 업데이트 해야한다 -->
    <li v-for="(user, idx) in otherArray" :key="user.id">
      id : {{ user.id }} | name : {{ user.name }} | idx : {{ idx }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleArray: ["a", "b", "c", "d", "e", "f"],
      otherArray: [
        { id: 1, name: "kim" },
        { id: 2, name: "seo" },
        { id: 3, name: "na" },
        { id: 4, name: "lee" },
        { id: 5, name: "ahn" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
