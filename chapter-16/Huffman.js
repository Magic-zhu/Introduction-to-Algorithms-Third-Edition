
const format = (input) => {
    return input.map((e) => {
        e.priority = e.freq
        return e
    })
}
var MinPriorityQueue = require('../chapter-06/MinPriorityQueue')

function HuffmanTree(c) {
    let n = c.length;
    let Q = new MinPriorityQueue(c);
    for (let i = 0; i < n - 1; i++) {
        let z = { key: '', freq: 0, priority: 0, }
        let x = Q.extractMin()
        let y = Q.extractMin()
        z.priority = x.priority + y.priority
        z.freq = x.freq + y.freq
        z.key = z.freq
        z.left = x
        z.right = y
        Q.insert(z)
    }
    return Q.queue[0]
}

function PrintHuffman(Node) {
    let codeMap = new Map()
    let code = ''
    const find = (node, codeMap, code) => {
        let pass_code_left = code
        let pass_code_right = code
        let IS_NUMBER = /^[0-9]*$/
        if (IS_NUMBER.test(node.key)) {
            if (node.left) {
                pass_code_left = pass_code_left + '0'
                find(node.left, codeMap, pass_code_left)
            }
            if (node.right) {
                pass_code_right = pass_code_right + '1'
                find(node.right, codeMap, pass_code_right)
            }
        } else {
            codeMap[node.key] = code
        }
    }
    find(Node, codeMap, code)
    return codeMap
}

function Huffman(input){
    return PrintHuffman(HuffmanTree(format(input)))
}

module.exports = Huffman
