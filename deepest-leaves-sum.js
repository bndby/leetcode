/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let maxDeep = 1;
  let sum = 0;
  const travel = (node, deep) => {
    if (node.left || node.right) {
      if (node.left) travel(node.left, deep + 1);
      if (node.right) travel(node.right, deep + 1);
    } else {
      if (deep > maxDeep) {
        sum = node.val;
        maxDeep = deep;
      } else if (deep === maxDeep) {
        sum += node.val;
      }
    }
  };
  travel(root, maxDeep);
  return sum;
};

console.log(
  "[1]",
  deepestLeavesSum({
    val: 1,
    left: null,
    right: null,
  })
);

console.log(
  "[1,2,3,4,5,null,6,7,null,null,null,null,8]",
  deepestLeavesSum({
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: {
        val: 6,
        left: null,
        right: {
          val: 8,
          left: null,
          right: null,
        },
      },
    },
  })
);
