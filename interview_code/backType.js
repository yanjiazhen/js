// 封装Object.prototype.toString.call返回js数据类型

function backType(data) {
    let newStr = Object.prototype.toString.call(data)
    // "[object Null]"
    //    console.log(newStr.replace(/^"\[object\s(.*?)\]"$/g, "").toLowerCase())
    let type = newStr.match(/\s+(\w+)/)[1]
    return (typeof data === "object") ? type : type.toLowerCase()
}