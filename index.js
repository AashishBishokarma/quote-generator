import list from './data.js';

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");





function randomClick() {
  // Get a random index from 0 to list.length - 1
  const randomIndex = Math.floor(Math.random() * list.length);
  // const randomIndex = (Math.random(0,list.length));
  const item = list[randomIndex];

  // Update the quote and author with the random item's data
  quote.innerText = item.line1;
  author.innerText = item.author;
}

btn.addEventListener("click",randomClick);

// const url = "https://api.quotable.io/random";

// let getQuote = () =>{
//   fetch(url)
//   .then(data => data.json())
//   .then((item)=>{
//     console.log(item);
//   })
// }

// window.addEventListener("load",getQuote);
// fetch('https://reqres.in/api/users/23',{
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json'
//   },
//   body:JSON.stringify({
//     name:'User 2'
//   })
// })
//   .then(res =>{
//     return res.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log("Error"))