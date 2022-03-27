'use strict';
let formOrder= document.getElementById("orderForm");
let ulItem=document.getElementById("order");
let banana=[];///1
let price=Math.ceil(Math.random() * (15 - 3) + 3);


function callFromLocalStorage(){
    let dataObj=localStorage.getItem(banana[i].cusName);
    // console.log(dataObj,"typeOf dataObj ",typeof dataObj);

    let arrayString=JSON.parse(dataObj);
    console.log(arrayString,"arrayString");
    if(arrayString != null){
        banana=arrayString;
        // renderOrder(); 
    }
   renderOrder(); 
}






function Coffee(cusName,cupSize,milkType,isHot,drinkType,price){
    this.cusName=cusName;
    this.cupSize=cupSize;
    this.milkType=milkType;
    this.isHot=isHot;
    this.drinkType=drinkType;
    this.price=price;
      

    banana.push(this);
    renderOrder();
    console.log(banana);
}

formOrder.addEventListener("submit",handleSubmit);
 function handleSubmit(event){
    event.preventDefault();
    // console.log(event.target);
    let cusName=event.target.cusName.value;
    // console.log(cusName);
    
    let cupSize=event.target.cupSize.value;
    // console.log(cupSize);

    let milkType=event.target.milkType.value;
    // console.log(milkType);

    let isHot=event.target.isHot.checked;
    // console.log(isHot);
    
    let drinkType=event.target.drinkType.value;
    // console.log(drinkType);
    ;

  new Coffee(cusName,cupSize,milkType,isHot,drinkType);
  console.log(Coffee);

 }

 handleSubmit();//2

 function renderOrder(){
    //  ulItem.textContent="";
    let liElement=document.createElement("li");
        let parElement=document.createElement("p");
     let hot;

     for (let i = 0; i < banana.length; i++) {
        
        ulItem.appendChild(liElement);
        liElement.appendChild(parElement);
        
        if(banana[i].isHot === true){
            hot="hot"
        }else{
            hot="cold";
        }

        parElement.textContent=`the customer ${banana[i].cusName} has ordered the following: ${banana[i].cupSize}.oz with ${banana[i].milkType} milk. He prefare it ${hot} with ${banana[i].drinkType}. the price will be ${Math.ceil(Math.random() * (15 - 3) + 3)} `;
        // window.localStorage.setItem([banana[i].cupSize.key],[banana[i].cupSize.value]);
        localStorage.setItem(banana[i].cusName, JSON.stringify(banana));
        // localStorage.setItem("users", JSON.stringify(users));



     }
    //  return this.cusName+"has ordered "+this.drinkType
 }