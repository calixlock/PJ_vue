<template>
  <div class="card shadow-sm">
<!--    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>-->
    <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
    <img :src="item.imgPath" />
    <div class="card-body">
      <p class="card-text"> {{item.name}} </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
<!--          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>-->
<!--          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
          <button class="btn btn-primary">구입하기</button>
        </div>
        <small class="text-muted">
          {{item.price}}원
        </small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name : "Card",
  props : {
    item: Object // 백엔드에서 가져온 dataType 지정
  }
}
</script>
<style scoped>
.card .img{
  display: inline-block;
  width: 100%;
  height: 250px;
  background-size: contain;
  background-position: center;
}
</style>