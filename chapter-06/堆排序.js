/**
 * 时间复杂度 平均：O(nlog2n)。
 * 空间复杂度：O(1)。
 * 稳定性：不稳定
 */
var array = [];
var int = 0;
for (var i = 0; i < 9; i++) {
	int = Math.ceil(Math.random() * 10);
	array.push(int);
}
console.log(array);
//不稳定排序

function HeapSort(arr) {
	var len = arr.length;
	BuildMaxHeap(arr,len);
	for (var i = len-1 ; i > 0; i--) {
		let box = arr[0];
		arr[0] = arr[i];
		arr[i] = box;
		MaxHeap(arr,0,i);
	}
	return arr
}

function MaxHeap(arr,i,length) {
	var largest = null;
	var node = arr[i]; //保存当前节点
	var left = i * 2 + 1 ; //定位节点左
	var right = i * 2 + 2; //定位节点右	
	//判断当前有这个节点 （这里会存在当前这个的子节点不存在的情况）处理一下边界情况
	if (left < length && node < arr[left]) {
		largest = left
	}else{
		largest = i;
	}
	if (right < length && arr[largest] < arr[right]) {
		largest = right
	}
	//如果不是i是最大节点 以node作为辅助节点 交换位置
	if (largest != i) {
		arr[i] = arr[largest];
		arr[largest] = node;
		MaxHeap(arr,largest,length);
	}
}
//建立一个最大堆
function BuildMaxHeap(arr,len){
	if(len%2!=0){
		len = len +1 ;
	}
	for(let i = len/2;i>=0;i--){
		MaxHeap(arr,i,len)
	}
}
console.log(HeapSort(array));