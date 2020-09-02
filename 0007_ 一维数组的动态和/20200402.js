/*
 * @Author: 616749285@qq.com
 * @Date: 2020-04-02 12:55:29
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-09-02 17:32:23
 * @Description:  一维数组的动态和
 * https://leetcode-cn.com/problems/running-sum-of-1d-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
      nums[i] += nums[i - 1] || 0
  }
  return nums
};

runningSum([1,2,3,4])
