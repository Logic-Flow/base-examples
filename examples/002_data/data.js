const data = {
  nodes: [
    {
      id: "1",
      type: "rect",
      x: 100,
      y: 100,
      text: "矩形"
    },
    {
      id: "2",
      type: "circle",
      x: 300,
      y: 100,
      text: "圆形"
    },
    {
      id: "3",
      type: "ellipse",
      x: 500,
      y: 100,
      text: "椭圆"
    },
    {
      id: "4",
      type: "polygon",
      x: 100,
      y: 250,
      text: "多边形"
    },
    {
      id: "5",
      type: "diamond",
      x: 300,
      y: 250,
      text: "菱形"
    },
    {
      id: "6",
      type: "text",
      x: 500,
      y: 250,
      text: "纯文本节点"
    },
    {
      id: "7",
      type: "html",
      x: 100,
      y: 400,
      text: "html节点"
    }
  ],
  edges: [
    {
      sourceNodeId: "1",
      targetNodeId: "3",
      startPoint: {
        x: 100,
        y: 60
      },
      endPoint: {
        x: 500,
        y: 50
      },
      type: "polyline"
    },
    {
      sourceNodeId: "3",
      targetNodeId: "4",
      type: "line"
    },
    {
      sourceNodeId: "3",
      targetNodeId: "5",
      type: "bezier"
    }
  ]
};

export default data;
