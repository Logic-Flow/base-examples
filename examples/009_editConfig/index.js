import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import data from "./data.js";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  adjustEdge: false,
  adjustNodePosition: false,
  hideAnchors: true
});

lf.render(data);

const eb = document.querySelector("#editButton");
eb.addEventListener("click", () => {
  const isEdit = eb.getAttribute("data-edit");
  console.log(isEdit);
  const isEditable = isEdit === "true";
  eb.setAttribute("data-edit", !isEditable);
  eb.innerText = !isEditable ? "编辑中..." : "编辑";
  lf.updateEditConfig({
    adjustEdge: !isEditable,
    adjustNodePosition: !isEditable,
    hideAnchors: !isEditable
  });
});
