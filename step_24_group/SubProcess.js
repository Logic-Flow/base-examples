import { GroupNode } from "@logicflow/extension";

class MyGroup extends GroupNode.view {}

class MyGroupModel extends GroupNode.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.foldable = true;
    this.width = 400;
    this.height = 200;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = "#989891";
    style.strokeWidth = 1;
    style.strokeDasharray = "3 3";
    if (this.isSelected) {
      style.stroke = "rgb(124, 15, 255)";
    }
    if (this.isFolded) {
      style.fill = "#47C769";
    }
    return style;
  }
  getDefaultAnchor() {
    return [];
  }
}

export default {
  type: "sub-process",
  model: MyGroupModel,
  view: MyGroup
};
