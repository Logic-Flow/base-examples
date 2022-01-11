import { CircleNode, CircleNodeModel } from "@logicflow/core";

class InvisibleAnchorModel extends CircleNodeModel {
  setAttributes() {
    this.r = 30;
  }
  getAnchorStyle() {
    const style = super.getAnchorStyle();
    style.stroke = "transparent";
    style.fill = "none";
    style.hover.stroke = "transparent";
    return style;
  }
}

export default {
  type: "invisible-anchor",
  view: CircleNode,
  model: InvisibleAnchorModel
};
