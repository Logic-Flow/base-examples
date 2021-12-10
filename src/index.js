import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "./styles.css";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  width: 1000,
  height: 500,
  grid: true
});

lf.render({
  nodes: [
    {
      id: "1",
      x: 200,
      y: 200,
      type: "rect"
    },
    {
      id: "2",
      x: 440,
      y: 220,
      type: "rect"
    }
  ]
});

lf.createEdge({
  type: "polyline",
  sourceNodeId: "1",
  targetNodeId: "2"
});
