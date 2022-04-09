`use strict`;
let fill= document.getElementById("fill");
let std={std1:"anas Lafi",std2:"Obada Lafi",std3:"Ammar Lafi"};
let cities={city1:"Aqaba",city2:"Amman",city3:"Zarqa",city4:"Irbid",city5:"Ajloun"};
let team ={team1:"Faisali",team2:"Wehdat",team3:"Itehad",team4:"Real Madrid"};
let lA=document.getElementById("lA");
let lN=document.getElementById("lN");
let letter1=document.getElementById("fillTd1");
let letter2=document.getElementById("fillTd2");
let letter3=document.getElementById("fillTd3");
let letter4=document.getElementById("fillTd4");
let letter5=document.getElementById("fillTd5");
let letter6=document.getElementById("fillTd6");
let letter7=document.getElementById("fillTd7");
let letter8=document.getElementById("fillTd8");
let letter9=document.getElementById("fillTd9");
let letter10=document.getElementById("fillTd10");



// let stdArray=Object.values(std);
// let namee=stdArray;
// console.log(namee);
// let leterA="";

console.log(lA.innerHTML);

 function onclickA(){
    let stdArray=Object.values(std);
    for (let i = 0; i < stdArray.length; i++) {
        let namee=stdArray[i];
        console.log(namee);
        console.log(namee.length);
        for (let j = 0; j < namee.length; j++) {
            if (lA.innerHTML == namee[j]) {
                // letter1.innerHTML=namee[j];
                // console.log(namee[j]);
                // document.write(letter1[j]);

                let a=[];
                 a=document.createElement("td");
                fill.appendChild(a);
                a=namee[j];
                console.log(a);
                
            }  
            
        }
           break;
    }
}
function onclickN(){
    let stdArray=Object.values(std);
    for (let i = 0; i < stdArray.length; i++) {
        let namee=stdArray[i];
        console.log(namee);
        console.log(namee.length);
        for (let j = 0; j < namee.length; j++) {
            if (lN.innerHTML == namee[j]) {
                let n=document.createElement("td");
                fill.appendChild(n);
                n.innerHTML=namee[j];
                // letter2.innerHTML=namee[j];
                // console.log(namee[j]);
                // document.write(letter1[j]);
                
            }  
            
        }
           break;
    }
}