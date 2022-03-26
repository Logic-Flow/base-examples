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
      x: 320,
      y: 100
    },
    {
      id: "3",
      type: "circle",
      x: 320,
      y: 200
    }
  ],
  edges: [
    {
      type: "bezier",
      sourceNodeId: "1",
      targetNodeId: "3"
    }
  ]
};

export default data;
