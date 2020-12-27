// Problem link https://www.interviewbit.com/problems/merge-two-sorted-lists/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList{
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


let a = [5, 8, 20]
let listA = new SinglyLinkedList()
a.forEach(e=>listA.add(e))

let b = [4, 11, 15]
let listB = new SinglyLinkedList()
b.forEach(e=>listB.add(e))

let res = new Solution() 
console.log(JSON.stringify(res.mergeTwoLists(listA.head, listB.head)))
