// Problem link https://www.interviewbit.com/problems/even-reverse/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  solve(A) {
    let even = new Node(0);
    let head = even;
    let curr = A;
    let count = 1;
    while (curr) {
      if (count % 2 == 0) {
        head.next = new Node(curr.data);
        head = head.next;
      }
      count++;
      curr = curr.next;
    }
    head.next = null;
    even = even.next;
    even = this.reverse(even);
    curr = A;
    // console.log(even, A);
    while(curr && curr.next && even){
        let nextCurr = curr.next
        let nextEven = even.next
        curr.next = even
        even.next = nextCurr.next
        curr = nextCurr.next
        even = nextEven
    }

    return A;
  }

  reverse(A) {
    let prev = null;
    let curr = A;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

let res = new Solution();

let a = [1, 2, 3, 4, 5, 6];
a.forEach((e) => res.add(e));

res.solve(res.head);
console.log(res.traverse());
