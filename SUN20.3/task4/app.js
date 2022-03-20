
let xs=prompt("enter x");
let ys=prompt("enter y");
let zs=prompt("enter z");
let x=Number(xs);
let y=Number(ys);
let z=Number(zs)
 
if (x % 15 ==0) {
    console.log(`${x} is Fuzz Buzz`);
    document.getElementById("demo").innerHTML=`${x} is Fuzz Buzz`;
    
} else { if (x % 3 ==0) {
    console.log(`${x} is Fuzz`);
    document.getElementById("demo").innerHTML=`${x} is Fuzz`;
    
} else { if (x % 5 ==0) {
    console.log(`${x} is Buzz`);
    document.getElementById("demo").innerHTML=`${x} is Buzz`;
    
} else { 
    console.log(`${x} is not Devidable`);
    document.getElementById("demo").innerHTML=`${x} is not Devidable`;   

}   

}    

}




if (y % 15 ==0) {
    console.log(`${y} is Fuzz Buzz`);
    document.getElementById("femo").innerHTML=`${y} is Fuzz Buzz`;
    
} else { if (y % 3 ==0) {
    console.log(`${y} is Fuzz`);
    document.getElementById("femo").innerHTML=`${y} is Fuzz`;
    
} else { if (y % 5 ==0) {
    console.log(`${y} is Buzz`);
    document.getElementById("femo").innerHTML=`${y} is Buzz`;
    
} else { 
    console.log(`${y} is not Devidable`);
    document.getElementById("femo").innerHTML=`${y} is not Devidable`;  

}   

}   

}




if (z % 15 ==0) {
    console.log(`${z} is Fuzz Buzz`);
    document.getElementById("nemo").innerHTML=`${z} is Fuzz Buzz`;
    
} else { if (z % 3 ==0) {
    console.log(`${z} is Fuzz`);
    document.getElementById("nemo").innerHTML=`${z} is Fuzz`;
    
} else { if (z % 5 ==0) {
    console.log(`${z} is Buzz`);
    document.getElementById("nemo").innerHTML=`${z} is Buzz`;
    
} else { 
    console.log(`${z} is not Devidable`);
    document.getElementById("nemo").innerHTML=`${z} is not Devidable`;   

}   

}   

}


