import LogicFlow from "@logicflow/core";
import { Group, DndPanel, BpmnElement } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import customEdge from "./customEdge";
import setDndPanel from "../step_22_contextPad/setDndPanel";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  plugins: [Group, DndPanel, BpmnElement]
});
lf.register(customEdge);
lf.setDefaultEdgeType("custom-edge");
setDndPanel(lf);

lf.render({
  nodes: [
    {
      id: "rect_2",
      type: "circle",
      x: 450,
      y: 300
    },
    {
      id: "rect_3",
      type: "rect",
      x: 150,
      y: 100
    }
  ],
  edges: [
    {
      sourceNodeId: "rect_3",
      targetNodeId: "rect_2",
      type: "custom-edge",
      text: "连线文本"
    }
  ]
});
