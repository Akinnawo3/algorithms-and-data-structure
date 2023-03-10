//write a function called sunZero which accepts a sorted array of integers.
//  the finction shpuld find the first pair where sum is zero
// return an array that includes those values that sum toi zero
// or undefined if the pair does not exist.



function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])