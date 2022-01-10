import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import CustomCircle from "./customCircle";
import CustomEllipse from "./customEllipse";
import CustomPolygon from "./customPolygon";
import CustomDiamond from "./customDiamond";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.register(CustomCircle);
lf.register(CustomEllipse);
lf.register(CustomPolygon);
lf.register(CustomDiamond);

lf.render({
  nodes: [
    {
      id: "node_id_1",
      type: "custom-circle",
      x: 100,
      y: 100,
      text: "开始"
    },
    {
      id: "node_id_2",
      type: "custom-ellipse",
      x: 200,
      y: 100
    },
    {
      id: "node_id_3",
      type: "custom-polygon",
      x: 350,
      y: 100
    },
    {
      id: "node_id_4",
      type: "custom-diamond",
      x: 500,
      y: 100
    }
  ],
  edges: []
});
