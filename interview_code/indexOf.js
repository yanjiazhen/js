// 实现indexOf

function indexFun(array, val) {
    if (!Array.isArray(array)) return;
  
    let length = array.length;
  
    for (let i = 0; i < length; i++) {
      if (array[i] === val) {
        return i;
      }
    }
  
    return -1;
  }   