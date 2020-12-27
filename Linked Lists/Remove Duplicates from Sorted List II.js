// Problem link https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list-ii/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  deleteDuplicates = function (A) {
    let dummy = new Node(0);
    dummy.next = A;
    let prev = dummy;
    let curr = A;
    while (curr != null) {
      while (prev.next && curr.next && prev.next.data == curr.next.data) {
        curr = curr.next;
      }

      if (prev.next == curr) {
        prev = prev.next;
      } else {
        prev.next = curr.next;
      }
      curr = curr.next;
    }

    A = dummy.next;
    // console.log(dummy.next)
    return A;
  };
}

let res = new Solution();

let a = [1, 2, 2, 3, 3, 4];
a.forEach((e) => res.add(e));
console.log(res.deleteDuplicates(res.head));
