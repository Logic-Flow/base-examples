import { h, CircleNode, CircleNodeModel } from "@logicflow/core";

class CustomCircle extends CircleNode {
  // 从iconfont下载的svg
  getIcon() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    return h(
      "svg",
      {
        // model中x,y表示中心坐标，而svg x,y表示左上角
        x: x - width / 2,
        y: y - height / 2,
        viewBox: "0 0 1024 1024",
        width,
        height
      },
      [
        h("path", {
          d:
            "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
          fill: style.stroke
        })
      ]
    );
  }
  getShape() {
    const { x, y, r } = this.props.model;
    const style = this.props.model.getNodeStyle();
    return h("g", {}, [
      h("circle", {
        ...style,
        cx: x,
        cy: y,
        r
      }),
      this.getIcon()
    ]);
  }
}

class CustomCircleModel extends CircleNodeModel {
  initNodeData(data) {
    if (data.text && typeof data.text === "string") {
      data.text = {
        value: data.text,
        x: data.x,
        y: data.y + 40
      };
    }
    super.initNodeData(data);
    this.r = 20;
  }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = "#1296db";
    style.strokeWidth = 4;
    return style;
  }
}

export default {
  type: "customCircle",
  model: CustomCircleModel,
  view: CustomCircle
};
