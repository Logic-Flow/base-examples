import { CircleNode, CircleNodeModel } from "@logicflow/core";

class CustomCircleModel extends CircleNodeModel {
  setAttributes() {
    this.r = 40;
  }
  getAnchorsByOffset() {
    return [];
  }
}

export default {
  type: "custom-circle",
  view: CircleNode,
  model: CustomCircleModel
};
