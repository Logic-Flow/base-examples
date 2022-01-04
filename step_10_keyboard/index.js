import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  keyboard: {
    enabled: true,
    shortcuts: [
      {
        keys: ["backspace"],
        callback: () => {
          const r = window.confirm("确定要删除吗？");
          if (r) {
            const elements = lf.getSelectElements(true);
            lf.clearSelectElements();
            elements.edges.forEach((edge) => lf.deleteEdge(edge.id));
            elements.nodes.forEach((node) => lf.deleteNode(node.id));
          }
        }
      }
    ]
  }
});

lf.render(data);
