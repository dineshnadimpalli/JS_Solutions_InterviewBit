// Problem link https://www.interviewbit.com/problems/remove-nth-node-from-list-end/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
  removeNthFromEnd = function (A, B) {
    let size = 0;
    let tmp = A;
    while (tmp) {
      size++;
      tmp = tmp.next;
    }
    if (size <= B) return A.next;
    tmp = A;
    for (let i = 0; i < size - B - 1; i++) {
      tmp = tmp.next;
    }
    tmp.next = tmp.next.next;
    return A;
  };
}

let res = new Solution();

let a = [1, 2, 3, 4, 5],
  b = 2;
a.forEach((e) => res.add(e));
res.removeNthFromEnd(res.head, b);

console.log(res.traverse());
