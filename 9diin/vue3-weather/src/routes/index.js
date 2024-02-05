import { createRouter, createWebHashHistroy } from "vue-router";
import Home from "~/pages/Home";

export default createRouter({
  // hash모드 : 특정 페이지에서 새로고침 시 '페이지 찾을수 없음'을 방지
  history: createWebHashHistroy(),

  // pages : page를 구분해주는 기능을 routes로 구현
  routes: [
    {
      //page path
      path: "/",
      name: Home,
      components: Home,
    },
  ],
});
