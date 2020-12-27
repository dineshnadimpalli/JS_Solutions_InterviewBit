// Problem link https://www.interviewbit.com/problems/kth-node-from-middle/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

class Solution extends SinglyLinkedList {
    solve = function(A, B){
        let head = A
        let slow = A
        let fast = A
        let count = 0
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            ++count
        }
        let req = count-B
        if(req<0){
            return -1
        }
        while(req-->0){
            head = head.next
        }
        return head.data
    }
}

let res = new Solution();

let a = [1, 14, 6, 16, 4, 10],
  b = 2;
a.forEach((e) => res.add(e));
console.log(res.solve(res.head, b))

