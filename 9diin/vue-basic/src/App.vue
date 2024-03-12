<template>
  <div>{{ count }}</div>
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
};
</script>

<style lang="scss" scoped></style>
