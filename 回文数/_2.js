var isPalindrome = function(x) {
	if(x<0) return false
	let m=x;
	let res = 0;
	while(m){
		res=res*10+m%10;
		m=parseInt(m/10);
	}
	if(res==x) return true;
	else return false;
};
let x = -121;
console.log(isPalindrome(x));