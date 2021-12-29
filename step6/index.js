import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";
import theme from "./theme.js";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});
lf.setTheme(theme);
lf.render(data);
