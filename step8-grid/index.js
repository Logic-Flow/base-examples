import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";
import UserTask from "./UserTask";
import StartTask from "./StartTask";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: {
    size: 20,
    visible: true,
    type: "dot",
    config: {
      color: "#ababab",
      thickness: 1
    }
  }
});

lf.register(UserTask);
lf.register(StartTask);

lf.render(data);
