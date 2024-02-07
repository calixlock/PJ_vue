<template>
  <div class="rightContainer">
    <div id="cityNameBox">
      <div class="cityName">
        <p>seoul</p>
        <p>2024-02-05</p>
      </div>
    </div>
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">forecast</button>
          <button class="airQuality">air quality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="ariCondition">
          <p>매우 추움</p>
        </div>
        <div class="detail">
          <div class="title">
            <p>Detail Temperatures</p>
          </div>
          <div class="data">
            ]\
            <div class="dataName">
              <p></p>
              <p></p>
            </div>
            <div class="dataValue">
              <p><span></span>&deg;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <!-- fontAwesome 적용 / index.html에 fontAwesome CDN link적용-->
      <i class="fas fa-home"></i>
      <i class="fas fa-search-location"></i>
      <i class="fas fa-chart-line"></i>
      <i class="fas fa-cog"></i>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
