// Selection sort is a simple sorting algorithm that works by
//  repeatedly finding the minimum element from the unsorted
//  part of an array and placing it at the beginning of the sorted part.

// To start, the algorithm looks at the entire array and finds the smallest
//  element. It then swaps this smallest element with the first element of the
//  array. Now, the first element of the array is sorted.

// The algorithm then repeats this process for the remaining unsorted part of
//  the array, finding the smallest element and swapping it with the second element
//  of the array. This continues until the entire array is sorted.

// The key idea behind selection sort is that it gradually builds up the sorted part of
// the array one element at a time. While it may not be the most efficient sorting
//  algorithm for large arrays, it is easy to understand and implement.

function selectionSort(array) {}

console.log(selectionSort([8, 4, 2, 3, 1, 5, 6]));
