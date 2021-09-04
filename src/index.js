import LogicFlow from "@logicflow/core";
import "./styles.css";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
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
      x: 405,
      y: 210,
      type: "rect"
    }
  ]
});

lf.createEdge({
  type: "polyline",
  sourceNodeId: "1",
  targetNodeId: "2"
});
