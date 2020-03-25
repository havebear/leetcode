/*
 * @Author: 616749285@qq.com
 * @Date: 2020-03-25 18:35:25
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-03-25 18:36:01
 * @Description:  罗马数字转整数
 * https://leetcode-cn.com/problems/roman-to-integer/
 */


const ENUMS = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
])

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
  const arr = s.split('')
  let result = 0
  for (let i = 0; i < arr.length; i++) {
      const current = ENUMS.get(arr[i])
      const next = ENUMS.get(arr[ i + 1])
      if (current < next) {
          result += next - current
          i++
      } else {
          result += current
      }
  }
  return result
};
