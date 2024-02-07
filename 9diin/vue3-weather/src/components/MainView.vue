<template>
  <div class="leftContainer">
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
        <div class="weatherDegree">
          <p>10&deg;</p>
        </div>
        <div class="weatherIcon">
          <img src="~/assets/logo.png" alt="LogoImg" srcset="" />
        </div>
        <div class="weatherData">
          <div
            v-for="Temporary in TemporaryData"
            :key="Temporary.title"
            class="detailData"
          >
            <p>{{ Temporary.title }}</p>
            <p>{{ Temporary.value }}</p>
          </div>
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
export default {
  data() {
    return {
      // 임시데이터 틀잡아두기
      TemporaryData: [
        {
          title: "습도",
          value: "88%",
        },
        {
          title: "풍속",
          value: "10m/s",
        },
        {
          title: "풍향",
          value: "WS",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.leftContainer {
  width: 324px;
  min-width: 324px;
  height: 700px;
  border-radius: 50px;
  background: linear-gradient(#16455f, #0e1239);
  box-shadow: 5px 5px 10px gray;

  #cityNameBox {
    width: 100%;
    height: 10%;

    .cityName {
      @include c-center;
      width: 100%;
      height: 100%;
      p {
        color: white;
        font-family: "Poppins", sans-serif;
        line-height: 2.5;
        text-align: center;
        &:first-child {
          width: 241px;
          height: 33px;
          font-size: 1.5rem;
        }
        &:last-child {
          width: 160px;
          height: 19px;
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  #contentsBox {
    width: 100%;
    height: 62.5%;
    .buttonBox {
      @include center;
      width: 100%;
      height: 20%;
      .buttonBackground {
        width: 224px;
        height: 35px;
        background-color: #052137;
        border-radius: 10px;
        display: flex;
        button {
          width: 112px;
          height: 35px;
          border: 0;
          border-radius: 7.5px;
          outline: 0;
          cursor: pointer;
          &.forecast {
            background-color: #0889ff;
            color: white;
          }
          &.airQuality {
            background: transparent;
            color: #467599;
          }
        }
      }
    }
    .weatherBox {
      width: 100%;
      height: 80%;
    }
    .weatherDegree {
      @include center;
      width: 100%;
      height: 15%;
      p {
        font-size: 3.5rem;
        font-weight: 500;
        font-family: "Be Vietnam Pro", sans-serif;
        color: white;
      }
    }
    .weatherIcon {
      @include center;
      width: 100%;
      height: 60%;
      img {
        width: 160px;
        height: 160px;
      }
    }
    .weatherData {
      display: flex;
      width: 100%;
      height: 25%;
      .detailData {
        @include c-center;
        width: 33.33%;
        height: 100%;
        // 레이아웃 3개로 동일한 레이아웃을 반복시킴
        &:nth-child(1) {
          margin-left: 10px;
        }
        &:nth-child(2) {
          margin-left: 0 -10px;
        }
        &:nth-child(3) {
          margin-right: 10px;
        }
        p {
          line-height: 1.5;
          color: white;

          &:first-child {
            font-size: 1rem;
            font-weight: 300;
            font-family: "Noto Sans KR", sans-serif;
            color: #799ed0;
          }
          &:last-child {
            font-size: 1rem;
            font-weight: 200;
            font-family: "Poppins", sans-serif;
          }
        }
      }
    }
  }
  #todayWeather {
    // background-color: blue;
    width: 100%;
    height: 17.5%;
    .textBox {
      @include center-sb;
      // background-color: white;
      width: calc(100%-70px);
      height: 35%;
      padding: 0 35px;
      font-family: "Noto Sans KR", sans-serif;
      p {
        font-weight: 400;
        font-size: 0.8rem;
        color: white;
        text-align: center;
        &:last-child {
          // background-color: red;
          font-weight: 400;
          font-size: 0.8rem;
          color: #0085ff;
          cursor: pointer;
          margin-bottom: 1px;
        }
      }
    }
    .timelyWeatherBox {
      // background-color: blue;
      display: flex;
      align-items: center;
      width: calc(100% - 70px);
      padding: 0 30px;
      height: 65%;
    }
    .timelyWeather {
      display: flex;
      width: 126px;
      height: 70px;
      background-color: #0989ff;
      border-radius: 20px;
      margin-left: 15px;
      &:first-child {
        margin-left: 0;
      }
      .icon {
        @include center;
        // background-color: red;
        width: 45%;
        height: 100%;
        img {
          width: 100%;
        }
      }
      .data {
        @include c-center-se;
        width: 55%;
        height: 100%;
        p {
          color: whitesmoke;
          font-family: "Poppins", sans-serif;
          text-align: center;
          &.time {
            font-size: 0.8rem;
            font-weight: 200;
            margin-top: 7.5px;
          }
          &.currentDegree {
            font-size: 1.2rem;
            margin-top: 7.5px;
          }
        }
        div {
          @include center;
          width: 100%;
          height: 33.33%;
          img {
            height: 55%;
          }
          .fall {
            font-size: 0.9rem;
            margin-top: 1.5px;
          }
        }
      }
    }
  }
}
</style>
