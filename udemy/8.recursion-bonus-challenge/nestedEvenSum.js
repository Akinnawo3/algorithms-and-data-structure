// Write a recursive function called nestedEvenSum.
//  Return the sum of all even numbers in an object
//  which may contain nested objects.

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;

  //   let allKeys = Object.keys(obj)
  let allValues = Object.values(obj);
  function recurssive(arr) {
    if (arr.length === 0) return sum;
    if (typeof arr[0] === "number" && arr[0] % 2 === 0) {
      sum += arr[0];
    } else if (typeof arr[0] === "object") {
      let newArr = Object.values(arr[0]);
      //   console.log(arr[0]);
      recurssive(newArr);
    }
    return recurssive(arr.slice(1));
  }
  return recurssive(allValues);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj2));
