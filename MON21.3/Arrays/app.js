`use strict`;
console.log ('Here is : ', 'array');
function task(num) {
    document.write(`task ${num} <br>`);
    console.log(`task ${num}`);
}
function hline() {
    document.write(`<br> <hr>`);
}
task(1);
//    [1,7,9,45];
//    ["str","alex","moh"];
//    ["the","fox","over","lazy","dog"];
hline();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
task(2);
// var fruits=["Tomato","Banana","Watermelon"]
// Tomato index=0;
// Banana index=1;
// console.log(fruits[0]+fruits[1]);
hline();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
task(3)
let FavoriteFood=["burger","shawerma","pizaa","falafel","makloba","Mansaf"];
let FavoriteSport=["soccer","tennis","beseball"];
let FavoriteMovie=["inception","now you see me","fightClub","soul"];
console.log(FavoriteFood,FavoriteSport,FavoriteMovie);
document.write(`${FavoriteFood}<br>${FavoriteSport}<br>${FavoriteMovie}`);
hline();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
task(4)
function firstOfArray(...num) {

    console.log(typeof num);
    console.log(Array.isArray(num));

    return `first of array is:  ${num[0]}`;
};
console.log(firstOfArray(9,5,8,3,7));
document.write(firstOfArray(9,5,8,3,7));
hline();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
task(5);
function lastOfArray(...num) {

    console.log(typeof num);
    console.log(Array.isArray(num));

    return `Last of array is:  ${num[num.length-1]}`;
};
console.log(lastOfArray(9,5,8,3,7));
document.write(lastOfArray(9,5,8,3,7));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
task(6);
let array = [0,5,7,9];
console.log(array);
array.shift();
console.log(`to`);
array=[4,6,8];
// console.log(array);
array.unshift(1,3);
// console.log(array);
array.push(9,10);
console.log(array);
document.write(array);
hline();
///////////////////////////////////////////////////////////////////////////////////////////////////////////
task(7);
let array2 = [5,9,-7,3.5]
console.log(array2);
array2.push(6,6);
console.log(`push${array2}`);
array2.unshift(5,5);
console.log(`unshift${array2}`);
array2.shift();
console.log(`shift${array2}`);
array2.pop();
console.log(`pop${array2}`);
document.write(`pop${array2}`);
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
task(8);
function middleOfArray(...nums) {
    if (nums.length % 2 === 0) {
         return `middle Of Array is :${nums[nums.length/2-1]},${nums[nums.length/2]}`
        
    } else {
        return `middle Of Array is :${nums[nums.length/2-1.5]}`
        
    }
    
}
console.log(middleOfArray(1,8,9,33,55,10,4,54,63));
document.write(middleOfArray(1,8,9,33,55,10,4,54,63));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
task(9);
let animals = ['cat', 'ele', 'bird'];
console.log(animals);
console.log(`to`);
animals[0]=`Zebra`;
animals[1]=`Elephant`;
animals[2]=``;
console.log(animals);
document.write(animals);
hline();
////////////////////////////////////////////////////////////////////////////////////////////////////////
task(10);
function indexOfArray(nums,n) {
    return `Element of index[n] is: ${nums[n]}`;
}
nums= [1,2,3,8,9];
console.log(indexOfArray(nums,2));
document.write(indexOfArray(nums,2));
hline();
///////////////////////////////////////////////////////////////////////////////////////////////////////
task(11);
function arrayExceptLast(...nums) {
    console.log(nums);
    console.log(nums.slice(0,nums.length-1));
    return `array Except Last : ${nums.slice(0,nums.length-1)}`; 
}
console.log(arrayExceptLast(2,5,4,3,6,9,1,7,0));
document.write(arrayExceptLast(2,5,4,3,6,9,1,7,0));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(12);
function addToEnd(nums,n) {
    nums.push(n);
   return nums;
}
nums= [1,2,3,8,9];
console.log(addToEnd(nums,88));
document.write(addToEnd(nums,88));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(13);
let sum=0;
let i=0
function sumArray(...nums) {
      while (i<nums.length) {
          sum = sum + nums[i];
          i++;
      } 
      return sum;
}
console.log(sumArray(1,7,6,5,9,4,5));
document.write(sumArray(1,7,6,5,9,4,5));
hline();
//////////////////////////////////////////
task(13.1)
sum=0;
function sumArray1(...nums) {
          for (let i = 0; i < nums.length; i++) {
              sum = sum+nums[i];
          }
          return sum;
    }
    console.log(sumArray1(1,7,6,5,9,4,5));
    document.write(sumArray1(1,7,6,5,9,4,5));
    hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(14);
function minInArray(...nums) {
    let mini = nums[0];
  for(let i = 1; i < nums.length; i++) {
      if(nums[i] < mini) {
        mini = nums[i];   
      }
    }
  return mini;
  };  
console.log(minInArray(3,7,9,5,2,1,0));
document.write(minInArray(3,7,9,5,2,1,0));
hline();
//////////////////////////////////////////
//
task(14.1);

function minInArray1(...nums) {
    let mini=nums[0];
    i=1;
    while (i<nums.length) {
        if (nums[i]<mini) {
           mini =nums[i];
        }  
        i++;
    }
        return mini;     
    }
    console.log(minInArray1(3,7,9,5,2,1,0));
    document.write(minInArray1(3,7,9,5,2,1,0));
    hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(15);
