/*
 * @Author: BGG
 * @Date: 2021-06-03 10:45:31
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-03 11:34:54
 * @Description:  删除有序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if (!nums || !nums.length) return 0
  let temp = null
  for (var i = 0; i < nums.length;) {
      if (temp === nums[i]) {
          nums.splice(i, 1)
      } else {
          temp = nums[i]
          i++
      }
  }
  return nums.length
};
