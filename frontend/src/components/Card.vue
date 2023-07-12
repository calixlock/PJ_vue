<template>
  <div class="card shadow-sm">
    <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
<!--    <img :src="item.imgPath" />-->
    <div class="card-body">
      <p class="card-text">
        <span class="discount badge bg-danger">
          <div class="discount-text fs-7">
            -{{item.discountPer}}%
          </div>
        </span>
        &nbsp;{{item.name}}
      </p>
      <div class="d-flex justify-content-between align-items-center">
<!--        <div class="btn-group">-->
<!--          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>-->
<!--          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
          <button class="btn btn-primary">구입하기</button>
<!--        </div>-->
        <small class="price text-muted">
          {{lib.getNumberFormatted(item.price)}}
        </small>

        <small class="realPrice fs-4">
          {{lib.getNumberFormatted(item.price*(100-item.discountPer)/100)}}
        </small>
      </div>
    </div>
  </div>
</template>
<script>
import lib from "@/scripts/lib";

export default {
  name : "Card",
  props : {
    // item: String
    item: Object // 백엔드에서 가져온 dataType 지정
  },
  setup(){
    return {lib}
  }
}
</script>
<style scoped>
.card .img{
  display: inline-block;
  width: 100%;
  height: 300px;
  background : no-repeat;
  background-size: contain;
  //object-fit:cover;
  background-position: center;
}
.card .card-body .price{
  text-decoration: line-through;
}
</style>