import LogicFlow from "@logicflow/core";
import { Group, DndPanel, BpmnElement } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import MyGroup from "./MyGroup";
import SubProcess from "./SubProcess";
import customItem from "./customItem";
import setDndPanel from "../step_22_contextPad/setDndPanel";

const lf = new LogicFlow({
  container: document.querySelector("#app"),
  grid: true,
  plugins: [Group, DndPanel, BpmnElement]
});
lf.setDefaultEdgeType("polyline");
setDndPanel(lf);
lf.register(MyGroup);
lf.register(SubProcess);
lf.register(customItem);

// lf.extension.dndPanel.setPatternItems([
//   {
//     type: "custom-item",
//     text: "开始",
//     label: "开始",
//     icon:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg=="
//   }
// ]);
lf.render({
  nodes: [
    {
      type: "my-group",
      x: 400,
      y: 400,
      children: ["rect_2"]
    },
    {
      id: "rect_2",
      type: "circle",
      x: 400,
      y: 400
    },
    {
      id: "rect_3",
      type: "rect",
      x: 200,
      y: 100
    },
    {
      id: "group_2",
      type: "sub-process",
      x: 300,
      y: 120,
      children: ["rect_3"]
    }
  ]
});
