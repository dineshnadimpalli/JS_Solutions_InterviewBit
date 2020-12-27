// Problem link https://www.interviewbit.com/problems/partition-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  partition = function (A, B) {
    let smallerHead = new Node(0);
    let small = smallerHead;
    let largerHead = new Node(0);
    let large = largerHead;

    while (A) {
      if (A.data < B) {
        small.next = A;
        small = small.next;
      } else {
        large.next = A;
        large = large.next;
      }
      A = A.next;
    }

    small.next = largerHead.next;
    large.next = null;
    return smallerHead.next;
  };
}

let res = new Solution();

let a = [1, 4, 3, 2, 5, 2],
  b = 3;

a.forEach((e) => res.add(e));

res.partition(res.head, b);

console.log(res.traverse());
