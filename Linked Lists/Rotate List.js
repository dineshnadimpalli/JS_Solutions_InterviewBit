// Problem link https://www.interviewbit.com/problems/rotate-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  rotateRight(A, B) {
    let partA = A;
    let size = 0;
    let res;
    while (partA) {
      partA = partA.next;
      size++;
    }
    partA = A;
    B = B % size;
    if (B > 0) {
      for (let i = 1; i < size - B; i++) {
        partA = partA.next;
      }
      let partB = partA.next;
      let tmp = partB;
      // console.log(partB)
      // console.log(tmp)
      partA.next = null;
      while (tmp && tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = A;
      res = partB;
    } else {
      res = A;
    }
    return res;
  }
}

let res = new Solution();

let a = [1, 2, 3, 4, 5, 6],
  b = 2;
a.forEach((e) => res.add(e));

console.log(res.rotateRight(res.head, b));
