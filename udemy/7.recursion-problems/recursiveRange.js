// Write a function called recursiveRange which accepts a number 
// and adds up all the numbers from 0 to the number passed to the function 


function recursiveRange(num){
    return num === 0 ? 0 : num+ recursiveRange(num-1)
}
    


