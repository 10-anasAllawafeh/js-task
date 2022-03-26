`use strict`;
function task(num) {
    document.write(`task ${num} <br>`);
    console.log(`task ${num}`);
}
function hline() {
    document.write(`<br> <hr>`);
}
//1
task(1);

  
//   7
//   Create a function called repeatWord
//   that accept a string
//   and return an object that represents how many times each word repeat
//   ** no matter it is upper case or lower case
//   ** Search on MDN about something can cut the string to words??

// console.log(str.split(" "));
//   Ex: repeatWord("My name is alex mercer class name B my baba mama hello Hello HELLO") 
function repeatword() {
    str="My name is alex mercer class name B my baba mama hello Hello HELLO";
    y=str.toLowerCase().split(" ");
    x="";
    sum=0;
    for (let z = 0; z < y.length; z++) {
          y[z];
        for (let i = 0; i < y.length; i++) {
            if (y[z] == y[i]) {
                sum= sum + 1;   
            }
        }
    return `${y[11]}:${sum}<br>`;
    }
    
}console.log(repeatword());
document.write(repeatword());
hline();
//     str="My name is alex mercer class name B baba mama hello Hello HELLO";
//     console.log(str.split( new RegExp( "my", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "name", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "is", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "alex", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "alex", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "mercer", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "class", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "B", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "baba", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "mama", "i"  ) ).length-1);
//     console.log(str.split( new RegExp( "hello", "i"  ) ).length-1);
    
//   
  /*
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */
  
  
  
  /*
  8
  Create a function called repeatChar
  that accept a string
  and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to char??
  
  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */
 task(2)
//  str="My name is alex mercer class name B my baba mama hello Hello HELLO";
//  y1=str.toLowerCase().replace().split("");
  function repeatChar(x1) {
    // str="My name is alex mercer class name B my baba mama hello Hello HELLO";
    x1="";
    y1=x1.toLowerCase().replace(/\s/g, '');
    sum1=0;
    for (let z = 0; z < y1.length; z++) {
          y1[z];
        for (let i = 0; i < y1.length; i++) {
            if (y1[z] == y1[i]) {
                sum1= sum1 + 1;   
            }
        }
    return `${y1[0]}:${sum1}<br>`;
    }
    
}
console.log(repeatChar("My name is alex mercer class name B my baba mama hello Hello HELLO"));
document.write(repeatChar());
console.log(y1);

  /*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  task(3)

  y={
        name:"Anas",
        age: 27,
        skill:["html","css"],
    }
    x=Object.keys(y);
    // console.log(y[x[2]]);
    // document.write(y[x[2]]);


    function selectFromObject() {
        for (let i = 0; i < 3; i++) {
            console.log(y[x[i]]); 
        }
    }
    console.log(selectFromObject());
    document.write(selectFromObject());


    // document.write(selectFromObject());
    hline();
//   class FromObject{

//     y(name,age,skill){
//         this.name=name;
//         this.age= age;
//         this.skill=skill;
//     }
//    selectFromObject(x) {
//        x=Object.keys(this.y);
//     for (let i = 0; i < array.length; i++) {
//     }
//     return x ;
//   }
// }
//   std= new FromObject("Duaa",24,["html","css"])
//   console.log(std);
  
  /*
  10
  Create a function called objectToArray
  that accept an object
  and return an array of the keys and values in this object
  
  Ex: objectToArray({firstName:"Moh",age:24})
  => ["firstName","Moh","age",24]
  */
  task(4)

  y={
    name:"Daua",
    age: 24,
    skill:["html","css","js"],
    }
    x=Object.keys(y);
  function objectToArray() {
    for (let i = 0; i < 3; i++) {
        console.log(y[x[i]]); 
    }  
  }
  console.log(objectToArray());
  console.log(Array.isArray(x));
  document.write(objectToArray());
  document.getElementById("p1").innerHTML=x;
  hline();
  ////////////////
  task(4.1);

  let xa= Object.keys(y);
  let ya= Object.values(y);
//   console.log(typeof(ya));
  let za= xa.concat(ya);
  console.log(za);
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  task(5)
  function arrayToObject(object) {
    return Object.keys(object).reduce(function (r, k) {
        object[k].forEach(function (a, i) {
            r[i] = r[i] || {};
            r[i][k] = a;
        });
        return r;
    }, []);
}

  function getObject(array) {
    return array.reduce(function (r, o, i) {
        Object.keys(o).forEach(function (k) {
            r[k] = r[k] || [];
            r[k][i] = o[k];
        });
        return r;
    }, {});
}
  let data={firstName:["Moh"],age:[24]};
  console.log(getObject(arrayToObject(data)));
  document.write(getObject(arrayToObject(data)));

  //////
  
  /*
  12
  Create a function called onlyNumber
  that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */
 task(7);
  onlyNumber={firstName:"Moh",age:24,movies:[1,5,"string"]};
  console.log(typeof(onlyNumber));
  function onlyNumbers() {
      x={};
      for (let i = 0; i < 3 ; i++) {
          if (onlyNumber.keys == Number || onlyNumber.values == Number) {
              x=new onlyNumber(onlyNumber.keys[i]);
          } 
      } return x;
  }
console.log(onlyNumbers());

  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */
  
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
 task(9)

  onlyArray={firstName:"Moh",age:24,movies:[1,5,"string"]};
  yt=Object.values(onlyArray);
  function yttype(){
      x=[];
    for (let i = 0; i < yt.length; i++) {
      if(typeof(yt[i]) === "object");{
        x.push(yt[i])
      } 
    } return x ;
  }
console.log(yttype());
  
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */
 task(10);
  function getArray(object) {
    return Object.keys(object).reduce(function (r, k) {
        object[k].forEach(function (a, i) {
            r[i] = r [i] || {};
            r[i][k] = a;
        });
        return r;
    }, []);
}
let data2={firstName:["Moh"],age:[24]};
console.log(getArray(data2));