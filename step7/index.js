import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";
import customNode from "./customNode.js";
import "./style.css";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.register(customNode);

lf.render(data);

lf.on("custom:button-click", (model) => {
  lf.setProperties(model.id, {
    body: "LogicFlow"
  });
});
