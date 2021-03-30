var input = [{ key: 'f', freq: 5 }, { key: 'e', freq: 9 }, { key: 'c', freq: 12 }, { key: 'b', freq: 13 }, { key: 'd', freq: 16 }, { key: 'a', freq: 45 }]
const format = (input) => {
    return input.map((e) => {
        e.priority = e.freq
        return e
    })
}
var MinPriorityQueue = require('../chapter-06/MinPriorityQueue')

function merge() {

}

function Huffman(c) {
    let n = c.length;
    let Q = new MinPriorityQueue(c);
    let tree  = [];
    for (let i = 0; i < n - 1; i++) {
        let z = { key: '', freq: 0, priority: 0, }
        let x = Q.extractMin()
        let y = Q.extractMin()
        z.priority = x.priority + y.priority
        z.freq = x.freq + y.freq
        Q.insert(z)
    }
}

console.log(Huffman(format(input)))

module.exports = Huffman
