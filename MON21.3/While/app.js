`use strict`;
console.log('Here is : While');
//1
function subtract(num) {
    while (num > 0) {
        let nom = num-1;
        console.log(`${num-nom}-`);
        num--;  
        
    }
    
}
console.log(subtract(5))