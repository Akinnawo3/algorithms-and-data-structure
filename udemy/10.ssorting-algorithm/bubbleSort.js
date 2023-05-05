// Bubble sort is a simple sorting algorithm that repeatedly steps through a list of items, compares adjacent elements and swaps them if they are in the wrong order.
//  The pass through the list is repeated until the list is sorted.

// Here's how bubble sort works:

// Start at the beginning of the list and compare the first two elements. If the first element is greater than the second element, swap them.

// Move to the next pair of elements, compare them, and swap if necessary. Continue this process until the end of the list is reached.

// Repeat steps 1 and 2 for the entire list until no more swaps are needed.




function swap(arr, smaller, larger) {
  let temp = arr[smaller];
  arr[smaller] = arr[larger];
  arr[larger] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;

  }
}

// console.log(bubbleSort([4, 5, 2, 7, 2, 63, 8, 2, 0, 1, 9]));

// bubbleSort([4, 5, 2, 7,1]);
bubbleSort([8, 4, 2, 3, 1, 5, 6]);


