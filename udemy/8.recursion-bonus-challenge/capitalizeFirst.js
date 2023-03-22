function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
  
  if (arr.length===0) return newArr
  
  let word = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
  
  newArr.push(word)
  newArr = newArr.concat(capitalizeFirst(arr.slice(1)))
  
  return newArr;
  } 


  console.log(capitalizeFirst(['car','taco','banana']))