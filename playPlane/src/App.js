import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
  render() {
    // 创建虚拟节点
    const vnode = h("div");
    return vnode;
  },
});
