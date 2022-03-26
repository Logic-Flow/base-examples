import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import customCircle from "./customCircle";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});
lf.register(customCircle);
lf.render({
  nodes: [
    {
      type: "customCircle",
      x: 100,
      y: 200
    }
  ]
});

document.querySelector("#js_custom-dnd").addEventListener("mousedown", (e) => {
  const type = e.target.getAttribute("data-type");
  if (type) {
    lf.dnd.startDrag({
      type,
      text: `${type}节点`
    });
  }
});
