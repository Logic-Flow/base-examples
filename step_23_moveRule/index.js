import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import customNode from "./customNode";
import movableNode from "./movableNode";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  stopMoveGraph: true
});

lf.register(customNode);
lf.register(movableNode);

lf.graphModel.addNodeMoveRules((model, deltaX, deltaY) => {
  if (model.isGroup && model.children) {
    // 如果移动的是分组，那么分组的子节点也跟着移动。
    lf.graphModel.moveNodes(model.children, deltaX, deltaY, true);
  }
  return true;
});

lf.render({
  nodes: [
    {
      type: "custom-node",
      x: 300,
      y: 300,
      text: "你好",
      children: ["circle-1"]
    },
    {
      type: "movable-node",
      x: 100,
      y: 50,
      text: "你好"
    },
    {
      id: "circle-1",
      type: "circle",
      x: 300,
      y: 300,
      text: "hello world"
    }
  ]
});
