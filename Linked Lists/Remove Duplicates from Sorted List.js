// Problem link https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
  deleteDuplicates = function (A) {
    let curr = A;

    while (curr && curr.next) {
      if (curr.data == curr.next.data) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return A;
  };
}

let res = new Solution();

let a = [1, 2, 2, 3, 3];
a.forEach((e) => res.add(e));
console.log(res.deleteDuplicates(res.head));
