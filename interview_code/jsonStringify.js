/* 处理简单的对象转字符串
    1、分辨类型，赋值
    2、便利对象，拼接字符串
    3、key用双引号封装，value判断是否还有子集有同样再封装，字符串用
*/
let str = "";
function objToStr(obj) {
  if (typeof obj === "undefined") {
    str += undefined;
  } else if (typeof obj === "number") {
    str += obj;
  } else if (typeof obj === "string") {
    str += `"${obj}"`;
  } else if (typeof obj === "object") {
    if (obj === null) {
      str += null;
    }
    if (Array.isArray(obj)) {
      str += `[`;
      for (let i in obj) {
        if (typeof obj[i] === "object") {
          objToStr(obj[i]);
        } else {
          str += `${typeof obj[i] === "number" ? obj[i] : '"' + obj[i] + '"'}`;
          if (i < obj.length - 1) {
            str += `,`;
          }
        }
      }
      str += `]`;
    } else {
      str += `{`;
      for (let i in obj) {
        if (typeof obj[i] === "object") {
          str += `"${i}":`;
          objToStr(obj[i]);
        } else {
          str += `"${i}":${
            typeof obj[i] === "number" ? obj[i] : '"' + obj[i] + '"'
          }`;
        }
      }
      str += `}`;
    }
  }
  return str;
}

console.log(
  objToStr(undefined),
  //   objToStr(["123", 123, { aa: "bb" }]),
  //   objToStr(["123", 123]),
  //   objToStr(123),
  //   objToStr("123"),
  //   objToStr({ aa: [123, { aa: 123 }] }),
  //   JSON.stringify(["123", 123])
  //   JSON.stringify(123)
  //   JSON.stringify("123")
  //   JSON.stringify({ aa: [123, { aa: 123 }] })
  JSON.stringify(null)
  //   JSON.stringify(["123", 123, { aa: "bb" }])
);
