export const cellFactory = (blueprints) => {
  return blueprints
    .map((cellTypeRule) => {
      let i = 0;
      const array = [];
      for (; i < cellTypeRule.numberOfCells; ) {
        array.push(cellTypeRule.type);
        i++;
      }
      return array;
    })
    .reduce((prev, curr) => prev.concat(curr));
};
