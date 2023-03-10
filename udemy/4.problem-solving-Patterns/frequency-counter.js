// this pattern uses an object to collect a bunch of values and their frequencies

// write a finction caled "same" which accepts two arrays. The value should return true
// if every value in the array has its corresponding value squared in the second array .
// the frequency must be the same

// e.g;

// same([1,2,3], [4,1,9]) returns true
// same([1,2,3], [1,9]) returns false
// same([1,2,1], [4,4,1]) returns false (must ebe the )

//naive solution
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//refactored solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

