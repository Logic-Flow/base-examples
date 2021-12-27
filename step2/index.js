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
      y: 100,
      text: "矩形"
    },
    {
      id: "2",
      type: "circle",
      x: 300,
      y: 100,
      text: "圆形"
    },
    {
      id: "3",
      type: "ellipse",
      x: 500,
      y: 100,
      text: "椭圆"
    },
    {
      id: "4",
      type: "polygon",
      x: 100,
      y: 250,
      text: "多边形"
    },
    {
      id: "5",
      type: "diamond",
      x: 300,
      y: 250,
      text: "菱形"
    },
    {
      id: "6",
      type: "text",
      x: 500,
      y: 250,
      text: "纯文本节点"
    },
    {
      id: "7",
      type: "html",
      x: 100,
      y: 400,
      text: "html节点"
    }
  ]
});
