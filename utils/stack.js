class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else {
            let tmp = this.first
            this.first = newNode
            this.first.next = tmp
        }
        return ++this.size
    }

    pop(){
        if(!this.first) return null
        let tmp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return tmp.val
    }

    peek(){
        if(!this.first) return null
        return this.first.val
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
}

module.exports = {
    Stack
}