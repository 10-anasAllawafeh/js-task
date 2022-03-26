`use strict`
console.log("for Each loops :");
function task(num) {
    // document.write(`task ${num} <br>`);
    console.log(`task ${num}`);
}
/////////////
//1
task(1);

/*ferEach :
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// function doubleValues(arr){
//    //Your Code Here
// }
array=[5,1,2,3,10];
const doubleValues=array.map(double => double * 2);
console.log(doubleValues);
///////////////////////////////////////////////////////////////
///1.1
console.log("////////Or/////////");
array.forEach(function(doubleValues) {
    console.log(doubleValues * 2);});



/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
// function onlyEvenValues(arr){
//     //Your Code Here
    
// }

task(2);
array=[5,1,2,3,10,7,6,9,8];
onlyEven=array.filter(even => even % 2 === 0);
console.log(onlyEven);
console.log("////////Or/////////");
array.forEach(function(onlyEven){
    if (onlyEven % 2 ==0) {
        console.log(onlyEven);
    }
});
/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
// function showFirstAndLast(arr){
//    //Your Code Here
// }
task(3);
strray=['colt','matt', 'tim', 'udemy'];
result = [];
strray.forEach(function(currentString) {
    result.push(currentString.charAt(0));  // First character
    result.push(currentString.charAt(currentString.length - 1)); //Last character
});
console.log(result);
console.log("////////Or/////////");
fL=strray.map(fl => fl.substring(1, fl.length - 1))
console.log(fL);
console.log("////////Or/////////");
fLS=strray.map(fl => fl.slice(1, fl.length - 1))
console.log(fLS);
console.log("////////Or/////////");
fL2=strray.map(function (fl) {
    fl.substring(1, fl.length - 1);
    let fll=fl.substring(1, fl.length - 1);
    console.log(fll);
})


/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
// function addKeyAndValue(arr,key,value){
//     //Your Code Here
// }
task(4);
addKeyAndValue= [[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'];
const newArr1 = addKeyAndValue.map(v => ({...v, title: "instructor"}));
console.log(newArr1);
console.log("////////Or/////////");
addKeyAndValue.forEach(v => {v, title = "instructor";console.log(v);});
console.log("////////Or/////////");
function addKeyAndValuee(arr, key, value) {
    for (i = 0; i < arr.length; i++) {
      obj = arr[i];
      obj[key] = value;
    }
    return arr;
    }
    console.log(addKeyAndValuee);

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

// function vowelCount(str){
//   //Your Code Here
// }
task(5);
// str=;
function getVowels(str) {
    var m = str.match(/[oieua]/gi);
    return m === null ? 0 : m.length;
  }
  console.log(getVowels('I Am awesome and so are you'));