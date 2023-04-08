function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let middle = Math.floor((right +left )/2);
    if (num === arr[middle]) return middle;
    else if (num > arr[middle]) {
      left = middle-1;
    } else if (arr[middle] > num) {
      right = middle;
    }
  }

  return -1;

  // add whatever parameters you deem necessary - good luck!
}









console.log(
  binarySearch([1, 2, 3, 4, 5], 2) // 1
);
