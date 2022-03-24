`use strict`
// function hide() {
//     let element = document.getElementById();
//     element.style.display = "none";
// }

// function fun() {
//     let element = document.getElementById("p1");
//     element.style.display = "";
// }

let bs1=document.getElementById("show1");
///
let bs2=document.getElementById("show2");
///
let bs3=document.getElementById("show3");
/////////////
let bh1=document.getElementById("hide1");
///
let bh2=document.getElementById("hide2");
///
let bh3=document.getElementById("hide3");
/////////////
let pp1=document.getElementById("p1");
pp1.style.display="none";
///
let pp2=document.getElementById("p2");
pp2.style.display="none";
///
let pp3=document.getElementById("p3");
pp3.style.display="none";
/////////////
bs1.onclick=function()
{pp1.style.display="block";} ;
///
bs2.onclick=function()
{pp2.style.display="block";} ;
///
bs3.onclick=function()
{pp3.style.display="block";} ;
/////////////
bh1.onclick=function()
{pp1.style.display="none";} ;
bh2.onclick=function()
{pp2.style.display="none";} ;
bh3.onclick=function()
{pp3.style.display="none";} ;
