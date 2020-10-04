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
        if(this.isEmpty()){
            this.first = newNode
            this.last = newNode
        }else {
            let tmp = this.last
            this.last = newNode
            this.last.next = tmp
        }
        return ++this.size
    }

    pop(){
        if(this.isEmpty()) return null
        if(this.first === this.last){
            this.first = null
        }
        let tmp = this.last
        this.last = this.last.next
        this.size--
        return tmp.val
    }

    peek(){
        if(this.isEmpty()) return null
        return this.last.val
    }

    traverse(){
        let curr = this.last
        let res = []
        while(curr){
            res.push(curr.val)
            curr = curr.next
        }
        return res.reverse()
    }

    isEmpty(){
        return this.size > 0 ? false : true
    }
}

module.exports = {
    Stack
}