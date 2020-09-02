/*
 * @Author: 616749285@qq.com
 * @Date: 2020-04-02 12:55:29
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-09-02 16:35:06
 * @Description:  连续字符
 * https://leetcode-cn.com/problems/consecutive-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let count = 0
  let arr = []
  for (let i = 0; i < s.length; i++) {
      if (s[i] !== arr[arr.length - 1]) {
          arr = []
      }
      arr.push(s[i])
      if (arr.length > count) {
          count = arr.length
      }
  }
  return count
};

maxPower("aabbbbbccccdddddddeffffffggghhhhhiiiiijjjkkkkkllllmmmmmnnnnnoopppqrrrrsssttttuuuuvvvvwwwwwwwxxxxxyyyzzzzzzzz")
