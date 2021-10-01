/* 测试文件，用来测试babel插件*/
// 如何通过API的方式去跑插件，使用插件@babel/core
const { transformAsync } = require('@babel/core')
const code = `
    console.log('yan') 
    if(DEBUG) {
        // 1、在dev环境下执行、2、到了prod环境下代码会被移除
        const a = 6;
        const b = 7;
        console.log(a + b)
    }
`
const babelConfig = {
    filename:'index.js',
    plugins: ['./index.js']
}
 
// babel.transform(code, { filename: 'file.ts', presets: [/* your preset */] })
// transformAsync传入两个参数，code和pluging插件
const output = transformAsync(code, babelConfig)
console.log(output)