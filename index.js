const btn = document.querySelector('.btn');
const myDiv = document.querySelector('.myDiv');

//now i am gonna show create a div child using js. this is my first time by my own;


const myTxt = () => {
  const divChild = document.createElement('p');
  divChild.classList.add('name');
  const txt = document.createTextNode('Hello World');
  divChild.appendChild(txt);
  myDiv.appendChild(divChild);
}
btn.addEventListener('click', myTxt);
// setInterval(myTxt, 1000);
let snakeArr = [
    {x: 13, y: 15}
  ];
snakeArr.forEach((e, index) => {
   console.log(e.y);
})
