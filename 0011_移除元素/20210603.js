/*
 * @Author: 616749285@qq.com
 * @Date: 2021-06-03 10:45:31
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-03 14:00:41
 * @Description:  移除元素
 * https://leetcode-cn.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if (!nums || !nums.length) return 0
    for (var i = 0; i < nums.length;) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums.length
};
