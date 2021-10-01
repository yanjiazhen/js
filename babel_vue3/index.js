// 跟着敲一个babel插件、参考链接：https://www.bilibili.com/video/BV1X5411n7Lo?spm_id_from=333.999.0.0
module.exports = ({ types: t }) => {
    return {
        visitor: {
            // 遇到标识符就会触发该函数，其实就是便利Dom生成的AST树，使用的深度优先搜索
            // 通过参数path可以获取、修改一些信息
            Identifier(path) {
                const parentIsIf = t.isIfStatement(path.parentPath)
                const isDebug = path.node.name === "DEBUG"
                if (parentIsIf && isDebug) {
                    // 获取到节点，就可以对节点操作了，将其转换成string，即可认知到为变量
                    const stringNode = t.stringLiteral("DEBUG")
                    path.replaceWith(stringNode)
                    console.log(stringNode)
                }
            },
            StringLiteral(path) {
                const parentIsIf = t.isIfStatement(path.parentPath)
                const isDebug = path.node.name === "DEBUG"
                if (parentIsIf && isDebug) {
                    // 控制在生产环境下执行删除执行删除, 或者通过babel传参数的方式实现｜、
                    // TODO移除这一块有点小问题
                    if (process.env.NODE_ENV === "production") {
                        console.log('执行')
                        path.parentPath.remove()
                    }
                }
            }
        }
    }
}