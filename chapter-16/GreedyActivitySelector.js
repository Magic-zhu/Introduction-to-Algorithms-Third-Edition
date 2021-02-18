function GreedyActivitySelector(s, f) {
    if (s.length != f.length) {
        return null
    }
    let n = s.length
    let A = [0]
    let end = f[0]
    for (let i = 1; i < n; i++) {
        if (s[i] >= end) {
            A.push(i)
            end = f[i]
        }
    }
    return A
}
module.exports = GreedyActivitySelector
