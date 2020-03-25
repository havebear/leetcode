/*
 * @Author: 616749285@qq.com
 * @Date: 2020-03-24 14:31:00
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-03-24 14:32:04
 * @Description:  整数反转
 * https://leetcode-cn.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var reg = /\d+/
  var str = x + ''
  var regStr = str.match(reg)[0].split('')
  var result = Number(str.replace(reg, regStr.reverse().join('')))
  if (result > (Math.pow(2, 31) - 1) || result < Math.pow(-2, 31)) return 0
  return result
}

console.log(reverse(-123))
