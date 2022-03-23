function changeFont() {
    let x=document.getElementById("S1").value;
    if (x==1) {
        document.getElementById("text").style.fontFamily="Georgia, 'Times New Roman', Times, serif";
    }
    else if  (x==2) {
            document.getElementById("text").style.fontFamily="Verdana, Geneva, Tahoma, sans-serif"; 
    }
    else if (x==3){
        document.getElementById("text").style.fontFamily="fantasy";
    } 
}

function changeSize() {
    let x=document.getElementById("S2").value;
    if (x==1) {
        document.getElementById("text").style.fontSize="15px";
    }
    else if  (x==2) {
            document.getElementById("text").style.fontSize="30px"; 
    }
    else if (x==3){
        document.getElementById("text").style.fontSize="45px";
    } 
}
// function changestyle1() {
//     let x=document.getElementById("in1").value;
//     let y=document.getElementById("text").style.fontStyle;

//     if(y==="normal"){
//     document.getElementById("text").style.fontStyle="italic";  
//     }
//     else(y==="italic"){
//         document.getElementById("text").style.fontStyle="normal";  
//     }}
    
// function changestyle1() {
//     let x=document.getElementById("in1").value;
//     document.getElementById("text").style.fontWeight="bold";  
// }
// function changestyle1() {
//     let x=document.getElementById("in1").value;
//     document.getElementById("text").style.textDecorationLine="underline";  
// }

function changeItalic() {
    let text = document.getElementById("text");
    let i = document.getElementById("in1").checked;
    text.style.fontStyle = (i ? "italic" : "normal");
}
function changestyle2() {
    let text = document.getElementById("text");
    let i = document.getElementById("in2").checked;
    text.style.fontWeight = (i ? "bold" : "normal");
}
function changestyle3() {
    let text = document.getElementById("text");
    let i = document.getElementById("in3").checked;
    text.style.textDecorationLine = (i ? "underline" : "");
}
