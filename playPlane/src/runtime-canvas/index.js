import { createRenderer } from "@vue/runtime-core";

const renderer = createRenderer({
  createElement(type) {
    console.log("type", type);
  },
  insert(el, parent) {
    console.log("el", el);
    console.log("parent", parent);
  },
});

export function createApp(rootComponent) {
  console.log("-------", rootComponent);
  return renderer.createApp(rootComponent);
}
