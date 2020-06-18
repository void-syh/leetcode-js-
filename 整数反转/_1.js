var reverse = function(x) {
	let arr = x.toString().split('').reverse();
	if(arr[arr.length-1]=='-')
	return parseInt('-'+arr.slice(0,arr.length-1).join(''))>-2147483648?parseInt('-'+arr.slice(0,arr.length-1).join('')):0;
	else 
	return parseInt(arr.join(''))<2147483647?parseInt(arr.join('')):0;
};
let x = 1534236469;
console.log(reverse(x));