/*
 * @Author: 616749285@qq.com
 * @Date: 2021-06-03 10:45:31
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-03 10:47:23
 * @Description:  合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

const arr1 = [1, 2, 4]
const arr2 = [1, 3, 4]

mergeTwoLists(arr1, arr2)
