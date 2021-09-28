/*
状态会跟随第一个状态改变的实例而变化，并且直接返回
*/ 
function race(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      Promise.resolve(p).then(value => {
        resolve(value)
      }, error => {
        reject(error)
      })
    })
  })
}