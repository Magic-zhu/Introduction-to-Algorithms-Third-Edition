var Huffman  = require('../chapter-16/Huffman') 
var input = [
    { key: 'f', freq: 5 },
    { key: 'e', freq: 9 },
    { key: 'c', freq: 12 },
    { key: 'b', freq: 13 },
    { key: 'd', freq: 16 },
    { key: 'a', freq: 45 }
]

test('哈夫曼编码',()=>{
    expect(Huffman(input).a).toBe('0')
    expect(Huffman(input).c).toBe('100')
})