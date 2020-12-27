// Problem link https://www.interviewbit.com/problems/palindrome-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
  lPalin = function (A) {
    let a = A,
      b;
    let aTail = this.getHalf(A);
    b = aTail.next;
    aTail.next = null;
    b = this.reverse(b);
    while (a && b) {
      if (a.data != b.data) return 0;
      a = a.next;
      b = b.next;
    }
    return 1;
  };

  getHalf = function (A) {
    let slow = A;
    let fast = A.next;
    while (fast) {
      fast = fast.next;
      if (fast) {
        fast = fast.next;
        slow = slow.next;
      }
    }
    return slow;
  };

  reverse = function (B) {
    let prev = null;
    let curr = B;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };
}

let res = new Solution();

let a = [1, 2, 3, 2, 1];
a.forEach((e) => res.add(e));
console.log(res.lPalin(res.head))


let b = [1, 2, 3, 2, 2];
b.forEach((e) => res.add(e));
console.log(res.lPalin(res.head))
