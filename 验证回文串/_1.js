var isPalindrome = function(s) {
	s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
	let m = s.split('').reverse().join('');
	return m==s?true:false;
};
let s ="0p";
console.log(isPalindrome(s));