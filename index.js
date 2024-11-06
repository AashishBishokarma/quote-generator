// function asyncFun1() {
//   return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data1");
//       resolve("sucess1")
//     },3000)
//   });
// }

// function asyncFun2() {
//   return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data2");
//       resolve("sucess2")
//     },3000)
//   });
// }

// //Promise Chain
// console.log("fetching data1");
//  asyncFun1().then(()=>{
//   console.log("fetching data2");
//   asyncFun2().then((res)=>{})
// })



// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   reject("some error");
// });

// console.log(promise);
// const getPromise = () => {
//   return new Promise ((resolve, reject)=>{
//     console.log("i am promise");
//     // resolve("sucessful");
//     // reject("network error")
//   })
// }

// let promise = getPromise() ;
// promise.then((res)=>{
//   console.log("promise fullfilled",res)
// })


// promise.catch((ma)=>{
//   console.log("rejected" , ma);
// })

async function hello(){
  console.log("madarchod");
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess");
      // reject("error");
      
    }, 2000);
  });
}

// getData(1).then((res)=>{
//   return getData(2)
// }).then((res)=>{
//   return getData(3);
// }).then((res)=>{
//   console.log(res)
// })



// import list from './data.js';

// let quote = document.getElementById("quote");
// let author = document.getElementById("author");
// let btn = document.getElementById("btn");

// function randomClick() {

//   const randomIndex = Math.floor(Math.random() * list.length);

//   const item = list[randomIndex];

//   quote.innerText = item.line1;
//   author.innerText = item.author;
// }

// btn.addEventListener("click",randomClick);
