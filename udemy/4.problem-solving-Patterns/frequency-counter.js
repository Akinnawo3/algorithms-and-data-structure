// this pattern uses an object to collect a bunch of values and their frequencies

// write a finction caled "same" which accepts two arrays. The value should return true
// if every value in the array has its corresponding value squared in the second array .
// the frequency must be the same

e.g;

// same([1,2,3], [4,1,9]) returns true
// same([1,2,3], [1,9]) returns false
// same([1,2,1], [4,4,1]) returns false (must ebe the )

//naive solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
