import { defineComponent, h } from "@vue/runtime-core";
import Circle from "./component/circle";
import StartPage from "./pages/StartPage";

export default defineComponent({
  render() {
    // 创建虚拟节点
    // const vnode = h("rect", { x: 100, y: 100 }, "飞机大战");
    // const vnode = h("rect", { x: 100, y: 100 }, ["飞机大战", h(Circle)]);
    const vnode = h("Container", [h(StartPage)]);
    return vnode;
  },
});
