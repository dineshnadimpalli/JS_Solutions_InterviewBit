// Problem link https://www.interviewbit.com/problems/add-two-numbers-as-lists/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  addTwoNumbers = function (A, B) {
    let carry = 0;
    let head = new Node(0);
    let t = head;
    while (A || B) {
      let total = (A ? A.data : 0) + (B ? B.data : 0) + carry;
    //   console.log(A.data, B.data, carry)
      carry = Math.floor(total / 10);
      t.next = new Node(total % 10);
      if (A) {
        A = A.next;
      }
      if (B) {
        B = B.next;
      }
      t = t.next;
    }

    if (carry > 0) {
      t.next = new Node(carry);
    }

    return head.next;
  };
}

let res = new Solution();

let a = [2, 4, 3];
let listA = new SinglyLinkedList();
a.forEach((e) => listA.add(e));

let b = [5, 6, 4];
let listB = new SinglyLinkedList();
b.forEach((e) => listB.add(e));

// console.log(listA, listB)

console.log(res.addTwoNumbers(listA.head, listB.head));
