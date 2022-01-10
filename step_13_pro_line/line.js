import { LineEdge, LineEdgeModel, h } from "@logicflow/core";
import { getCustomePoints } from "./util";
class ProLineEdge extends LineEdge {
  getEdge() {
    const { model } = this.props;
    const { startPoint, endPoint } = model;
    const style = model.getEdgeStyle();
    const lineData = {
      x1: startPoint.x,
      y1: startPoint.y,
      x2: endPoint.x,
      y2: endPoint.y
    };
    const { startPosition, endPosition } = getCustomePoints({
      start: startPoint,
      end: endPoint,
      startOffset: 25, // 距离起点的距离
      endOffset: 25, // 距离终点的距离
    });
    const startCircle = {
      cx: startPosition.x,
      cy: startPosition.y,
      fill: '#7B68EE',
      r: 10,
    }
    const startText = {
      x: startPosition.x - 8,
      y: startPosition.y + 6,
      fill: "#FFFFFF"
    };
    const endCircle = {
      cx: endPosition.x,
      cy: endPosition.y,
      fill: '#7B68EE',
      r: 10,
    }
    const endText = {
       x: endPosition.x - 8,
      y: endPosition.y + 6,
      fill: "#FFFFFF"
    };

    return h("g", {}, [
      h("line", { ...lineData, ...style }),
      h("circle", { ...startCircle }),
      h("text", { ...startText }, "起"),
      h("circle", { ...endCircle }),
      h("text", { ...endText }, "终")
    ]);
  }
}

export default {
  type: "ProLine",
  view: ProLineEdge,
  model: LineEdgeModel
};
