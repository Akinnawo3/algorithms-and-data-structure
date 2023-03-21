// isPalindrome
// Write a recursive function called isPalindrome 
// which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
   
    let res =""
     function recursion(arg){
         if (arg ==="") return res ===str
         res += arg[(arg.length)-1]
          return recursion(arg.slice(0, arg.length -  1))
     }
  return recursion(str)
  }