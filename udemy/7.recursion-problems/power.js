// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base,exponent){
    if (exponent===0) return 1
    
    exponent=exponent-1
 
  return base* power(base,exponent)
}


console.log(power(2,4))