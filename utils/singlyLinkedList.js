class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.last = null
        this.size = 0
    }

    add(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
    }

    traverse(){
        let curr = this.head
        let res = []
        while(curr){
            res.push(curr.data)
            curr = curr.next
        }
        return res
    }

    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
        return this.head
    }
}


module.exports = {
    SinglyLinkedList
}