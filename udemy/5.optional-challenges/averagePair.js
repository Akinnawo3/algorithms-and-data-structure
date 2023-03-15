function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!

  let bottomPointer = 0;
  let topPointer = arr.length - 1;

  if (arr.length < 1) return false;

  while (bottomPointer < topPointer) {
    const avg = (arr[bottomPointer] + arr[topPointer]) / 2;

    if (avg > num) {
      topPointer--;
    } else if (avg < num) {
      bottomPointer++;
    } else {
      return true;
    }
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
