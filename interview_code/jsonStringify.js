// TODO还未完整实现

function format(val) {
    // TODO
    if (typeof val === "object") {
        deepObj(val)
    } else if (typeof val === "string") {
        return `"${val}"`
    } else if (typeof val === "number") {
        return val.toString()
    }
}
// JSON.stringify(obj)
//"{\"aa\":{\"bb\":\"1231\"}}"
// 递归便利

function toNum(val){
    if (typeof val === "string") {
      return `"${val}"`
    }else if (typeof val === "number") {
      return val.toString()
    }
}

function deepObj(obj) {
    newObj = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === "object") {
        for(let key in obj) {
            if (obj[key] && typeof obj[key] === "object") {
                newObj = deepObj(obj[key])
            } else {
                newObj[key] = obj[key]
                // 便利赋值
                if (Array.isArray(obj)) {
                    newObj += toNum(obj[key])
                } else {
                    newObj[key] = `"{\"${key}\":\"obj[key]\"}"`
                }
            }
        }
    }
    return newObj
}
format([12,324])