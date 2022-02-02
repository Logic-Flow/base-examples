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
    style.stroke = "rgb(24, 125, 255)";
    style.strokeWidth = 1;
    return style;
  }
}

export default {
  type: "sub-process",
  model: MyGroupModel,
  view: MyGroup
};
