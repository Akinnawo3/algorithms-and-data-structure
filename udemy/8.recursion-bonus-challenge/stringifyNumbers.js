function stringifyNumbers(obj) {
  let allKeys = Object.keys(obj);
  let allValues = Object.values(obj);

  function recursive(arr, obj) {
    if (arr.length === 0) return obj;
    // if (typeof (obj[arr[0]]) === "number") obj[arr[0]])= obj[arr[0]]).toString();
    if (typeof obj[arr[0]] === "number") obj[arr[0]] = obj[arr[0]].toString();
    else if (
      typeof obj[arr[0]] === "object" &&
      !Array.isArray(obj[arr[0]]) &&
      obj[arr[0]] !== null
    ) {
      console.log(obj[arr[0]]);
      //   console.log(arr[0]);
      let tempKey = Object.keys(obj[arr[0]]); // ["val", "info"]
      obj[arr[0]] = recursive(tempKey, obj[arr[0]]);
    }
    return recursive(arr.slice(1), obj);
  }
  return recursive(allKeys, obj);
}

let obj = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};

console.log(stringifyNumbers(obj));
// stringifyNumbers(obj);
