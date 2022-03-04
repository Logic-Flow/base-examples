import { PolylineEdge, PolylineEdgeModel } from "@logicflow/core";

class CustomEdgeModel extends PolylineEdgeModel {
  // customTextPosition = true;
  initEdgeData(data) {
    super.initEdgeData(data);
    this.customTextPosition = true;
  }
  getTextPosition() {
    const position = super.getTextPosition();
    const currentPositionList = this.points.split(" ");
    const pointsList = [];
    currentPositionList &&
      currentPositionList.forEach((item) => {
        const [x, y] = item.split(",");
        pointsList.push({ x: Number(x), y: Number(y) });
      });
    if (pointsList.length > 1) {
      let { x: x1, y: y1 } = pointsList[0];
      let { x: x2, y: y2 } = pointsList[1];
      let distence = 50;
      // 垂直
      if (x1 === x2) {
        if (y2 < y1) {
          // 上
          distence = -50;
        }
        position.y = y1 + distence;
        position.x = x1;
      } else {
        // 水平
        if (x2 < x1) {
          // 左
          distence = -50;
        }
        position.x = x1 + distence;
        position.y = y1 - 10;
      }
    }
    return position;
  }
}

class CustomEdge extends PolylineEdge {}

export default {
  type: "custom-edge",
  model: CustomEdgeModel,
  view: CustomEdge
};
