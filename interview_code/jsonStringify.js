/* 对象转字符串
### 思路：
* 判断字符类型，简单类型赋值
* 便利对象，拼接字符串，需要注意‘逗号’以及一些特殊值的处理
* key用双引号封装，value判断是否还有子集有同样再封装，字符串用

### 实现：
* 实现基本类型的处理包括 "number", "string", "undefined", "null", "boolean"
* 实现复杂类型的处理包括 "function", "array", "object"

### 特殊处理：
* 类型是function 解析为 undefined
* 数组遇到undefined和function类型的解析为null,
* 对象遇到vaule值是undefined或者类型是functioned，则不解析这一对key-value值
*/

let str = "";
function objToStr(obj) {
  let simple = "";
  /*简单值处理
  param ：需要转化的值
  type：转化值的类型
  */
  function baseFunction(param, type = "base") {
    if (typeof param === "undefined") {
      simple = type === "arr" ? null : undefined;
    } else if (typeof param === "number") {
      simple = param;
    } else if (typeof param === "string") {
      simple = `"${param}"`;
    } else if (typeof param === "function") {
      simple = type === "arr" ? null : `undefined`;
    } else if (typeof param === "boolean") {
      simple = `'${param}'`;
    }
    return simple;
  }
  const type = ["number", "string", "undefined", "function", "boolean"];
  if (type.includes(typeof obj)) {
    baseFunction(obj);
  } else if (typeof obj === "object") {
    if (obj === null) {
      str += null;
    } else if (Array.isArray(obj)) {
      str += `[`;
      for (let i in obj) {
        if (typeof obj[i] === "object") {
          objToStr(obj[i]);
        } else {
          str += baseFunction(obj[i], "arr");
        }
        // 处理逗号
        i < obj.length - 1 && (str += `,`);
      }
      str += `]`;
    } else {
      str += `{`;
      for (let i in obj) {
        if (typeof obj[i] === "object") {
          str += `"${i}":`;
          objToStr(obj[i]);
        } else {
          obj[i] !== undefined &&
            typeof obj[i] !== "function" &&
            (str += `"${i}":${baseFunction(obj[i], "obj")}`);
        }
        // 处理逗号
        let arr = Object.keys(obj);
        i !== arr[arr.length - 1] &&
          obj[i] !== undefined &&
          typeof obj[i] !== "function" &&
          (str += `,`);
      }
      str += `}`;
    }
  }

  return str || simple;
}
// objToStr(["aa",{aa:function(){console.log(1)},bb:1}]);
objToStr(["aa",function () {console.log(1);},{ bb: 1 },]);

objToStr(undefined);

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
