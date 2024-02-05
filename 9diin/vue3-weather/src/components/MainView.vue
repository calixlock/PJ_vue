<template>
  <div class="leftContainer">
    <div id="cityNameBox">
      <div class="cityName">
        <p>seoul</p>
        <p>2024-02-05</p>
      </div>
    </div>
    <div id="containerBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">forecast</button>
          <button class="airQuality">air quality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="weatherDegree">
          <p>10&deg;</p>
        </div>
        <div class="weatherIcon">
          <img src="~/assets/logo.png" alt="LogoImg" srcset="" />
        </div>
        <div class="weatherData">
          <p>data1</p>
          <p>data2</p>
        </div>
      </div>
    </div>
    <div id="todayWeather">
      <div class="textBox">
        <p>시간대별 날씨 정보</p>
        <p>이번주 날씨 보기</p>
      </div>
      <div class="timelyWeatherBox">
        <div class="timelyWeather">
          <div class="icon">
            <img src="~/assets/images/drop.png" alt="iconImg" srcset="" />
          </div>
          <div class="data">
            <p class="time">2pm</p>
            <p class="currentDegree">32&deg;</p>
            <div>
              <img src="~/assets/images/drop.png" alt="" />
              <p class="fall">15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <i class=""></i>
      <i class=""></i>
      <i class=""></i>
      <i class=""></i>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.leftContainer {
  width: 324px;
  height: 788px;
  border-radius: 50px;
  background: linear-gradient(#16455f, #0e1239);
  box-shadow: 5px 5px 10px gray;
}
</style>
