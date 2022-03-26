`use strict`;
function task(num) {
    // document.write(`task ${num} <br>`);
    console.log(`task ${num}`);
}
/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
console.log('Here is : While');
//1console.log(subtract(5))
task(1);
function subtract(n,s) {
    while (n != 0) {
        console.log(n);
        s-= n - n-1; 
        n--;
    } console.log(s);
}
console.log(subtract(5,0));
// console.log("////////Or/////////");
// function subtract(num) {
//     while (num > 0) {
//         let nom = num-1;
//         console.log(`${num-nom}-`);
//         num--;    
//     }
// }

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
task(2);
function factorial(n,s) {
    while (n != 0) {
        console.log(n);
        s-= n - n-1; 
        n--;
    } console.log(s);
}
console.log(factorial(4,0));
/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
task(3);
function repeatStr(n,s) {
    while (n != 0) {
        n--;
        s=s.repeat(n);
    } console.log(s);
}
console.log(repeatStr(3,"to"));
//////////////////////////////////////////////
// console.log("////////Or/////////");
function repeat(pattern, count) {
    if (count < 1) return '';
    let result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}
console.log(repeat(" to",2));
/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
task(4);
let array = [];

function range (arr){  
    let lower = Math.min(arr[0],arr[1]);    
    let upper = Math.max(arr[0],arr[1]);  

    for (let i=lower;i<=upper;i++){  
        array.push(i);  
    }
    return array; // return the array to be used in the sum function
}  

function sum2(array){  
    let total = 0; // need to create a letiable outside the loop scope
    for(let i in array){  
       total = total+array[i];  
    }
    return total;
} 
console.log(sum2(range([])));


/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
task(5);

function repeatStr2(pattern,numb) {
    let doo= numb.length;
    if (doo < 1) return '';
    let result = '';
    while (doo > 1) {
        if (doo & 1) result += pattern;
        doo >>= 1, pattern += pattern;
    }
    return result + pattern;
}
console.log(repeatStr2(" to","hii"));
/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
task(6);
function multiof(x,y,z) {
    while (x != 0) {
        return x * Math.pow(y,z);
    }   
}
console.log(multiof(2,2,3));
/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
task (7);
array = [];
function range (arr){  
    let lower = Math.min(arr[0],arr[1]);    
    let upper = Math.max(arr[0],arr[1]);  

    for (let i=lower;i<=upper;i++){  
        array.push(i);  
    }
    return array; 
}  

function multi2(array){  
    let total = 1; 
    for(let i in array){  
       total = total * array[i];  
    }
    return total;
} 
console.log(multi2(range([3,6])));
/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
task(8);
function numberBetweenUs(x,y) {
    let s=[];
   while (x!==y) {
    x++;
    if (x<y) {
        s.push(x)
    } 
   } return s;
}
console.log(numberBetweenUs(2,8));
/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
task(9);
function countDown(n) {
    s="";
    while (n >= 0) {
        w=n.toString()+",";
        s= s.concat(w);
        n--;
        if (n == 0) {
            d="done";
            s=s.concat(d);
            break;
        }
    } return s;
}
console.log(countDown(5));
/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
task(10);
function multiplication2(x,y){
    while (x,y == Number) {
        break;
    }return x * y;
}
console.log(multiplication2(2,5));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
task(11);
function mod2(x,y) {
    while (x>y) {
        break;
    } return (x - y * parseInt(x / y));
}
console.log(mod2(7,4));
/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*//***************************************************************************** */
task(12);
let obj={}                                                   //******************************************* */
let repeats=[];                                            //************************************************ */
// str='banana';                                                 //************************************************
// length = str.length;                                   //************************************************
function repeatChar(str) {                                    //************************************************
    let x=0;                                                         //************************************************
    while( x < str.length ) {                                               //************************************************
        let l = str.charAt(x)                                                     //************************************************
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);                              //************************************************
        x++                                                                       //************************************************
    } return obj;                                                              //************************************************
}                                                                            //************************************************
                                                                      //************************************************
console.log(repeatChar('school'));
                                                                          //************************************************