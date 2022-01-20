import LogicFlow from "@logicflow/core";
import { BpmnElement, DndPanel } from "@logicflow/extension";
import { ContextPad } from "./contextPad";
import setContextPad from "./setContextPad";
import setDndPanel from "./setDndPanel";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  plugins: [BpmnElement, DndPanel, ContextPad]
});
setContextPad(lf);
setDndPanel(lf);
lf.render({
  nodes: [
    {
      type: "bpmn:startEvent",
      x: 100,
      y: 100,
      text: "开始"
    }
  ]
});
