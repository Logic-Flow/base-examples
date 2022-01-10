import { DiamondNode, DiamondNodeModel } from "@logicflow/core";

class CustomDiamondModel extends DiamondNodeModel {
  setAttributes() {
    this.rx = 50;
    this.ry = 20;
  }
}

export default {
  type: "custom-diamond",
  view: DiamondNode,
  model: CustomDiamondModel
};
