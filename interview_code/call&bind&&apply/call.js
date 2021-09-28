Function.prototype.mycall = function (thisArg, ...args) {
  const fn = Symbol('fn');
  thisArg = thisArg || window;
  thisArg[fn] = this
  let res = thisArg[fn](...args);
  delete thisArg[fn];
  return res
}