export const getCustomePoints = ({ start, end, startOffset, endOffset }) => {
  const startPosition = {};
  const endPosition = {};
  // 边与水平线的夹角
  const angleOfHorizontal = Math.atan((end.y - start.y) / (end.x - start.x));
  if (end.x >= start.x) {
    startPosition.x = start.x + startOffset * Math.cos(angleOfHorizontal);
    startPosition.y = start.y + startOffset * Math.sin(angleOfHorizontal);
    endPosition.x = end.x - endOffset * Math.cos(angleOfHorizontal);
    endPosition.y = end.y - endOffset * Math.sin(angleOfHorizontal);
  } else {
    startPosition.x = start.x - startOffset * Math.cos(angleOfHorizontal);
    startPosition.y = start.y - startOffset * Math.sin(angleOfHorizontal);
    endPosition.x = end.x + endOffset * Math.cos(angleOfHorizontal);
    endPosition.y = end.y + endOffset * Math.sin(angleOfHorizontal);
  }
  
  return { startPosition, endPosition };
};
