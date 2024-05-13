class HashTables{
    constructor(size=17){
        this.keyMap = new Array(size)
    }
    _Hash(value){
        let total = 0
        let primeNumber = 31
        for(let i = 0; i < Math.min(value.length, 100); i++){
            let char = value.charCodeAt(i) - 96
            total = (total * primeNumber + char) % this.keyMap.length
        }
        return total
    }
    set(key, value){
        let index = this._Hash(key)
        console.log(index)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    get(key){
        
    }
}


let str = new HashTables()
str.set("ra", "rajkrishna")
str.set("ram", "eky")
console.log(str)
