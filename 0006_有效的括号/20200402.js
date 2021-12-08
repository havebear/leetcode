/*
 * @Author: BGG
 * @Date: 2020-04-02 12:55:29
 * @LastEditors: BGG
 * @LastEditTime: 2020-04-02 12:56:06
 * @Description:  有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

var map = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']']
])

/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  if (!s) return true
  if (s.length < 2) return false
  var temp = []
  for (var i = 0; s[i] != null; i++) {
      if (temp.length && map.get(temp[temp.length - 1]) === s[i]) {
          temp.pop()
      } else {
          temp.push(s[i])
      }
  }
  return !temp[0]
};

isValid('()')
