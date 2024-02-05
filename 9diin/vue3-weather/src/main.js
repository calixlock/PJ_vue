// import Vue from "vue";
import { createApp } from "vue";
import router from "~/router/index.js";
import App from "./App";

createApp(App).use(router).mount("#app");
