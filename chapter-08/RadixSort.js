function createZero(num, targetLength) {
    let t = targetLength - num.toString().length
    let str = ''
    while (t > 0) {
        t--;
        str += '0'
    }
    return str + num.toString()
}

function RadixSort(arr) {
    let len = arr.length
    let max = Math.max.apply(null, arr)
    const targetLength = max.toString().length
    let strArr = arr.map(t => createZero(t,targetLength))
    let map = {}
    for (let j = targetLength - 1; j >= 0; j--) {
        for (let i = 0; i < len; i++) {
            map[Number(strArr[i][j])] ? map[Number(strArr[i][j])].push(strArr[i]) : map[Number(strArr[i][j])] = [strArr[i]]
        }
        let temp = [];
        for (let q = 0; q < 10; q++) {
            temp = map[q] ? temp.concat(map[q]) : temp
        }
        map = []
        strArr = temp
    }
    let result = strArr.map(s => Number(s))
    return result
}

module.exports = RadixSort