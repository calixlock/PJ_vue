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
  },
  created() {
    console.log("lifecycle is created : ", this.count);
  },
  beforeMount() {
    console.log("lifecycle is beforeMount : ", document.querySelector("h1"));
  },
  mounted() {
    console.log("lifecycle is mounted : ", document.querySelector("h1"));
  },
};
</script>

<style lang="scss" scoped></style>
