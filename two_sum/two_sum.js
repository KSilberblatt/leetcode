/*
    @param {Integer[]} nums
    @param {Integer} target
    @return {Integer[]}
    
    plan: 
    Populate a object where the keys are numbers and the values are the indicies of their compliments
    to the target.
*/


function twoSum(nums, target){
    let complimentsObject = {}
    for (let i = 0; i < nums.length; i++){
        if (complimentsObject[nums[i]] !== undefined){
            return [complimentsObject[nums[i]], i];
        }
        complimentsObject[target - nums[i]] = i;
    }
    return false;
}
/*
    test case: 
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target)); //expect [ 0 , 1 ]
