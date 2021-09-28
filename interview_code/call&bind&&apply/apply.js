Function.prototype.myapply = function (thisArg, args) {
  // 传入对象是本身或者全局
  thisArg = thisArg || window;
  // 定义一个唯一key值
  const fn = Symbol('fn');
  // 把函数作为对象的某个成员值
  thisArg[fn] = this;
  //  
  let res = thisArg[fn](...args);
  delete thisArg[fn]
  return res
}