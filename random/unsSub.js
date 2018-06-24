var findUnsortedSubarray = function(nums) {
    let len = nums.length - 1;
    let upperOOO = [nums[len], len];
    let lowerOOO = [nums[0], 0];
    let oOO = false;
    for(let i = 0; i <= len; i++){
        if(nums[i] < lowerOOO[0]){
            lowerOOO[1] = i - 1;
            oOO = true;
            break;
        }
        lowerOOO[0] = nums[i];
    }

    if (!oOO){
        return 0;
    }
    for(let i = len; i >= 0; i--){

        if(nums[i] > upperOOO[0]){
            upperOOO[1] = i + 1;
            break;
        }
        upperOOO[0] = nums[i];
    }

    return (upperOOO[1] - lowerOOO[1] + 1);

};

let nums = [1,3,2,2,2];

console.log(findUnsortedSubarray(nums));
