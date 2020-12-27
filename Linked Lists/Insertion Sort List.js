// Problem link https://www.interviewbit.com/problems/insertion-sort-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
  insertionSortList = function (A) {
    let sorted = null;
    let curr = A;
    while (curr) {
      let next = curr.next;
      let node = curr;
      if (sorted == null || sorted.data >= node.data) {
        node.next = sorted;
        sorted = node;
      } else {
        let curr = sorted;
        while (curr.next && curr.next.data < node.data) {
          curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
      }
      curr = next;
    }
    return sorted;
  };
}

let res = new Solution();

let a = [1, 4, 3, 2, 5, 2],
  b = 3;

a.forEach((e) => res.add(e));

res.insertionSortList(res.head);

console.log(res.traverse());
