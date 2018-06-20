public boolean groupNoAdj(int start, int[] nums, int target) {
  if (target == 0) { return true; }
  if (start >= nums.length) { return false; }
  if (nums[start] == target) { return true; }
  if (groupNoAdj(start + 2, nums, target - nums[start])) {
    return true; }
  return groupNoAdj(start + 1, nums, target);
}
