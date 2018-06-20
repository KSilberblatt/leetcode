public boolean groupSum(int start, int[] nums, int target) {
  if (target == 0) { return true; }
  if (start == nums.length) { return false; }
  if (nums[start] == target) { return true; }
  if (groupSum(start + 1, nums, target - nums[start])) {
    return true; }
  return groupSum(start + 1, nums, target);
}
