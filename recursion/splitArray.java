public boolean splitArray(int[] nums) {
  int index = 0;
  int sum1 = 0;
  int sum2 = 0;
  return recArray(nums, index, sum1, sum2);
}

private boolean recArray ( int[] nums, int index, int sum1, int sum2 ) {
  if ( index >= nums.length ) {
    return sum1 == sum2;
  }

  int value = nums[index];

  return (recArray(nums, index + 1, sum1 + value, sum2) ||
    recArray(nums, index + 1, sum1, sum2 + value));
}