function removeFromArray(...nums) {
    for (let i = 0; i < nums.length; i++)
     {
        nums.splice(2,1);;
    }return nums;
}
console.log(removeFromArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17,));
document.write(removeFromArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17,));
hline();
///////////////////////////////////////////////////
task(15.1)
function removeFromArray1(...nums) {
    let i = 0;
    while (i < nums.length) {
        nums.splice(2,1);
        i++;
    }return nums;
}
console.log(removeFromArray1(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17,));
document.write(removeFromArray1(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17,));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(16);
let odds=[];
function oddArray(...nums) {
    for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 !==0) {
                odds.push(nums[i]); 
            }  
    } return odds;
}
console.log(oddArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
document.write(oddArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
hline();
///////////////////////////////////////////////////
task(16.1);
function oddArray1(...nums) {
    let i = 0;
    let odds=[];
    while ( i < nums.length) {
        if (nums[i] % 2 !==0) {
            odds.push(nums[i]); 
        }   i++; 
    }return odds;
}
console.log(oddArray1(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
document.write(oddArray1(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(17);
function aveArray(...nums) {
    let sum=0;
    for (let i = 0; i < nums.length; i++) {
        sum= sum+nums[i];
    } return sum/nums.length;
}
console.log(aveArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
document.write(aveArray(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
hline();
///////////////////////////////////////////////////
task(17.1);
function aveArray1(...nums) {
    let sum=0;
    let i = 0;
    while (i < nums.length) {
        sum= sum+nums[i];
        i++;    
    }return sum/nums.length;
}
console.log(aveArray1(1,3,5,7,9,2,4,6,8,1,3,5,4,6,2,17));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(18);
function shorterInArray(...str) {
    for (let i = 0; i < str.length; i++) {
        shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;});
    }   return shorter;
}
console.log(shorterInArray("ahmed","emad","ali","suhaib","sameer","laith","moyad"));
document.write(shorterInArray("ahmed","emad","ali","suhaib","sameer","laith","moyad"));
hline();
///////////////////////////////////////////////////
task(18.1);
function shorterInArray1(...str) {
    let i = 0;
    while (i < str.length) {
        shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;});
        i++;
    }  return shorter;
}
console.log(shorterInArray1("ahmed","emad","ali","suhaib","sameer","laith","moyad"));
document.write(shorterInArray1("ahmed","emad","ali","suhaib","sameer","laith","moyad"));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(19);
function repeatChar(str) {
    console.log(str.length);
    char=0;
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === "a") {
            char++;
        }        
    }
    return char
}
console.log(repeatChar("ahmed emad ali suhaib sameer laith moyad"));
document.write(repeatChar("ahmed emad ali suhaib sameer laith moyad"));
hline();
///////////////////////////////////////////////////
task(19.1)
function repeatChar1(str) {
    console.log(str.length);
    char=0;
    let i = 0;
    while ( i < str.length) { 
        if (str[i] === "a") {
            char++;
        }   
        i++;     
    }
    return char
}
console.log(repeatChar1("ahmed emad ali suhaib sameer laith moyad"));
document.write(repeatChar1("ahmed emad ali suhaib sameer laith moyad"));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(20);
function evenIndexOddLength(...str) {
    let oddArray=[];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            if (str[i].length % 2 != 0) {
                oddArray.push(str[i])
            }
        }
    } return oddArray;
}
console.log(evenIndexOddLength("ahmed","emad","ali","suhaib","samer","laith","moyad"));
document.write(evenIndexOddLength("ahmed","emad","ali","suhaib","samer","laith","moyad"));
hline();
///////////////////////////////////////////////////
task(20.1)
function evenIndexOddLength1(...str) {
    let oddArray=[];
    let i = 0;
    while (i < str.length) {
        if (i % 2 === 0) {
            if (str[i].length % 2 != 0) {
                oddArray.push(str[i]);
            }
        }
        i++;  
    } return oddArray;
}
console.log(evenIndexOddLength1("ahmed","emad","ali","suhaib","samer","laith","moyad"));
document.write(evenIndexOddLength1("ahmed","emad","ali","suhaib","samer","laith","moyad"));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(21);
function powerElementIndex(...nums) {
    let poarray=[];
    for (let i = 0; i < nums.length; i++) {
        nums[i]=Math.pow(nums[i], i);
        poarray.push(nums[i]);
    } return poarray;
}
console.log(powerElementIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
document.write(powerElementIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
hline();
///////////////////////////////////////////////////
task(21.1);
function powerElementIndex1(...nums) {
    let poarray=[];
    let i = 0;
    while (i < nums.length) {
        nums[i]=Math.pow(nums[i], i);
        poarray.push(nums[i]);
        i++;
    } return poarray;
}
console.log(powerElementIndex1(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
document.write(powerElementIndex1(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
task(22);
function evenNumberEvenIndex(...nums) {
    let evenarray=[];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            if (nums[i] % 2 ===0) {
                evenarray.push(nums[i]);   
            } 
        }  
    } return evenarray
}
console.log(evenNumberEvenIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
document.write(evenNumberEvenIndex(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
hline();
///////////////////////////////////////////////////
task(22.1);
function evenNumberEvenIndex1(...nums) {
    let evenarray=[];
    let i = 0;
    while ( i < nums.length ) {
        if (i % 2 === 0) {
            if (nums[i] % 2 ===0) {
                evenarray.push(nums[i]);   
            } 
        }  i++;
    } return evenarray
}
console.log(evenNumberEvenIndex1(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
document.write(evenNumberEvenIndex1(5,3,5,7,9,2,4,6,8,1,3,5,4,6,2,3));
hline();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////DONE///////////DONE//////////DONE///////DONE/////////DONE///////////DONE/////////DONE//////////DONE/////////DONE/////////DONE///////