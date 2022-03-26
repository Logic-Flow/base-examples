import LogicFlow from "@logicflow/core";
import { SelectionSelect } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import "../013_sqlNode/style.css";
import ResizableHtml from "../024_nodeResize/ResizableHtml";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  background: {
    backgroundImage: "url(../asserts/img/grid.svg)",
    backgroundRepeat: "repeat"
  },
  plugins: [SelectionSelect]
});
lf.extension.selectionSelect.setSelectionSense(true, false);

lf.register(ResizableHtml);

lf.render({
  nodes: [
    {
      id: "html_33",
      type: "resizable-html",
      x: 100,
      y: 200,
      properties: {
        tableName: "Users",
        fields: [
          {
            key: "id",
            type: "string"
          },
          {
            key: "name",
            type: "string"
          },
          {
            key: "age",
            type: "integer"
          }
        ]
      }
    },
    {
      id: "html_34",
      type: "resizable-html",
      x: 350,
      y: 200,
      properties: {
        tableName: "Students",
        fields: [
          {
            key: "id",
            type: "string"
          },
          {
            key: "name",
            type: "string"
          },
          {
            key: "age",
            type: "integer"
          }
        ],
        nodeSize: {
          width: 160,
          height: 80
        }
      }
    },
    {
      id: "html_333",
      type: "resizable-html",
      x: 450,
      y: 300,
      properties: {
        tableName: "Students",
        fields: [
          {
            key: "id",
            type: "string"
          },
          {
            key: "name",
            type: "string"
          },
          {
            key: "age",
            type: "integer"
          }
        ],
        nodeSize: {
          width: 160,
          height: 140
        }
      }
    }
  ],
  edges: []
});

document.querySelector("#js_open").addEventListener("click", () => {
  lf.extension.selectionSelect.openSelectionSelect();
});
lf.on("selection:selected", (data) => {
  lf.extension.selectionSelect.closeSelectionSelect();
  alert(`你选中了${data.length}个元素`);
});
