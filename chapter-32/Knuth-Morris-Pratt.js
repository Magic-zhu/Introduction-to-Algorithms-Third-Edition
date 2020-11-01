//核心就在于创建这张表
function createMap(pattern) {
    let len = pattern.length;
    let map = [...Array(len)].map(() => 0); //初始化map；
    let q = 1; //指针
    let k = 0; //指针
    for (; q < pattern.length; q++) {
        while (k > 0 && pattern[q] !== pattern[k]) { 
            k = map[k - 1];
        }
        if (pattern[q] === pattern[k]) {//相等最长公共+1
            k++;
        }
        map[q] = k;
    }
    return map
}
