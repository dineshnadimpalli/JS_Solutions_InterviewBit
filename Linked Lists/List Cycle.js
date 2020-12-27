// Problem link https://www.interviewbit.com/problems/list-cycle/

const { SinglyLinkedList } = require("../utils/singlyLinkedList");

// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

class Solution extends SinglyLinkedList {
  detectCycle = function (A) {
    let slow = A;
    let fast = A;
    let cycleFound = false;
    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        cycleFound = true;
        break;
      }
    }
    if (!cycleFound) {
      return null;
    }
    slow = A;
    while (slow != fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  };
}

let res = new Solution();

let node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);

let circle = node.next.next;

node.next.next.next = new Node(4);
node.next.next.next.next = circle;

// console.log(node);
console.log(res.detectCycle(node));




// Java solution logic for those who want to solve it in JAVA

// public class Solution {
//     public ListNode detectCycle(ListNode a) {
//         ListNode slow = a;
//         ListNode fast = a;
//         boolean cycleFound = false;
//         while(slow!=null && fast!=null && fast.next!=null){
//             slow = slow.next;
//             fast = fast.next.next;
//             if(slow==fast){
//                 cycleFound = true;
//                 break;
//             }
//         }
//         if (!cycleFound) {
//           return null;
//         }
//         slow = a;
//         while (slow != fast) {
//           slow = slow.next;
//           fast = fast.next;
//         }
//         return slow;
//     }
// }
