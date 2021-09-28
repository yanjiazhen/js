function myNew(func, ...args) {
  let obj = {};
  obj.__proto__ = func.prototype;
  let res = func.apply(obj, ...args);
  return Object.prototype.toString.call(obj) === "[object,object]" ? res : obj;
}

let fun = new Function();
console.log(fun.__proto__.__proto__.__proto__);
let number = new Number();
console.log("number about__________", number.__proto__);
