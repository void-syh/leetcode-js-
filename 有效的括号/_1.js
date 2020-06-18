var isValid = function(s) {
	let stark = [];
	for(let i = 0;i<s.length;i++){
		console.log(stark);
		if(s[i]==='('||s[i]==='{'||s[i]==='[')
		stark.push(s[i]);
		else if(s[i]===')')
		{
			if(stark[stark.length-1]==='(') 
			stark.pop();
			else return false;
		}
		else if(s[i]===']')
		{
			if(stark[stark.length-1]==='[') 
			stark.pop();
			else return false;
		}
		else if(s[i]==='}')
		{
			if(stark[stark.length-1]==='{') 
			stark.pop();
			else return false;
		}
	}
	if(stark.length) return false;
	else return true;
};
let s1 = "([)]";
let s2 = "{[]}";
console.log(isValid(s1),isValid(s2));