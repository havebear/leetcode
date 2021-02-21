/*
 * @Author: 616749285@qq.com
 * @Date: 2020-03-24 13:31:21
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-02-21 13:48:54
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

var twoSum = function(nums, target) {
  const map = new Map([[nums[0], 0]])
  for (var i = 1; i < nums.length; i++) {
      const temp = map.get(target - nums[i])
      if (temp !== undefined) return [temp, i] 
      map.set(nums[i], i)
  }
}

console.log(twoSum([2,7,11,15], 9))