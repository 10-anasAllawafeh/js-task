`use strict`;
console.log ('Here is : ', 'array');
// 1
//    [1,7,9,45];
//    ["str","alex","moh"];
//    ["the","fox","over","lazy","dog"];
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2
// var fruits=["Tomato","Banana","Watermelon"]
// Tomato index=0;
// Banana index=1;
// console.log(fruits[0]+fruits[1]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//3
// let fav=["Favorite Sport","Favorite Movie","Favorite Food","soccer","fightClub","Mansaf"];
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//4
// function firstOfArray(...num) {

//     console.log(typeof num);
//     console.log(Array.isArray(num));

//     return `first of array is:  ${num[0]}`;
// };
// console.log(firstOfArray(9,5,8,3,7));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//5
// function lastOfArray(...num) {

//     console.log(typeof num);
//     console.log(Array.isArray(num));

//     return `Last of array is:  ${num[num.length-1]}`;
// };
// console.log(lastOfArray(9,5,8,3,7));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//6**
// let array = [0,5,7,9];
// console.log(array);
// array.shift();
// console.log(array);
// array=[4,6,8];
// console.log(array);
// array.unshift(1,3);
// console.log(array);
// array.push(9,10);
// console.log(array);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//7
// let array2 = [5,9,-7,3.5]
// console.log(array2);
// array2.push(6,6);
// console.log(array2);
// array2.unshift(5,5);
// console.log(array2);
// array2.shift();
// console.log(array2);
// array2.pop();
// console.log(array2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//8
// function middleOfArray(...nums) {
//     if (nums.length % 2 === 0) {
//          return `middle Of Array is :${nums[nums.length/2-1]},${nums[nums.length/2]}`
        
//     } else {
//         return `middle Of Array is :${nums[nums.length/2-1.5]}`
        
//     }
    
