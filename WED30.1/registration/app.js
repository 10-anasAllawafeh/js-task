`use strict`
regform=[];

callFromLocalStorage();

function registration()
{
    
    let name= document.getElementById("t1").value;
    let uname= document.getElementById("t3").value;
    let email= document.getElementById("t2").value;
    let email1= document.getElementById("t6").value;
    let birthday= document.getElementById("t7").value;
    let pwd= document.getElementById("t4").value;           
    let cpwd= document.getElementById("t5").value;
    
    //email id expression code
    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let capital=/[A_Z]/;

    if(name=='')
    {
        alert('Please enter your first name');
    }
    else if(!letters.test(name))
    {
        alert('First name field required only alphabet characters');
    }
    else if(uname=='')
    {
        alert('Please enter your last name.');
    }
    else if(!letters.test(uname))
    {
        alert('Last name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(email1=='')
    {
        alert('Please enter Email confirmation');
    }
    else if (email1 != email)
    {
        alert('email does not match');
    }
    
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd) && !capital.test(pwd[0]))

    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("t5").value.length < 8)
    {
        alert ('Password minimum length is 8');
    }
    else if(document.getElementById("t5").value.length > 32)
    {
        alert ('Password max length is 32');
    }
    else
    {                                           
           alert('Thank You for Registration');
    }
    regform.push(name,uname,email,birthday);
    storeInLocalStorage();
    
}


function storeInLocalStorage(){
    let stringArray=JSON.stringify(regform);
    // console.log(stringArray);
    localStorage.setItem("data1",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data1");
    // console.log(dataObj,"typeOf dataObj ",typeof dataObj);

    let arrayString=JSON.parse(dataObj);
    // console.log(arrayString,"arrayString");
    if(arrayString != null){
        regform=arrayString;
        // renderOrder(); 
    }
}


