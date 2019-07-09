//1st attempt: cannot revert numbers if 1st number startsWith(0);
function descendingOrder(input){
  numtostr = input.toString();
  strtonum = Number(numtostr);
	numtostr.split("").reverse().join("");
  return strtonum;
}

console.log(descendingOrder(32243));

//2nd attempt: creating variable reverse and then changing its type to number
function descendingOrder(input){
  const reverse = input.toString().split('').sort((a,b) => a-b).reverse().join('');
  return parseInt(reverse);
}
console.log(descendingOrder(002));


//3rd attempt shorter form of 2nd. "=> stands for function" 
function descendingOrder(input) {
  return (parseInt(input.toString().split('').sort((a,b)=> a - b).reverse().join('')))
}
console.log(descendingOrder(12));
