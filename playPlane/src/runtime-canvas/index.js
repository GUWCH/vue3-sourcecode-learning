import { createRenderer } from "@vue/runtime-core";

import { Graphics, Text } from "pixi.js";

const renderer = createRenderer({
  createElement(type) {
    console.log("type", type);
    let element;
    if (type == "rect") {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 500, 500);
      element.endFill();
    } else if (type == "circle") {
      console.log("circle");
      element = new Graphics();
      element.beginFill(0xffff00);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }
    return element;
  },
  setElementText(node, text) {
    let cText = new Text(text);
    node.addChild(cText);
  },
  createText(text) {
    return new Text(text);
  },
  patchProp(el, key, preValue, nextValue) {
    el[key] = nextValue;
  },
  insert(el, parent) {
    // console.log("el", el);
    // console.log("parent", parent);
    parent.addChild(el);
  },
});

console.log("renderer", renderer);

export function createApp(rootComponent) {
  console.log("-------", rootComponent);
  return renderer.createApp(rootComponent);
}
