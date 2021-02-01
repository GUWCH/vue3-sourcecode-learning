// console.log("main.js111222");
import { createApp } from "./src/runtime-canvas/";
import App from "./src/App";
import { getRootContainer } from "./src/Game";

//根容器
createApp(App).mount(getRootContainer());
