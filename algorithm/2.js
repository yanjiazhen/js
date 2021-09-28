
// 0427 截取两个数组中最大的相同字符串
function getMaxStr(str1,str2){
var max = str1.length > str2.length ? str1 : str2;
var min = (max == str1 ? str2 : str1);
for(var i = 0; i < min.length; i++){
    for(var x = 0, y = min.length - i;y != min.length + 1;x++,y++){
        //y表示所取字符串的长度
        var newStr = min.substring(x,y); // 截取x-y的字符串
        //判断max中是否包含newStr
        if(max.indexOf(newStr) != -1){
            return newStr;
        }
    }
}
    return -1;
}
getMaxStr('af123sadf', 'asdf1231')