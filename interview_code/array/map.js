// map 是根据回掉函数映射一个新数组

Array.prototype.map = function (fn) {
    const result = [];
    for(let i = 0; i< this.length; i++){
        if(!this.hasOwnProperty(i)){
            continue
        }
        result.push(fn(this[i],i,this))
    }
    return result
}

const arr = [1, 3, 6 ,5]
const mapArr = arr.map(item=>item*2)
console.log(mapArr)