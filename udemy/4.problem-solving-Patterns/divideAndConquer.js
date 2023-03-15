//wwrite a function that that takes in two parameters "arr" and "num"
// the function should determine the index of the "num" in the array

//using divide and conquer approach

function determineTheIndex(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max - min) / 2);
    let middleElement = arr[middle];

    if (num > middleElement) {
      min = middle + 1;
    } else if (num < middleElement) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
