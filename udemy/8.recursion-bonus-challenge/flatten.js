function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let acc = [];

  function recursive(item) {
    if (item.length === 0) return acc;
    if (!Array.isArray(item[0])) acc.push(item[0]);
    else recursive(item[0]);
    return recursive(item.slice(1));
  }

  return recursive(arr);
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));
