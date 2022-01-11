import { CircleNode, CircleNodeModel } from "@logicflow/core";

class CustomCircleModel extends CircleNodeModel {
  constructor(data, graphModel) {
    if (!data.text) {
      data.text = "";
    }
    if (typeof data.text === "string") {
      data.text = {
        value: data.text,
        x: data.x,
        y: data.y + 40
      };
    }
    super(data, graphModel);
  }
  setAttributes() {
    this.r = 20;
  }
}

export default {
  type: "custom-circle",
  view: CircleNode,
  model: CustomCircleModel
};
