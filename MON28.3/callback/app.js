`use strict`;


const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
      let output = '';
      posts.map((post, index) => {
          output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
  }, 1000)
}

function creatPost(post, callback) {
  setTimeout(() => {
      posts.push(post);
      callback();
  }, 2000);
}
getPosts();
creatPost({ title: 'Post Three', body: 'this is post three' }, getPosts);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// //add promise //////
// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
//   setTimeout(() => {
//       let output = '';
//       posts.map((post, index) => {
//           output += `<li>${post.title}</li>`;
//       });
//       document.body.innerHTML = output;
//   }, 1000)
// }

// function creatPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       let error =false;
//       if(!error){
//         resolve();
        
//       }
//       else{
//           reject(`Error:Something went wrong`);
//       }
//   }, 2000);

//   });    
// }

// creatPost({title: "Post Three" , body:"This is post three"}).then(getPosts);



/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// let divanswer=document.getElementById("result");
// let inputElement=document.getElementById("input");
// let actButton=document.getElementById("submit");
// let formo=document.getElementById("formo")


// // formo.addEventListener("submit",handleSubmit);
// // function handleSubmit(weather) {
// //   weather.preventDefault();
// weather=new Promise((resolve,reject) =>{
// // this.actButton.addEventListener('click')
//     if (inputElement.value == "Sure") {
//         resolve("it will be succefull trip");
//     }
//     // if (inputElement.value == "Careless") {
//     //     reject();
//     //  }
//       else {
//         reject("you will be dissappointed");
//         // divanswer.innerHTML="";
//     }
// });
// // };

// weather.
// then((successMessage) => {
//   divanswer.innerHTML=successMessage;
// }).
// catch ((errorMessage) => {
//   divanswer.innerHTML=errorMessage;
// });

// weather();