`use strict`
let formDiv= document.getElementById("mobForm");
let thElement=document.getElementById("headTa");
let tbElement=document.getElementById("boadTa");
let userfor=[];

////////////////////////////////////////////////////////////////////////////
// let trElement = document.createElement("tr");
// let tdElement4 = document.createElement("td4");
// let tdElement1 = document.createElement("td1");
// let tdElement2 = document.createElement("td2");
// let tdElement3 = document.createElement("td3");

// thElement.appendChild(trElement);
// trElement.appendChild(tdElement4);
// trElement.appendChild(tdElement1);
// trElement.appendChild(tdElement2);
// trElement.appendChild(tdElement3);

// tdElement4.textContent = `Name`;
// tdElement1.textContent = `type`;
// tdElement2.textContent = `price`;
// tdElement3.textContent = `condition`;
/////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////
function storeInLocalStorage(){
    let stringArray=JSON.stringify(userfor);
    console.log(stringArray);
    localStorage.setItem("data",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    // console.log(dataObj,"typeOf dataObj ",typeof dataObj);

    let arrayString=JSON.parse(dataObj);
    // console.log(arrayString,"arrayString");
    if(arrayString != null){
        userfor=arrayString;
        // renderOrder(); 
    }
    renderType(); 
}
callFromLocalStorage();
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
function phone(useName,typeNameD){
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price=priceMob(50,500);
    let x;
    if (this.price <= 100) {
        x= `used Mobile`;
    } 
    else {
        x= `new Mobile`;
    };
    this.cond= x;
      
    
    userfor.push(this);
    renderType();
    storeInLocalStorage();
    console.log(userfor);
}
////////////////////////////////////////////////////////////////////////////////
function priceMob(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

// function conditon() {
//     let price=phone.price;
//     if (price <= 100) {
//         return `used Mobile`;
//     } 
//     else {
//         return `new Mobile`;
//     }
// }

////////////////////////////////////////////////////////////////////////////////
formDiv.addEventListener("submit",handleSubmit);
 function handleSubmit(event){
    event.preventDefault();
    // console.log(event.target);
    let useName=event.target.useName.value;
    // console.log(useName);
    
    let typeNameD=event.target.typeNameD.value;
    // console.log(typeNameD);

    new phone(useName,typeNameD);
    console.log(phone);

 }
////////////////////////////////////////////////////////////////////////////////
 handleSubmit();

 ////////////////////////////////////////////////////////////////////////////////

 ///////////////////////////////////////////////////////////////////////////////
 function renderType() {
    //  let tdElement1=document.getElementById("td1");
    //  let tdElement2=document.getElementById("td2");
    //  let tdElement3=document.getElementById("td3");
    //  let tdElement4=document.getElementById("td4");
    let trElement = document.createElement("tr");
    let tdElement4 = document.createElement("td");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");
  
    for (let i = 0; i < userfor.length; i++) {
      tbElement.appendChild(trElement);
      trElement.appendChild(tdElement4);
      trElement.appendChild(tdElement1);
      trElement.appendChild(tdElement2);
      trElement.appendChild(tdElement3);
  
      tdElement4.textContent = userfor[i].useName;
      tdElement1.textContent = userfor[i].typeNameD;
      tdElement2.textContent = userfor[i].price;
      tdElement3.textContent = userfor[i].cond;

    //   localStorage.setItem(userfor[i].useName, JSON.stringify(userfor));
    //   localStorage.getItem(userfor[i].useName);
    }
    //  return this.cusName+"has ordered "+this.drinkType
  }