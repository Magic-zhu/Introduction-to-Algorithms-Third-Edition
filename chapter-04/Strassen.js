

//  大前提 假定nxn的矩阵

/**
 * 初始化矩阵
 * @param {*} l - n阶矩阵
 */
function initMatrix(l){
   let r =  [];
   for(let i =0;i<l;i++){
       r.push([])
   }
   return r
}

function sliceMatrix(A,a,b){
     //代码 省略
    let n = A.length
    let matrix = []

    return matrix
}

// 加减运算
function MatrixPM(A, B, type) {
    //代码 省略
    let n = A.length
    for (let i = 0; i < n; i++) {

    }
}
// 合并矩阵
function MergeMatrix(A,B,C,D){
    let n = A.length;
    let matrix = initMatrix(2*n)
    for(let i=0;i<n;i++){
        
    }
    return matrix
}

function Strassen(A, B) { 
    if(A.length==1){
        return [A[0]*B[0]]
    }
    let n = A.length;
    let s1 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s2 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s3 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s4 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s5 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s6 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s7 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s8 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s9 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');
    let s10 = MatrixPM(sliceMatrix(B,1,2),sliceMatrix(B,2,2),'-');

    return C
}

module.exports = Strassen