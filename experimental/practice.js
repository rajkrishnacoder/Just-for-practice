class MaxBinaryHeap{
    constructor(){
        this.value = []
    }
    Insert(element){
        this.value.push(element)
        this.bubbleUP()
    }
    bubbleUP(){
        let inx = this.value.length - 1
        const element = this.value[inx]
        while(inx > 0){
            let parentInx = Math.floor((inx-1)/2)
            let parent = this.value[parentInx]
            if(element <= parent || !element) break
            this.value[parentInx] = element
            this.value[inx] = parent
            inx = parentInx
        }
    }
    extractMax(){
        const max = this.value[0]
        const end = this.value.pop()
        this.value[0] = end
        this.sinkDown()
        return max
    }
    sinkDown(){
        let inx = 0;
        const length = this.value.length
        const element = this.value[0]
        
    }
}

let heap = new MaxBinaryHeap()
heap.Insert(55)
heap.Insert(1)
heap.Insert(60)
heap.Insert(79)

console.log(heap)