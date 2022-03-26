import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";
import sequence from "./sequence";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});
lf.register(sequence);
lf.setDefaultEdgeType("sequence");
lf.render(data);

// lf.on("edge:click", ({ data }) => {
//   lf.getEdgeModelById(data.id).setText({
//     draggable: true
//   });
// });
