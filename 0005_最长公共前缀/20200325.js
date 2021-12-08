/*
 * @Author: BGG
 * @Date: 2020-03-25 19:16:02
 * @LastEditors: BGG
 * @LastEditTime: 2020-03-25 19:16:40
 * @Description:  最长公共前缀
 * https://leetcode-cn.com/problems/longest-common-prefix/
 */

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs = []) {
  const str = strs[0]
  let result = ''
  if (!str) return result
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; strs[j] != null; j++) {
      if (str[i] !== strs[j][i]) return result
    }
    result += str[i]
  }
  return result
};

console.log(longestCommonPrefix(["flower","flow","flight"]))