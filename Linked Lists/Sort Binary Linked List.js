// Problem link https://www.interviewbit.com/problems/sort-binary-linked-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList{
  solve(A) {
    if (A == null || A.next == null) {
      return A;
    }
    let slow = A;
    let fast = A;
    let temp = A;
    while (fast && fast.next) {
      temp = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    // console.log(slow, fast, temp, A)
    temp.next = null;
    let left = this.solve(A);
    let right = this.solve(slow);

    return this.mergeTwoLists(left, right);
  };

  mergeTwoLists(A, B) {
    let curr = new Node(0);
    let res = curr;
    while (A && B) {
      if (A.data > B.data) {
        curr.next = B;
        B = B.next;
      } else {
        curr.next = A;
        A = A.next;
      }
      curr = curr.next;
    }
    if (A) {
      curr.next = A;
    }
    if (B) {
      curr.next = B;
    }
    return res.next;
  };
}


let res = new Solution()

let a = [0, 0, 1, 1, 0]

a.forEach(e=>res.add(e))

res.solve(res.head)

console.log(res.traverse())