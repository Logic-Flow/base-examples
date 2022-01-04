import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  background: {
    backgroundImage: "url(../asserts/img/grid.svg)",
    backgroundRepeat: "repeat"
  }
});

lf.render(data);
