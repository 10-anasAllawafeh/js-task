`use strict`
let formDiv= document.getElementById("mobForm");
let thElement=document.getElementById("headTa");
let tbElement=document.getElementById("boadTa");
let locName=document.getElementById("locName").value;
let userfor=[];

///////////////////////////////////////////////////////////////////////////////
function storeInLocalStorage(){
    let stringArray=JSON.stringify(userfor);
    localStorage.setItem("data",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    // console.log(dataObj,"typeOf dataObj ",typeof dataObj);

    let arrayString=JSON.parse(dataObj);
    console.log(arrayString,"arrayString");
    if(arrayString != null){
        userfor=arrayString;
        // renderOrder(); 
    }
    renderType(); 
}
callFromLocalStorage();
// ///////////////////////////////////////////////////////////////////////////
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
    console.log(userfor);
}
////////////////////////////////////////////////////////////////////////////////
function priceMob(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}


////////////////////////////////////////////////////////////////////////////////
formDiv.addEventListener("submit",function(event){
 
    event.preventDefault();
    // console.log(event.target);
    let useName=event.target.useName.value;
    // console.log(useName);
    
    let typeNameD=event.target.typeNameD.value;
    // console.log(typeNameD);

    new phone(useName,typeNameD);
    console.log(phone);

 });
////////////////////////////////////////////////////////////////////////////////
//  handleSubmit();

 function renderType() {
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

      localStorage.setItem(userfor[i].useName, JSON.stringify(userfor));
    //   localStorage.getItem(userfor[i].useName);
    }
    //  return this.cusName+"has ordered "+this.drinkType
  }

  ////////////////////////////////////////////////////////////////////
///////////////////LOcation Form/////////////////////////////////////
/////////////////////////////////////////////////////////////////////


let locElement=document.getElementById("locForm");
let locpara=document.getElementById("cityResult");
let button=document.getElementById("submit2");
locElement.addEventListener("submit", function(event){
    event.preventDefault();
    city=event.target.locName.value;
    getData(city);
  });
    async function getData(x) {
    let responce= await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.5fdf7554df7d097ac56a7287ed04a614&q=${x}&format=json`);
    let data= await responce.json();
    console.log(data[0]);
    locpara.innerHTML=`City name is :${data[0].display_name.split(",",2)} || Longitude is :${data[0].lon} || latitude is:${data[0].lat}`;
    document.querySelector(`#img`).src=data[0].icon
};




