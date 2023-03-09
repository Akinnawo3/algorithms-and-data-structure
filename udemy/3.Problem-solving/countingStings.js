//  this function takes in a string and makes a count of all the individual alphabet or numbers in the string without considering the cases
// it excludes special characters.
// it returns the result in an object form.

function count(str) {
  let res = {};

  for (let i = 0; i <= str.length; i++) {
    let currentItem = str[i].toLowerCase();
    if (res[currentItem] > 0) {
      currentItem++;
    } else {
      res[currentItem] = 1;
    }
  }
}
