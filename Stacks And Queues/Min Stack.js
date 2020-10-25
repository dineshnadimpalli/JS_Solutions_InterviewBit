// Problem link https://www.interviewbit.com/problems/min-stack/

// Currently the problem is not available for Javascript but the below code will work for all the test cases

class Node {
    constructor(val, min){
        this.val = val
        this.min = min
        this.next = null
    }
}

class Solution {
    constructor(){
        this.first = null
        this.size = 0
    }

    push(val){
        let node
        if(this.isEmpty()){
            node = new Node(val, val)
        }else{
            node = new Node(val, Math.min(val, this.first.min))
            node.next = this.first
        }
        this.first = node
        this.size++
        return this.size
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        let node = this.first
        this.first = this.first.next
        this.size--
        return node.val
    }

    top(){
        if(this.isEmpty()){
            return null
        }
        return this.first.val
    }

    getMin(){
        if(this.isEmpty()){
            return -1
        }
        return this.first.min
    }

    traverse(){
        let curr = this.first
        let res = []
        while(curr){
            res.push(curr.val)
            curr = curr.next
        }
        return res.reverse()
    }

    isEmpty(){
        return this.size==0 ? true : false
    }
}


let res = new Solution()
let A = [3, 2, 7, 1, 10]

A.forEach(d=>res.push(d))

console.log(res.traverse())
console.log(res.getMin())   // 1

res.pop()
console.log(res.traverse())
console.log(res.getMin())   // 1

res.pop()
console.log(res.traverse())
console.log(res.getMin())   // 2

res.pop()
console.log(res.traverse())
console.log(res.getMin())   // 2

res.pop()
console.log(res.traverse())
console.log(res.getMin())   // 3


// For JAVA solution please refer to the below code


// class Solution {
//     // Constructor 
//     class Node {
//         int val, min;
//         Node next;
        
//         Node(int val, int min){
//             this.val = val;
//             this.min = min;
//             this.next = null;
//         }
//     }
    
//     Node head;
    
//     public void push(int x) {
//         Node node;
//        if(head==null){
//             node = new Node(x, x);
//        }else{
//             node = new Node(x, Math.min(x, head.min));
//             node.next = head;
//        }
//        head = node;
//     }

//     public void pop() {
//         if(head != null){
//             head = head.next;
//         }
//     }
 
//     public int top() {
//         if(head == null){
//             return -1;
//         }
//         return head.val;
//     }
 
//     public int getMin() {
//         if(head == null){
//             return -1;
//         }
//         return head.min;
//     }
// }