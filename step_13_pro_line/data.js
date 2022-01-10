const data = {
  nodes: [
    {
      id: "1",
      type: "rect",
      x: 120,
      y: 100
    },
    {
      id: "2",
      type: "rect",
      x: 420,
      y: 100
    },
    {
      id: "3",
      type: "circle",
      x: 380,
      y: 260
    }
  ],
  edges: [
    {
      type: "ProLine",
      sourceNodeId: "1",
      targetNodeId: "2"
    },
    {
      type: "ProLine",
      sourceNodeId: "1",
      targetNodeId: "3"
    }
  ]
};

export default data;
