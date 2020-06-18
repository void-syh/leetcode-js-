var reverse = function(x) {
	let res = 0;
	while(x!==0){
		res=res*10+x%10;
		x = parseInt(x/10);
	}
	if(res>2147483647||res<-2147483648) return 0;
	else return res;
};
let x = -123;
console.log(reverse(x));
