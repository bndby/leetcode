/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.some((list) => list)) {
    const min = Math.min(...lists.filter(Boolean).map((list) => list.val));
    const minIndex = lists.findIndex((list) => list && list.val === min);
    lists[minIndex] = lists[minIndex]?.next;
    return {
      val: min,
      next: mergeKLists(lists),
    };
  }
  return null;
};

console.log(
  mergeKLists([
    {
      val: 1,
      next: {
        val: 3,
        next: null,
      },
    },
    {
      val: 2,
      next: {
        val: 4,
        next: null,
      },
    },
    {
      val: -1,
      next: {
        val: 5,
        next: null,
      },
    },
  ])
);
