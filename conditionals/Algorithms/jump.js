var canJump = function(nums) {
  if (nums == null || nums.length == 0) {
    return true;
  }
  if (nums[0] == 0 && nums.length > 1) {
    return false;
  }
  let max = 0;
  for (var i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    if (i + nums[i] > max) {
      max = i + nums[i];
    }
  }
  return max >= nums.length - 1;
};
