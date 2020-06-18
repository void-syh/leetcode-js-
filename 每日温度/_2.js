var dailyTemperatures = function(T) {
	let arr = new Array(T.length).fill(0);
	let stack = new Array();
	for(let i = 0;i<T.length;i++){
		while(stack.length&&T[stack[stack.length-1]]<T[i]){
			arr[stack[stack.length-1]]=i-stack[stack.length-1];
			stack.pop();
		}
		stack.push(i);
	}
	return arr;
};
let T = new Array(73, 74, 75, 71, 69, 72, 76, 73);
console.log(dailyTemperatures(T));