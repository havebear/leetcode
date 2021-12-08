/*
 * @Author: BGG
 * @Date: 2021-06-03 10:45:31
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-03 14:41:31
 * @Description:  实现 strStr()
 * https://leetcode-cn.com/problems/implement-strstr/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle === '' || haystack === needle) return 0
    if (haystack.length < needle.length) return -1

    const haystackLength = haystack.length
    const needleLength = needle.length

    for (let i = 0; i < haystackLength; i++) {
        if ((haystackLength - i) < needleLength) break
        if (haystack[i] === needle[0]) {
            let isFind = true
            for (let j = 0; j < needleLength; j++) {
                if (haystack[i + j] !== needle[j]) {
                    isFind = false
                    break
                }
            }
            if (isFind) return i
        }
    }

    return -1
};