// }
// console.log(middleOfArray(1,8,9,33,55,10,4,54,63));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//9
// let animals = ['cat', 'ele', 'bird'];
// console.log(animals);
// animals=["Zebra","Elephant"];
// console.log(animals);
//or
// let animals = ['cat', 'ele', 'bird'];
// console.log(animals);
// animals[animals.length]="zebra";
// animals[animals.length]="Elephant";
// console.log(animals);
////////////////////////////////////////////////////////////////////////////////////////////////////////
//10
// function indexOfArray(a,b,c,d,...nums) {
//     return `index of Array is: ${nums[1]}`;
// }
// console.log(indexOfArray(5,7,9,6,4,8,9,6,5,2,4,7));
///////////////////////////////////////////////////////////////////////////////////////////////////////
//11
// function arrayExceptLast(...nums) {
//     console.log(nums);
//     console.log(nums.slice(0,nums.length-1));
//     return `array Except Last : ${nums.slice(0,nums.length-1)}`; 
// }
// console.log(arrayExceptLast(2,5,4,3,6,9,1,7,0));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//12
// function addToEnd(...nums) {
//     console.log(nums);
//     console.log(nums.splice(nums.length,0,2,3));
//     return `array addToEnd : ${nums.splice(nums.length,0,2,3)}`;
// }
// console.log(addToEnd(2,5,4,3,6,9,1,7,0));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//13
// let sum=0;
// let i=0
// function sumArray(...nums) {
//       while (i<nums.length) {
//           sum = sum + nums[i];
//           i++;
//       } 
//       return sum;
// }
// console.log(sumArray(1,7,6,5,9,4,5));
//////////////////////////////////////////
// let sum=0;
// function sumArray(...nums) {
//           for (let i = 0; i < nums.length; i++) {
//               sum = sum+nums[i];
//           }
//           return sum;
//     }
//     console.log(sumArray(1,7,6,5,9,4,5));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//14
// function minInArray(...nums) {
//     let mini=nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i]<mini) {
//             mini=nums[i];
//         }
//         }  return mini;      
//     }   
// console.log(minInArray(3,7,9,5,2,1,0))
//////////////////////////////////////////
//***********************************************
// let i=0;
// function minInArray(...nums) {
//     let mini=nums[0];
//     while (i<nums.length) {
//         if (nums[i]<mini) {
//            mini=nums[i];
//            i++;
//         }
//         }  return mini;
//     }
//     console.log(minInArray(3,7,9,5,2,1,0));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//15
// function removeFromArray(...nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums.splice(2,1);
//         console.log(nums);
//     }
// }
// console.log(removeFromArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17,));
///////////////////////////////////////////////////
// function removeFromArray(...nums) {
//     let i = 0;
//     while (i < nums.length) {
//         nums.splice(2,1);
//         console.log(nums);
//         i++;
//     }
// }
// console.log(removeFromArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17,));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//16
// let odds=[];
// function oddArray(...nums) {
//     for (let i = 0; i < nums.length; i++) {
//             if (nums[i] % 2 !==0) {
//                 odds.push(nums[i]); 
//             }  
//     } return odds;
// }
// console.log(oddArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
///////////////////////////////////////////////////
// function oddArray(...nums) {
//     let i = 0;
//     let odds=[];
//     while ( i < nums.length) {
//         if (nums[i] % 2 !==0) {
//             odds.push(nums[i]); 
//         }   i++; 
//     }return odds;
// }
// console.log(oddArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//17
// function aveArray(...nums) {
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         sum= sum+nums[i];
//     } return sum/nums.length;
// }
// console.log(aveArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
///////////////////////////////////////////////////
// function aveArray(...nums) {
//     let sum=0;
//     let i = 0;
//     while (i < nums.length) {
//         sum= sum+nums[i];
//         i++;    
//     }return sum/nums.length;
// }
// console.log(aveArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//18
// function shorterInArray(...str) {
//     for (let i = 0; i < str.length; i++) {
//         shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;});
//     }   return shorter;
// }
// console.log(shorterInArray("ahmed","emad","ali","suhaib","sameer","laith","moyad"));
///////////////////////////////////////////////////
// function shorterInArray(...str) {
//     let i = 0;
//     while (i < str.length) {
//         shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;});
//         i++;
//     }  return shorter;
// }
// console.log(shorterInArray("ahmed","emad","ali","suhaib","sameer","laith","moyad"));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//19
// function repeatChar(str) {
//     console.log(str.length);
//     char=0;
//     for (let i = 0; i < str.length; i++) { 
//         if (str[i] === "a") {
//             char++;
//         }        
//     }
//     return char
// }
// console.log(repeatChar("ahmed emad ali suhaib sameer laith moyad"));
///////////////////////////////////////////////////
// function repeatChar(str) {
//     console.log(str.length);
//     char=0;
//     let i = 0;
//     while ( i < str.length) { 
//         if (str[i] === "a") {
//             char++;
//         }   
//         i++;     
//     }
//     return char
// }
// console.log(repeatChar("ahmed emad ali suhaib sameer laith moyad"));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//20
// function evenIndexOddLength(...str) {
//     let oddArray=[];
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             if (str[i].length % 2 != 0) {
//                 oddArray.push(str[i])
//             }
//         }
//     } return oddArray;
// }
// console.log(evenIndexOddLength("ahmed","emad","ali","suhaib","samer","laith","moyad"));
///////////////////////////////////////////////////
// function evenIndexOddLength(...str) {
//     let oddArray=[];
//     let i = 0;
//     while (i < str.length) {
//         if (i % 2 === 0) {
//             if (str[i].length % 2 != 0) {
//                 oddArray.push(str[i]);
//             }
//         }
//         i++;  
//     } return oddArray;
// }
// console.log(evenIndexOddLength("ahmed","emad","ali","suhaib","samer","laith","moyad"));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//21
// function powerElementIndex(...nums) {
//     let poarray=[];
//     for (let i = 0; i < nums.length; i++) {
//         nums[i]=Math.pow(nums[i], i);
//         poarray.push(nums[i]);
//     } return poarray;
// }
// console.log(powerElementIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
///////////////////////////////////////////////////
// function powerElementIndex(...nums) {
//     let poarray=[];
//     let i = 0;
//     while (i < nums.length) {
//         nums[i]=Math.pow(nums[i], i);
//         poarray.push(nums[i]);
//         i++;
//     } return poarray;
// }
// console.log(powerElementIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//22
// function evenNumberEvenIndex(...nums) {
//     let evenarray=[];
//     for (let i = 0; i < nums.length; i++) {
//         if (i % 2 === 0) {
//             if (nums[i] % 2 ===0) {
//                 evenarray.push(nums[i]);   
//             } 
//         }  
//     } return evenarray
// }
// console.log(evenNumberEvenIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
///////////////////////////////////////////////////
// function evenNumberEvenIndex(...nums) {
//     let evenarray=[];
//     let i = 0;
//     while ( i < nums.length ) {
//         if (i % 2 === 0) {
//             if (nums[i] % 2 ===0) {
//                 evenarray.push(nums[i]);   
//             } 
//         }  i++;
//     } return evenarray
// }
// console.log(evenNumberEvenIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////DONE///////////DONE//////////DONE///////DONE/////////DONE///////////DONE/////////DONE//////////DONE/////////DONE/////////DONE///////