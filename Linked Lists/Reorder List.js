// Problem link https://www.interviewbit.com/problems/reorder-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
  reorderList = function (A) {
    let slow = A;
    let fast = A;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let rev = slow.next;
    rev = this.reverseList(rev);
    slow.next = null;
    // console.log(A, rev)
    let first = A;
    let last = rev;
    while (first && last) {
      let nextFirst = first.next;
      let nextLast = last.next;
      first.next = last;
      last.next = nextFirst;
      first = nextFirst;
      last = nextLast;
    }

    return A;
  };

  reverseList = function (A) {
    let prev = null;
    let curr = A;
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

let a = [1, 2, 3, 4, 5, 6]
a.forEach((e) => res.add(e));

res.reorderList(res.head);
console.log(res.traverse());
