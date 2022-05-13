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
var addTwoNumbers = function (l1, l2) {
  let res = {};
  l1 = l1 ?? { val: 0, next: null };
  l2 = l2 ?? { val: 0, next: null };
  const sum = l1.val + l2.val;
  if (sum > 9) {
    res.val = sum % 10;
    if (l1.next) {
      l1.next.val++;
    } else if (l2.next) {
      l2.next.val++;
    } else {
      l1.next = { val: 1, next: null };
    }
  } else {
    res.val = sum;
  }

  if (l1.next || l2.next) {
    res.next = addTwoNumbers(l1.next, l2.next);
  } else {
    res.next = null;
  }
  console.log(res);
  return res;
};

const answer = addTwoNumbers(
  {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null,
      },
    },
  },
  {
    val: 9,
    next: null,
  }
);

console.log(answer);
