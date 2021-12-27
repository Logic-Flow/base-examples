import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import UserTask from "./UserTask";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.register(UserTask);

lf.render({
  nodes: [
    {
      id: "node_id_1",
      type: "UserTask",
      x: 100,
      y: 100,
      text: { x: 100, y: 100, value: "节点1" }
    },
    {
      id: "node_id_2",
      type: "circle",
      x: 200,
      y: 300,
      text: { x: 200, y: 300, value: "节点2" },
      properties: {}
    }
  ],
  edges: [
    {
      id: "edge_id",
      type: "polyline",
      sourceNodeId: "node_id_1",
      targetNodeId: "node_id_2",
      text: { x: 139, y: 200, value: "连线" },
      startPoint: { x: 100, y: 140 },
      endPoint: { x: 200, y: 250 },
      pointsList: [
        { x: 100, y: 140 },
        { x: 100, y: 200 },
        { x: 200, y: 200 },
        { x: 200, y: 250 }
      ],
      properties: {}
    }
  ]
});

lf.on("node:click", ({ data }) => {
  lf.setProperties(data.id, {
    disabled: !data.properties.disabled,
    scale: 2
  });
});
