`use strict`
console.log("if else :");
let student={
    anas:80,
    ali:77,
    obada:88,
    ammar:95,
    aws:68,
}
let sum=student.anas+student.ali+student.obada+student.ammar+student.aws;
let avg=sum/5
if (avg<60) {
    console.log("F");
} else {
    if (avg<70) {
        console.log("D");
    } else {
        if (avg<80) {
            console.log("C");
        } else {
            if (avg<90) {
                console.log("B");
            } else {
                console.log("A");  
            }  
        }
    }   
}
