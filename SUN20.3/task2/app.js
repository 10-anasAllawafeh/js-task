let x=prompt("Please insert a number between 1 to 7")
let y=Number(x)

switch (y) {
    case 1:
        t="Day Name = Sunday";
        break;
    case 2:
        t="Day Name = Monday";
        break;
    
    case 3:
        t="Day Name = Tuesday";
        break;
    case 4:
        t="Day Name = Wednesday"; 
        break;
    case 5:
        t="Day Name = Thursday";
        break;
    case 6:
        t="Day Name = Friday";
        break;
    case 7:
        t="Day Name = Satday";
        break;
    

    default:
        t= "Wrong Value";
        break;
}
console.log(t);
document.getElementById("day").innerHTML = t;