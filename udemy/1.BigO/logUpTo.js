function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}


// Note that this has a complexity of O(1) beacause as from if n is > 10 , it only logs 10 times always.. so it is a constant value


// In other words, the function logs a maximum of 10 always so theres no growth in the complexity relative to the value of n....... (it cant go past 10) . so the big(0) becomes contant at some point constant as 
 