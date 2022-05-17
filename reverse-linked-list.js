/**
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head, prev = null) {
  if (!head) return null;
  const item = { val: head.val, next: prev };
  return head.next ? reverseList(head.next, item) : item;
};

console.log(
  "[1,2,3,4,5]",
  reverseList({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  })
);

console.log("[]", reverseList(null));
