// stringifyNumbers
// Write a function called stringifyNumbers which takes
// in an object and finds all of the values which are numbers and
// converts them to strings. Recursion would be a great way to solve this!

// function stringifyNumbers(obj) {
//   let allKeys = Object.keys(obj);
//   let allValues = Object.values(obj);

//   function recursive(arr, obj) {
//     if (arr.length === 0) return obj;
//     // if (typeof (obj[arr[0]]) === "number") obj[arr[0]])= obj[arr[0]]).toString();
//     if (typeof obj[arr[0]] === "number") obj[arr[0]] = obj[arr[0]].toString();
//     else if (typeof obj[arr[0]] === "object" && !Array.isArray(obj[arr[0]]) && obj[arr[0]] !== null) {
//       // console.log(obj[arr[0]]);
//       //   console.log(arr[0]);
//       let tempKey = Object.keys(obj[arr[0]]); // ["val", "info"]
//       obj[arr[0]] = recursive(tempKey, obj[arr[0]]);
//     }
//     return recursive(arr.slice(1), obj);
//   }
//   return recursive(allKeys, obj);
// }

// let stringifyNumbers = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     const value = obj[key];

//     if (!Array.isArray(value) && typeof value == "number") {
//       obj[key] = value.toString();
//     } else if (Array.isArray(value)) {
//       const strArrayVal = value.map((val) => {
//         if (typeof val != "number") {
//           return val;
//         }
//         return val.toString();
//       });
//       obj[key] = strArrayVal;
//     } else if (typeof value === "object") {
//       stringifyNumbers(value);
//     }
//   });
//   return obj
// };

// function numberToString2(obj) {
//   for (const key in obj) {
//     if (!Array.isArray(obj[key]) && typeof obj[key] === "number") {
//       obj[key] = obj[key].toString();
//     } else if (Array.isArray(obj[key])) {
//       const strArrayVal = obj[key].map((val) => {
//         if (typeof val !== "number") {
//           return val;
//         }
//         return val.toString();
//       });
//       obj[key] = strArrayVal;
//     } else if (typeof obj[key] === "object") {
//       numberToString2(obj[key]);
//     }
//   }
// }

function stringifyNumbers(obj) {
  const allKeys = Object.keys(obj);

  const recursive = (arr) => {
    if (arr.length === 0) return obj;
    const currValue = obj[arr[0]];
    if (typeof currValue === "number") currValue === currValue.toString();
    if (typeof currValue === "object" && !Array.isArray(currValue)) {
      const newKeys = Object.keys(currValue);
      return recursive(newKeys);
    }
    return recursive(arr.slice(1));
  };

  return recursive(obj);
}

let obj = {
  num: "1",
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
// stringifyNumbers(obj);
