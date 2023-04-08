function swap(arr, smaller, larger) {
  let temp = arr[smaller];
  arr[smaller] = arr[larger];
  arr[larger] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      console.log(arr);
    }
    console.log("ONE ROUND FINISHED !!!!");
  }
}

// console.log(bubbleSort([4, 5, 2, 7, 2, 63, 8, 2, 0, 1, 9]));

bubbleSort([4, 5, 2, 7, 2, 63, 8, 2, 0, 1, 9]);
