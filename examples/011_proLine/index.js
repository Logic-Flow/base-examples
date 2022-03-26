import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import ProLine from "./line";
import data from "./data";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});
lf.register(ProLine);
lf.setDefaultEdgeType("ProLine");
lf.render(data);
