// write a function called "maxSubarraySum" which accepts an array of integers
// and a number called "n" . the function should calculate the maximum
// sum of n consecutive integer in the array.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxsum = 0;
  let tempsum = 0;

  for (let i = 0; i < num; i++) {
    maxsum += arr[i];
  }
  tempsum = maxsum;

  for (let i = num; i < arr.length; i++) {
    tempsum = tempsum - arr[i - num] + arr[i];
    maxsum = Math.max(tempsum, maxsum);
  }
  return maxsum;
}

console.log(maxSubarraySum([2, 4, 6, 1, 9, 6, 4, 7, 8, 3, 2], 3));

// expects 19
