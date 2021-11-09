const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log('有人请求服务器')
    next()
})
app.get('/students', (req, res) => {
    const students = [
        { id: '001', name: 'yan', age: 20 },
        { id: '002', name: 'jia', age: 21 }
    ]
    res.send(students)
})
app.listen(5000, (err) => {
    if (!err) {
        console.log('服务器启动成功，请求学生地址是http://localhost:5000/students')
    }
})