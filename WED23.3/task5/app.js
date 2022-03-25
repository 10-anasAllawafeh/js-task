`use strict`
let x=document.getElementById("pa1");
let y=document.getElementById("pa2");
function ermsg1() {
    if (x.length<6)
     {let erorr1=document.getElementById("sp1")
     erorr1.style.display="none";}

    else if (x.length===y.length)
     {let erorr2=document.getElementById("sp2")
     erorr2.style.color="red";}
    
    else
    {document.getElementsByTagName("button").style.display="block";}

}

