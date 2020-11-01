//创建状态表的函数
function createStatusMap(needle) {
    // let wordmap = 'abcdefghijklmnopqrstuvwxyz';
    let wordmap = 'abc';
    let len = needle.length;
    let wordmapLength = wordmap.length;
    let map = [];
    for (let i = 0; i < len + 1; i++) {
        let template = needle.substr(0, i); // i 状态下已存在字符
        map.push([]);
        for (let j = 0; j < wordmapLength; j++) { //遍历输入下一个字符
            let status = i;
            let output = template + wordmap[j]  //组成新字符串
            let k = template.length;
            for (let q = 0; q < k + 1; q++) { //循环匹配 output的后缀 和 needle的前缀 改变成相应的状态
                    if (output.substring(q, k + 2) == needle.substring(0, k + 1 - q)) {
                        status = i + 1 - q;
                        break
                    }else{
                        status = 0
                    }
            }
            map[i][j] = status; //输出到map表
        }
    }
    return map
}
console.log(createStatusMap('ababaca'))
