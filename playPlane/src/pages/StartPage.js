import { defineComponent, h } from "@vue/runtime-core";
import startPageImg from "../../assets/background.jpg";

export default defineComponent({
  render() {
    return h("Container", [h("Sprite", { texture: startPageImg })]);
  },
});
