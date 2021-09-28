/*
数组扁平化
*/ 

function flatten(arr) {
    return arr.reduce((result, item) => {
      return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
