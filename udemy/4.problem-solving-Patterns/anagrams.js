// given two strings, write a function to determine if the second string is an anagram of the first.
// an anagram is a word fromed by rearranging the letters of another such as "cinema" and "iceman"

function isAnagram(str1, str2) {
  let counter1 = {};
  let counter2 = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let char of str1) {
    counter1[char] = ++counter1[char] || 1;
  }
  for (char of str2) {
    counter2[char] = ++counter2[char] || 1;
  }

  for (key in counter1) {
    if (!(key in counter2) || counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("cinema", "iceman"));
console.log(isAnagram("awesome", "aweson"));
