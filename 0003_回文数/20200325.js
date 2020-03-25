/*
 * @Author: 616749285@qq.com
 * @Date: 2020-03-25 11:09:55
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-03-25 17:58:46
 * @Description:  回文数
 * https://leetcode-cn.com/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }
  var str = x + ''
  return str === str.split('').reverse().join('')
};

console.log(isPalindrome(123))
