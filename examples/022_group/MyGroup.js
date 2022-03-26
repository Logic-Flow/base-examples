import { GroupNode } from "@logicflow/extension";

class MyGroup extends GroupNode.view {}

class MyGroupModel extends GroupNode.model {
  initNodeData(data) {
    super.initNodeData(data);
    this.isRestrict = true;
    this.resizable = true;
    this.width = 480;
    this.height = 280;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = "#AEAFAE";
    style.strokeWidth = 1;
    return style;
  }
}

export default {
  type: "my-group",
  model: MyGroupModel,
  view: MyGroup
};
