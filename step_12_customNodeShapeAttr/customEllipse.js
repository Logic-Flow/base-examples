import { EllipseNode, EllipseNodeModel } from "@logicflow/core";

class CustomEllipseModel extends EllipseNodeModel {
  setAttributes() {
    this.rx = 50;
    this.ry = 20;
  }
}

export default {
  type: "custom-ellipse",
  view: EllipseNode,
  model: CustomEllipseModel
};
