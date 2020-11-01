/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    let l = haystack.length;
    let n = needle.length;
    for (let i = 0; i < l - n + 1; i++) {
      if (haystack.substring(i, i + n) === needle) {
        return i;
      }
    }
    return -1;
};
