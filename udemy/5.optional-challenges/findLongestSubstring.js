function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let accumulator = "";
  let currentLongest = 0;
  let i = 0,
    j = 0;

  if (str.length === 0) return 0;

  while (i < str.length) {
    if (!accumulator.includes(str[i])) {
      accumulator += str[i];
      i++;
    } else {
      currentLongest = Math.max(currentLongest, accumulator.length);
      accumulator = "";
      i++;
      // i = j;
    }
  }

  return Math.max(currentLongest, accumulator.length);
}

console.log(findLongestSubstring("pwwkew"));
