// Problem link https://www.interviewbit.com/problems/reverse-link-list-ii/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
  reverseBetween = function (A, B, C) {
    let size = 0;
    let curr = A;
    while (curr) {
      curr = curr.next;
      size++;
    }
    if (B == 1 && C == size) {
      A = this.reverse(A, B, C);
    } else if (B == 1) {
      let curr = A;
      for (let i = 1; i < C; i++) {
        curr = curr.next;
      }
      // console.log(curr)
      let last = curr.next;
      let first = this.reverse(A, B, C);
      A = first;
      while (first && first.next) {
        first = first.next;
      }
      first.next = last;
    } else if (C == size) {
      let curr = A;
      for (let i = 1; i < B - 1; i++) {
        curr = curr.next;
      }
      let first = curr;
      let last = this.reverse(curr.next, B, C);
      first.next = last;
    } else {
      let curr = A;
      let i;
      for (i = 1; i < B - 1; i++) {
        curr = curr.next;
      }
      let first = curr;

      let middle = curr.next;
      while (i++ < C) {
        curr = curr.next;
      }
      let last = curr.next;
      middle = this.reverse(middle, B, C);
      first.next = middle;

      while (middle && middle.next) {
        middle = middle.next;
      }
      middle.next = last;
    }
    return A;
  };

  reverse = function (A, B, C) {
    let count = 0;
    let prev = null;
    let curr = A;
    while (curr && count <= C - B) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      count++;
    }
    // console.log(prev, count)
    return prev;
  };
}

let res = new Solution();

let a = [1, 2, 3, 4, 5],
  b = 2, c = 4
a.forEach((e) => res.add(e));

res.reverseBetween(res.head, b, c)
console.log(res.traverse())