import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import "../step_15_sqlNode/style.css";

import ResizableRect from "./ResizableRect";
import ResizableEllipse from "./ResizableEllipse";
import ResizableHexagon from "./ResizableHexagon";
import ResizableDiamond from "./ResizableDiamond";
import ResizableHtml from "./ResizableHtml";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  background: {
    backgroundImage: "url(../asserts/img/grid.svg)",
    backgroundRepeat: "repeat"
  }
});

lf.register(ResizableRect);
lf.register(ResizableEllipse);
lf.register(ResizableHexagon);
lf.register(ResizableDiamond);
lf.register(ResizableHtml);

lf.render({
  nodes: [
    {
      id: "rect_3",
      type: "resizable-rect",
      x: 150,
      y: 100,
      properties: {
        nodeSize: {
          width: 204,
          height: 74
        }
      }
    },
    {
      id: "rect_31",
      type: "resizable-rect",
      x: 150,
      y: 250
    },
    {
      id: "ellipse_3",
      type: "resizable-ellipse",
      x: 350,
      y: 100,
      properties: {
        nodeSize: {
          rx: 34,
          ry: 73
        }
      }
    },
    {
      id: "ellipse_31",
      type: "resizable-ellipse",
      x: 350,
      y: 250
    },
    {
      id: "diamond_31",
      type: "resizable-diamond",
      x: 500,
      y: 100
    },
    {
      id: "diamond_33",
      type: "resizable-diamond",
      x: 500,
      y: 250,
      properties: {
        nodeSize: {
          rx: 34,
          ry: 73
        }
      }
    },
    {
      id: "html_33",
      type: "resizable-html",
      x: 100,
      y: 400,
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
      y: 400,
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
      id: "diamond_34",
      type: "resizable-hexagon",
      x: 150,
      y: 550
    },
    {
      id: "diamond_341",
      type: "resizable-hexagon",
      x: 350,
      y: 550,
      properties: {
        nodeSize: {
          width: 60,
          height: 80
        }
      }
    }
  ],
  edges: []
});

document.querySelector("#js_save").addEventListener("click", () => {
  const data = lf.getGraphData();
  console.log(JSON.stringify(data));
});
