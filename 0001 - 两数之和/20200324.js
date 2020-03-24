/*
 * @Author: 616749285@qq.com
 * @Date: 2020-03-24 13:31:21
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-03-24 13:32:07
 * @Description:  两数之和
 * https://leetcode-cn.com/problems/two-sum/
 */

var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
      for(j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target)
              return [i, j]
      }
  }
}

console.log(twoSum([2,7,11,15], 9))