`use strict`;
/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
 let array=[4, 10, 200];
 let double=array.map(function doubleNumbers(arr)
 {
    return arr * 2;
  });
  console.log(double);

  
  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */
  array=[2, 5, 100];
  let string=array.map(function stringItUp(arr){
    return arr.toString()
  
  
  });
  console.log(string);
  
  
  
  /*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */
 array=["john", "JACOB", "jinGleHeimer", "schmidt"];
  
let capitalize=array.map(function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase()+ string.slice(1);
  });
  console.log(capitalize);
  
  /*
   * Exercise 4:  
   * 
   * Make an array of strings of the names
   *
   * Test Case: 
   *
   * console.log(namesOnly([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   *   ])); 
   * 
   * Result:
   *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  */
  namesOnly=[
    {name: "Angelina Jolie",age: 80},
    {name: "Eric Jones",age: 2},
    {name: "Paris Hilton",age: 5},
    {name: "Kayne West",age: 16},
    {name: "Bob Ziroll",age: 100}];
let array3=[];

    for (let i = 0; i < namesOnly.length; i++) {
        array3.push(namesOnly[i].name);   
    }
    console.log(array3);

  let nameO=namesOnly.map((arr) => arr.name)
  console.log(nameO);
  /*
   * Exercise 5:  
   * 
   * Make an array of strings of the names saying whether or not they can go to The Matrix
   *
   * Test Case: 
   *
   * console.log(makeStrings([
   *    {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));  
   * 
   * Result:
   * 
   * ["Angelina Jolie can go to The Matrix", 
   * "Eric Jones is under age!!", 
   * "Paris Hilton is under age!!", 
   * "Kayne West is under age!!", 
   * "Bob Ziroll can go to The Matrix"]
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  namesOnly=[
    {name: "Angelina Jolie",age: 80},
    {name: "Eric Jones",age: 2},
    {name: "Paris Hilton",age: 5},
    {name: "Kayne West",age: 16},
    {name: "Bob Ziroll",age: 100}];
    let canGo=namesOnly.map((arr) => {
        if (arr.age >= 20) {
            return arr.name+" can go to The Matrix";
        } else {
            return arr.name+" is under age!!"
        }

    });
    console.log(canGo);



//   function makeStrings(arr){
//     // your code here
//   }
  
  /*
   * Exercise 6:  
   * 
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case: 
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ])); 
   * 
   * Result:
   * 
   * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
   * "<h1>Eric Jones</h1><h2>2</h2>", 
   * "<h1>Paris Hilton</h1><h2>5</h2>", 
   * "<h1>Kayne West</h1><h2>16</h2>", 
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  
  let h1sh2s=namesOnly.map((arr) =>`<H1>${arr.name}</H1><H2>${arr.age}</H2>`);
  
  console.log(h1sh2s);
  
  
  /*
  * Exercise 7:
  * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
  *
  * Test Cases:
  *   Test Case 1:  doubleValues([1,2,3]) 
  *   Test Case 2:  doubleValues([1,-2,-3])  
  *
  * Result:
  * Test Case 1: [2,4,6] 
  * Test Case 2: [2,-4,-6]
  */
 array=[1,2,3,-2,-3];
 let doubleValues=array.map((arr) => arr * 2);
  console.log(doubleValues);
  
    
    /*
    * Exercise 8:
    * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    *
    *
    * Test Cases :
    *   Test Case 1:  valTimesIndex([1,2,3])  
    *   Test Case 2:  valTimesIndex([1,-2,-3]) 
    * 
    * Result
    * Test Case 1: [0,2,6]
    * Test Case 2: [0,-2,-6]
    */

    let valTimesIndex=array.map((arr,i) => arr * i);
    console.log(valTimesIndex);

    // function valTimesIndex(arr){
    //    // your code here   
      
    // }
    
    /*
    * Exercise 9:
    * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
    * of that key in each object.
    * 
    * Test Case:
    * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
    * 
    * Result:
    * ['Elie', 'Tim', 'Matt', 'Colt']
    */
    
    extractKey=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'},
                {name: 'Colt'},"name"];
    
    function extractKey(arr, key){
    extract1=arr.map((arr) => arr[key]); 
}
console.log(extractKey);




    // function extractKey(arr, key){
    //    // your code here 
    // }
    
    /*
    * Exercise 10:
    * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
    * 
    * Examples:
    * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    */
    extractFullName=[{first: 'Elie', last:"Schoppik"}, 
                     {first: 'Tim', last:"Garcia"},
                     {first: 'Matt', last:"Lane"},
                     {first: 'Colt', last:"Steele"}];


extract2=extractFullName.map(arr => arr.first+" "+arr.last)
console.log(extract2);
//    function extractFullName(){
//       // your code here 
//    }