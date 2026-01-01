// someRecursive
// Write a recursive function called someRecursive which
// accepts an array and a callback. The function returns
// true if a single value in the array returns true when
// passed to the callback. Otherwise it returns false.

const someRecursive = (arr, callBack) => {
  let res = false;

  const recursive = (arr) => {
    if (arr.length === 0) return res;

    if (callBack(arr[0])) return true;
    return recursive(arr.slice(1));
  };

  return recursive(arr);
};

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

//

console.log(someRecursive([4, 6, 8], isOdd));
