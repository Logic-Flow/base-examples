import { GroupNode } from "@logicflow/extension";

class MyGroup extends GroupNode.view {}

class MyGroupModel extends GroupNode.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.foldable = true;
    this.width = 400;
    this.height = 200;
    const noTarget = {
      message: "不允许连接分组",
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return false;
      }
    };
    this.targetRules.push(noTarget);
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
  // 隐藏锚点而不是设置锚点数为0
  // 因为分组内部节点与外部节点相连时，
  // 如果折叠分组，需要分组代替内部节点与外部节点相连。
  getAnchorStyle() {
    const style = super.getAnchorStyle();
    style.stroke = "transparent";
    style.fill = "none";
    style.hover.stroke = "transparent";
    return style;
  }
}

export default {
  type: "sub-process",
  model: MyGroupModel,
  view: MyGroup
};
