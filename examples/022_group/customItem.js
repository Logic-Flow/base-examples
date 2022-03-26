import { RectNode, RectNodeModel } from "@logicflow/core";

class CustomItem extends RectNode {}

class CustomItemModel extends RectNodeModel {
  initNodeData(data) {
    super.initNodeData(data);
    this.width = 40;
    this.height = 30;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.fill = "red";
    style.strokeWidth = 1;
    return style;
  }
}

export default {
  type: "custom-item",
  view: CustomItem,
  model: CustomItemModel
};
