`use strict`
console.log ('Here is : ', 'array');
function task(num) {
    document.write(`task ${num} <br>`);
    console.log(`task ${num}`);
}
function hline() {
document.write(`<br> <hr>`);
};

task(1);
function tellFortune(j,l,p,n) {
    return `you will be ${j} in ${l},and married to ${p} with ${n} kids`
}
console.log(tellFortune("Web Developer","Canada","luis",4));
document.write(tellFortune("Web Developer","Canada","luis",4));
hline();
//////////////////////////////////////////////////////////////////////////////////////////
// 2
task(2);
function calculateDogAge(age) {
    let con=age*7;
    return `Your doggie is ${con} years old in dog years!`; 
}
console.log(calculateDogAge(5));
document.write(calculateDogAge(5));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(3);
// 3
function calculateSupply(age,sup) {
    let lage=100-age;
    conv=lage*265;
    count=`${conv*sup} apple`;
    return `You will need ${count} to last you until the ripe old age of ${lage}`;
}
console.log(calculateSupply(22,5));
document.write(calculateSupply(22,5));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(4);
function greet(name) {
    return `hello ${name}`;
}
console.log(greet("Adam"));
document.write(greet("Adam"));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(5);
//x is undefined ,,,so x must be "cat"
//the parameter of function must'nt be a number
//parameter must'nt be string

// function double(cat) {
//     return 2 * cat;
//   }
// console.log(double(cat));
// //////////////////////////////////
// function double(x) {
//     return 2 * x;
//   }
// console.log(double(x));
// //////////////////////////////////////////////////////////////////////////////////////////
task(6);
// function double1(x) {
//   return 2 * x ;
// }
// //////////////////////////////////
// function double2(x){
// return 2 * x;
// }
// //////////////////////////////////
// function double3(x)  {
//   return 2 * x;
// }
// //////////////////////////////////////////////////////////////////////////////////////////
// 7
task(7);
function cube(x) {
    // (x**3); another way
    return Math.pow(x,3);
    
}
console.log(cube(3));
document.write(cube(3));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(8);
function multiply(d,b) {
    return d*b;
}
console.log(multiply(3,5));
document.write(multiply(3,5));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(9);
function canIGetADrivingLicense(age) {
    if (age>20) {
        return`Yes You Can`;
        }
    else{
        return `Please come back after ${20-age} years to get one`;
    }
    
}
console.log(canIGetADrivingLicense(25));
document.write(canIGetADrivingLicense(25));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(10);
function sameLength(na1,na2) {
    if (na1.length===na2.length) {
        return `True` 
    } else {
        return `False`
    }
}
console.log(sameLength(`na1`,`na2`));
document.write(sameLength(`na1`,`na2`));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(11);
function largerNubmer(nu1,nu2) {
   if (nu1>nu2) {
         
         return nu1 ;
    }
    else {
           return nu2;
    } 
}; 

console.log(largerNubmer(15,17));
document.write(largerNubmer(15,17));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(12);
function smallerNubmer(n1 , n2 , n3){
    if (n1<n2){
      if (n1<n3){
        return n1;
      }else{
        return n3;
      }
    }else if(n2<n3){
      return n2;
    }
      else{
        return n3;
      }
    }  
console.log(smallerNubmer(7,5,9));
document.write(smallerNubmer(7,5,9));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(13);
function shorterString(...str) { 
    shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;})  
    return shorter;
}
console.log(shorterString("Anas","Obada","Ammar","Ali","Samer"));
document.write(shorterString("Anas","Obada","Ammar","Ali","Samer"));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(14);
function longerString(...str) { 
    longer=str.reduce(function(a, b) {return a.length >= b.length ? a : b;})  
    return longer;
}
console.log(longerString("Anas","Obada","Ammar","Samer"));
document.write(longerString("Anas","Obada","Ammar","Samer"));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(15);
function isEven(x) {
    if (x % 2 ===0) {
        return `True`
    } else {
        return`false`
    }
}
console.log(isEven(9));
document.write(isEven(9));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(16);
function isOdd(x) {
    if (x % 2 ===0) {
        return `False`
    } else {
        return`True`
    }
}
console.log(isOdd(7));
document.write(isOdd(7));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(17);
function positive(x) {
    let px= Math.abs(x);
    return px;
}
console.log(positive(-9));
document.write(positive(-9));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(18);
function fullName(fn,ln) {
    return `${fn} ${ln}`
}
console.log(fullName(`fn`,`ln`));
document.write(fullName(`fn`,`ln`));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(19);
function average(n1,n2,n3,n4,n5) {
    let sum=n1+n2+n3+n4+n5;
    return sum/5  
}
console.log(average(8,7,15,45,90));
document.write(average(8,7,15,45,90));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(20);
function randomNumber() {
    return Math.floor(Math.random()); 
}
console.log(Math.random());
document.write(Math.random());
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(21);
function randomBetweenNumbers(x,y) {
    return Math.random() * (y - x) + x;
    
};
console.log(randomBetweenNumbers(5,9));
document.write(randomBetweenNumbers(5,9));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(22);
function scoreInUniversty(sc) {
    if (sc <=49 ) {
        return `F`
    } else {
        if (sc <=69) {
            return `D`
        } else {
            if (sc <=84) {
                return `C`
            } else {
                if (sc <=94) {
                    return `B`
                } else {
                    if (sc <=100) {
                        return `A`
                    } else {
                        return `wrong value`
                    }
                }
            } 
        } 
    }
};
console.log(scoreInUniversty(85));
document.write(scoreInUniversty(85));
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(23);
function counter(nums) {
    for (let i = 0; i <= 5; i++) {
        nums=i;
        console.log(nums);
        document.write(nums); 
    }
}
counter(0);
hline();
// //////////////////////////////////////////////////////////////////////////////////////////
task(24);
function counter1(nums) {
    for (let i = 0; i <= 3; i++) {
        nums=i;
        console.log(nums);
        document.write(nums); 
        if (nums===3) {
            console.log("and the counter reset now ");
            document.write("and the counter reset now ");   
        }
    }
}
counter1(0);

hline();
// //////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
