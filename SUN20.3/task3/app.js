let op=prompt("Please enter operation type");
let xs=prompt("first number value");
let ys=prompt("second number value");
let x=Number(xs);
let y=Number(ys);

switch(op){
    case "+":
        ans=`${x}+${y}=${x+y}`;
        break;
    
    case "-":
        ans=`${x}-${y}=${x-y}`;
        break;
    case "*":
        ans=`${x}*${y}=${x*y}`;
        break;
    
    case "/":
        ans=`${x}/${y}=${x/y}`;
        break;
    default:
        ans=`Wrong Value,Please try again`
}
console.log(ans);
document.getElementById("demo").innerHTML=ans;