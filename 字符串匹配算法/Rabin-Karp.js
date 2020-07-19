var strStr = function(haystack, needle) {
	const Q = 101;//素数
	const D = 256;//基数
	const N = haystack.length;
	const M = needle.length;
	let hashHaystackt = 0; //初始化
	let hashNeedle = 0;
	let h = 1; 
	for (let i = 0; i < (M - 1); i++) {
  		h = (h * D) % Q;
	} //计算 d的m-1次方 mod q的值
	
	for (let i = 0; i < M; i++) {
	  hashNeedle = (D * hashNeedle + needle[i].charCodeAt(0)) % Q;
	  hashHaystackt = (D * hashHaystackt + haystack[i].charCodeAt(0)) % Q;
	}	
	for (let i = 0; i <= N - M; i++) {
	  if (hashNeedle === hashHaystackt ) {
	  	//还要在全等判断一下
	  	if(hashHaystackt.substr(i,i+M)===hashNeedle){
	  		return i
	  	}
	  }
	} 
  if (i < N - M) { //计算下一个hashHaystackt
    hashHaystackt = (D * (hashHaystackt- haystack[i].charCodeAt(0) * h) + haystack[i + M].charCodeAt(0)) % Q;
    if (hashHaystackt< 0) {
      hashHaystackt+= Q;
    }
  }
};
