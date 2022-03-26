import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import HtmlCard from "./HtmlCard";
import CustomEdge from "./CustomEdge";
import CustomEdge2 from "./CustomEdge2";
import data from "./data";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.register(HtmlCard);
lf.register(CustomEdge);
lf.register(CustomEdge2);
lf.setDefaultEdgeType("custom-edge");
lf.render(data);

document.querySelector("#js_getEdgeData").addEventListener("click", () => {
  const data = lf.getGraphData();
  console.log(data);
});

document.querySelector("#js_changeEdgeType").addEventListener("click", () => {
  const { edges } = lf.getGraphData();
  const type = edges[0].type === "custom-edge" ? "custom-edge2" : "custom-edge";
  edges.forEach((edge) => {
    lf.changeEdgeType(edge.id, type);
  })
});
