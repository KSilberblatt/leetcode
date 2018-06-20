public boolean groupSum6(int start, int[] nums, int target) {
  if (start >= nums.length) { return groupSum(0, nums, target); }
  if (nums[start] == 6) {
    return groupSum6(start + 1, nums, target - 6);
  }
  return groupSum6(start + 1, nums, target);
}

public boolean groupSum(int start, int[] nums, int target) {
  if (target == 0) { return true; }
  if (start == nums.length) { return false; }
  if (nums[start] == 6) { return groupSum(start + 1, nums, target); }
  if (nums[start] == target) { return true; }
  if (groupSum(start + 1, nums, target - nums[start])) {
    return true; }
  return groupSum(start + 1, nums, target);
}
