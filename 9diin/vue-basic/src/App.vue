<template>
  <div>{{ count }}</div>
  <h1>Vue_js lifeCycle testing</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  // life cycle test
  beforeCreate() {
    console.log("lifecycle is beforeCreate : ", this.count);
    // this.test(); // 호출 에러 발생
  },
  created() {
    console.log("lifecycle is created : ", this.count);
    this.test();
  },
  // beforeMount() {
  //   console.log("lifecycle is beforeMount : ", document.querySelector("h1"));
  // },
  // mounted() {
  //   console.log("lifecycle is mounted : ", document.querySelector("h1"));
  // },
  methods: {
    test() {
      console.log("test function 호출");
    },
  },
};
</script>

<style lang="scss" scoped></style>
