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
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    get(key){
        if(!key) return undefined
        let index = this._Hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined   
    }
    key(){
        let keyArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keyArr.includes(this.keyMap[i][j][0])){
                        keyArr.push(this.keyMap[i][j][0])
                    }
                    
                }
            }
        }
        return keyArr
    }
    value(){
        let keyArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keyArr.includes(this.keyMap[i][j][1])){
                        keyArr.push(this.keyMap[i][j][1])
                    }
                    
                }
            }
        }
        return keyArr
    }
}


let str = new HashTables()
str.set("ra", "rajkrishna")
str.set("ram", "eky")
str.set("ram", "eky")
console.log(str.value())
