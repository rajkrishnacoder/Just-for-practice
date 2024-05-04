class Node{
    constructor(val, next){
        this.val = val
        this.next = next
    }
}

// this is a helper class for ower singly linked lists

class SinglyLinkedLists{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val, null)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = this.tail.next
        }
        this.length++
        return this
    }
    pop(){
        let current = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = current
            for(let i = 0; i < this.length-1; i++){
                prev = current
                current = current.next
            } 
            this.tail = prev
            this.tail.next = null 
        }
        this.length--
        return current
    }
    shift(){
       if(!this.head) return undefined
       let currentHead = this.head
       this.head = currentHead.next
       if(this.length === 1){
        this.tail = null
       }
       this.length--
       return currentHead
    }
    unshift(val){
        let newNode = new Node(val, null)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return false
        let current = this.head
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current
    }
    set(index, val){
        if(index < 0 || index >= this.length) return false
        let changingIndex = this.get(index)
        changingIndex.val = val
        return true
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)
        let newNode = new Node(val, null)
        let prev = this.get(index-1)
        let cur = prev.next
        prev.next = newNode
        newNode.next = cur
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return !!this.shift()
        if(index === this.length-1) return !!this.pop()
        let prev = this.get(index-1)
        let cur = prev.next
        prev.next = cur.next
        this.length--
        return cur
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node 

        let next;
        let prev = null
        for (let i = 0; i < this.length; i++){
            next = node 
            node = node.next
            next.next = prev
            prev = next
        }
        return this
    }
}

let list = new SinglyLinkedLists()

list.push(1);
list.push(2);

list.reverse()
console.log(list)