`use strict`;
// let d=document.createElement("div");
// document.body.appendChild(d);
// d.style="width:200px ; height:200px ; background-color:blue";
// let t=["red","green","blue"];
// d.onclick=function () {
    for (let i = 1; i < 4; i++) {
        if (i==1) {
            d.onclick=function () {d.style="width:200px ; height:200px ; background-color:yellow";}
        }
        else if (i==2) {
            d.onclick=function () {d.style="width:200px ; height:200px ; background-color:green";}
        }
        else if (i==3) {
            d.onclick=function () {d.style="width:200px ; height:200px ; background-color:red";}
        }
        // if (i==1) {
        //     d.onclick=function () {d.style="width:200px ; height:200px ; background-color:green";}
        // }
        // if (i==2) {
        //     d.onclick=function () {d.style="width:200px ; height:200px ; background-color:blue";}
            
        // }  
    }  
// }


// let q=document.getElementById("d");

// q.onclick=function () {
//     for (let i = 0; i < 3; i++) {
//         if (i = 0) { d.onclick = function () { d.style = "width:200px ; height:200px ; background-color:yellow"; }; }
//         else if (i = 1) { d.onclick = function () { d.style = "width:200px ; height:200px ; background-color:green"; }; }
//         else if (i = 2) { d.onclick = function () { d.style = "width:200px ; height:200px ; background-color:red"; }; }
//     }
// }
// function color() {
//     let color=this.style.backgroundColor;
//     let cc;

//     switch (color) {
//         case "blue":
//             cc="red";
//             break;
//         case "red":
//             cc="green";
//             break;
//         case "green":
//             cc="blue";
//             break;
//         default:
//             cc="blue"
//             break;
//     }
//     this.style.backgroundColor=cc;
// }
// function inset() {
    
    
// }
