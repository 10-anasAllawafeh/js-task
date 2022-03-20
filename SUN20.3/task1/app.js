let x=prompt("enter x");
let y=prompt("enter y");
let numx=Number(x);
let numy=Number(y);
let msg;

if(numx>numy){
    msg="Hello World";
    console.log("Hello Worrld");
}
else{
    msg="Good Bye";
    console.log("Good Bye");
}
document.getElementById("demo").innerHTML = msg;