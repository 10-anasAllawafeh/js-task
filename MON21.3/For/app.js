`use strict`
console.log("nested for loop :");

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
    console.log(string);
  }
  string += "\n";
}
console.log(string);