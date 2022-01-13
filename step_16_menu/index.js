import LogicFlow from "@logicflow/core";
import { Menu } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import LockedNode from "./LockedNode";
import "./style.css";

LogicFlow.use(Menu);

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.register(LockedNode);

lf.addMenuConfig({
  nodeMenu: [
    {
      text: "分享",
      callback() {
        alert("分享成功！");
      }
    },
    {
      text: "属性",
      callback(node) {
        alert(`
          节点id：${node.id}
          节点类型：${node.type}
          节点坐标：(x: ${node.x}, y: ${node.y})`);
      }
    }
  ],
  edgeMenu: [
    {
      text: "属性",
      callback(edge) {
        alert(`
          边id：${edge.id}
          边类型：${edge.type}
          边坐标：(x: ${edge.x}, y: ${edge.y})
          源节点id：${edge.sourceNodeId}
          目标节点id：${edge.targetNodeId}`);
      }
    }
  ],
  graphMenu: [
    {
      text: "分享",
      callback() {
        alert("分享成功！");
      }
    }
  ]
});
lf.render({
  nodes: [
    {
      id: "node_id_1",
      type: "rect",
      x: 300,
      y: 300
    },
    {
      id: "node_id_2",
      type: "LockedNode",
      x: 100,
      y: 100
    }
  ],
  edges: []
});
