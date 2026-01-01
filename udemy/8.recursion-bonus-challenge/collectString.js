// collectStrings
// Write a function called collectStrings which accepts
//  an object and returns an array of all the values
// in the object that have a typeof string

// function collectStrings(obj) {
//   let acc = [];
//   let keys = Object.values(obj);

//   function recursive(arr) {
//     if (arr.length === 0) return acc;
//     if (typeof arr[0] === "string") acc.push(arr[0]);
//     if (typeof arr[0] === "object" && !Array.isArray(arr[0])) {
//       let newKey = Object.values(arr[0]);
//       recursive(newKey);
//     }

//     return recursive(arr.slice(1));
//   }
//   return recursive(keys);
// }

function collectStrings(obj) {
  const res = [];
  const values = Object.values(obj);

  function recursive(arr) {
    console.log(arr);
    if (arr.length === 0) return res;
    if (typeof arr[0] === "string") res.push(arr[0]);
    if (typeof arr[0] === "object" && !Array.isArray(arr[0])) {
      const newKey = Object.values(arr[0]);
      recursive(newKey);
    }
    return recursive(arr.slice(1));
  }

  return recursive(values);
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
