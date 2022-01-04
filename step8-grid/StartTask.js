import { CircleNode, CircleNodeModel } from "@logicflow/core";

class StartTask extends CircleNode {}

class StartTaskModel extends CircleNodeModel {
  initNodeData(data) {
    super.initNodeData(data);
    this.r = 40;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = "rgb(24, 125, 255)";
    return style;
  }
}

export default {
  type: "StartTask",
  model: StartTaskModel,
  view: StartTask
};
