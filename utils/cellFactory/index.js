export const cellFactory = (blueprints, startCellIndetifier = 1) => {
  return blueprints
    .map((cellTypeRule) => {
      let i = 0;
      const array = [];
      for (; i < cellTypeRule.numberOfCells; ) {
        array.push({ ...cellTypeRule.type, id: startCellIndetifier++ });
        i++;
      }
      return array;
    })
    .reduce((prev, curr) => prev.concat(curr));
};
