`use strict`;
function task(num) {
    document.write(`task ${num} <br>`);
    console.log(`task ${num}`);
}
function hline() {
    document.write(`<br> <hr>`);
}
//1
task(7);

  
//   7
//   Create a function called repeatWord
//   that accept a string
//   and return an object that represents how many times each word repeat
//   ** no matter it is upper case or lower case
//   ** Search on MDN about something can cut the string to words??

// console.log(str.split(" "));
//   Ex: repeatWord("My name is alex mercer class name B my baba mama hello Hello HELLO") 
function repeatWord(str) {
split = str.split(" "),
obj = {};

for (let i = 0; i < split.length; i++) {
if (obj[split[i]] === undefined) {
  obj[split[i]] = 1;
}
 else {
  obj[split[i]]++;
}
}
  return obj;
};
    
console.log(repeatWord("My name is alex mercer class name B my baba mama hello Hello HELLO"));
document.write(repeatWord("My name is alex mercer class name B my baba mama hello Hello HELLO"));
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
 task(8)

function repeatChar(str) {
var obj={};
for(x = 0, length = str.length; x < length; x++) {
    var l = str.charAt(x)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
  }
  return obj;
};
console.log(repeatChar("mamababatetacedo"));
document.write(repeatChar("mamababatetacedo"));
    
hline();
task(8.1);
function repeatChar1(string){
  let subSting=string.toLowerCase(); // To count Uppercase and Lowercase
  var obj={}
  for(let i = 0, length = subSting.length; i < length; i++) {
      var objIndex = subSting.charAt(i)
      obj[objIndex] = (isNaN(obj[objIndex]) ? 1 : obj[objIndex] + 1); //Another way to write if statment
  } 
  return obj;
}
console.log(repeatChar1("mamababatetacedo"));
/*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  task(9);

  // y={b: 1, cat: 3, a: 5, l: 9};
  // console.log(Object.keys(y).length);
  // yy=Object.keys(y);
  // x=['a', 'cat', 'd'];
  // console.log(yy);
    // document.write(y[x[2]]);


    // function selectFromObject(y,x) {
    //   y={b: 1, cat: 3, a: 5, l: 9};
    //   x=['a', 'cat', 'd'];
    //   let w;
    //   for (let i = 0; i < x.length; i++) {
    //     for (let z = 0; z < Object.keys(y).length; z++) {
          
    //       if (Object.keys(y)[z] == x[i]) {
    //             w += Object.keys(y)[z];
    //       }
    //     } 
    //   }return w
    // };
    // console.log(selectFromObject());
    // document.write(selectFromObject());


    // document.write(selectFromObject());
    // task(9);


    function selectFromObject(x,y){
      let obj = {}
          for(let i =0 ; i<y.length ; i++)
          {
              // console.log(Object.keys(x)[0]);
              // console.log(y[0]);
              if(Object.keys(x)[i]==y[i])
              {
                  // console.log(x[y[i]]);
                  obj[y[i]] = x[y[i]];
              }
          }
      return obj
      }
      console.log(selectFromObject({a: 1, cat: 3 }, ['a', 'cat', 'd']));
      // let saraobj = { name: "sara", age: 22}
      // console.log(Object.keys(saraobj));
      
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
  // task(4)

  
  // function objectToArray() {
  //   for (let i = 0; i < 3; i++) {
  //       return y[x[i]]; 
  //   }  
  // }
  // console.log(objectToArray());
  // console.log(Array.isArray(x));
  // document.write(objectToArray());
  // document.getElementById("p1").innerHTML=x;
  // hline();
  ////////////////
  task(10);
  y={
    name:"Daua",
    age: 24,
    skill:["html","css","js"],
    };
  x=Object.keys(y);
  let xa= Object.keys(y);
  let ya= Object.values(y);
//   console.log(typeof(ya));
  let za= xa.concat(ya);
  console.log(za);
  document.write(za);
  hline();
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  task(11)
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
  hline();
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
 x=9;
 console.log(typeof(x))
 task(12);
 function onlyNumber(obj) {
  let newObj={};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof(Object.values(obj)[i]) == `number`) {
      newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
  } return newObj;
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"], he:7,she:9}));
document.write(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"], he:7,she:9}));
hline();
  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */

  task(13);
  function onlyString(obj) {
    let newObj={};
    for (let i = 0; i < Object.keys(obj).length; i++) {
      if (typeof(Object.values(obj)[i]) == `string`) {
        newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
      }
    } return newObj;
  }
  console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"], he:`ibra`,she:`sara`}));
  document.write(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"], he:`ibra`,she:`sara`}));
  hline();
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
 task(14)

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
document.write(yttype())
hline();
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */
 task(15);
  function keysArray(object) {
    arr=[];
    for (let i = 0; i < Object.keys(object).length; i++) {
      arr.push(Object.keys(object)[i]); 
    } return arr;
}
console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.write(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
hline();