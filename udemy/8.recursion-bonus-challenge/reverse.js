// reverse
// Write a recursive function called reverse which accepts
// a string and returns a new string in reverse.

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!'

  let res = "";

  function doIt(item) {
    if (item === "") return res;
    res = item[0] + res;
    return doIt(item.slice(1));
  }

  return doIt(str);
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
