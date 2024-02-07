<template>
  <div class="rightContainer">
    <div id="cityNameBox">
      <div class="cityName">
        <p>cityName</p>
        <p>currentTime</p>
      </div>
    </div>
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">Forecast</button>
          <button class="airquality">Air Quality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="airCondition">
          <p>feeling</p>
        </div>
        <div class="detail">
          <div class="title">
            <p>detailTemperatures</p>
          </div>
          <div class="data">
            <div class="dataName">
              <p></p>
              <p>detailData.name</p>
            </div>
            <div class="dataValue">
              <p></p>
              <p>detailData.value <span></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Map />
    <nav>
      <i class="fas fa-home"></i>
      <i class="fas fa-search-location"></i>
      <i class="fas fa-chart-line"></i>
      <i class="fas fa-cog"></i>
    </nav>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
export default {
  components: {
    Map,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
@import "../scss/subView.scss";
</style>
