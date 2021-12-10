import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.render({
  nodes: [
    {
      id: "1",
      type: "rect",
      x: 100,
      y: 100
    },
    {
      id: "2",
      type: "circle",
      x: 300,
      y: 200
    }
  ],
  edges: [
    {
      sourceNodeId: "1",
      targetNodeId: "2",
      type: "polyline"
    }
  ]
});
