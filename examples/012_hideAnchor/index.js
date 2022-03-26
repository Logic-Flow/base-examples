import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import customElement from "./customElement";
import invisibleAnchor from "./invisibleAnchor";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  hideAnchors: false
});

lf.register(customElement);
lf.register(invisibleAnchor);

lf.render({
  nodes: [
    {
      id: "node_id_1",
      type: "custom-circle",
      x: 100,
      y: 100,
      text: "开始"
    },
    {
      id: "node_id_2",
      type: "rect",
      x: 300,
      y: 100
    },
    {
      id: "node_id_3",
      type: "invisible-anchor",
      x: 100,
      y: 200
    }
  ],
  edges: []
});

document.querySelector("#js_hide-anchor").addEventListener("click", () => {
  lf.updateEditConfig({
    hideAnchors: true
  });
});
