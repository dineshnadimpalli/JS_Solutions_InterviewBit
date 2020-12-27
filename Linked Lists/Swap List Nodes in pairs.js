// Problem link https://www.interviewbit.com/problems/swap-list-nodes-in-pairs/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  swapPairs(A) {
    let curr = A;
    let head = null;
    let prev = new Node(0);
    while (curr && curr.next) {
      let tmp = curr.next.next;
      let next = curr.next;
      if (head == null) {
        head = next;
      }
      next.next = curr;
      curr.next = tmp;
      prev.next = next;
      prev = curr;
      curr = curr.next;
    }
    if (head) {
      return head;
    } else {
      return A;
    }
  }
}

let res = new Solution();

let a = [1, 2, 3, 4, 5, 6];
a.forEach((e) => res.add(e));

console.log(res.swapPairs(res.head))
