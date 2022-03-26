import { EllipseResize } from "@logicflow/extension";

class ResizableEllipseModel extends EllipseResize.model {
  // setAttributes() {
  //   this.text.editable = false;
  // }
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.fill = "#f1a131";
    style.strokeWidth = 1;
    return style;
  }
}
class ResizableEllipseView extends EllipseResize.view {}

export default {
  type: "resizable-ellipse",
  view: ResizableEllipseView,
  model: ResizableEllipseModel
};
