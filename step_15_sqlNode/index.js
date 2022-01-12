import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "./style.css";
import sqlNode from "./sqlNode";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true
});

lf.register(sqlNode);
lf.setDefaultEdgeType("bezier");
lf.setTheme({
  bezier: {
    stroke: "#afafaf",
    strokeWidth: 1
  }
});
lf.render({
  nodes: [
    {
      id: "node_id_1",
      type: "sql-node",
      x: 100,
      y: 100,
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
      id: "node_id_2",
      type: "sql-node",
      x: 400,
      y: 100,
      properties: {
        tableName: "Settings",
        fields: [
          {
            key: "id",
            type: "string"
          },
          {
            key: "key",
            type: "integer"
          },
          {
            key: "value",
            type: "string"
          }
        ]
      }
    }
  ],
  edges: []
});

document.querySelector("#js_add-field").addEventListener("click", () => {
  lf.getNodeModelById("node_id_1").addField({
    key: Math.random().toString(36).substring(2, 7),
    type: ["integer", "long", "string", "boolean"][
      Math.floor(Math.random() * 4)
    ]
  });
});
