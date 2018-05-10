import java.util.Hashtable;

/*
    @param {Integer[]} nums
    @param {Integer} target
    @return {Integer[]}
    
    plan: 
    Populate a hash where the keys are numbers and the values are the indicies of their compliments
    to the target.
*/


class Solution {
    public int[] twoSum(int[] nums, int target) {
        Hashtable complementsHashtable = new Hashtable();
        for (int i = 0; i < nums.length; i++){
            if(complementsHashtable.contains(target - nums[i])){
                int[] solution = new int[2]; 
                solution[0] = complementsHashtable.get(target - nums[i]);
                solution[1] = i;
                return solution;
            }
            complementsHashtable.put(nums[i], i);
        }
        return null;
    }
}