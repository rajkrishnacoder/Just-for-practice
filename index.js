const btn = document.querySelector('.btn'); 
let test = ["hello",
   {name: 'rajkrishna', 
    age: 20
   }
];//so this way i can do so many things
const dip = "Dip Debnath";
let hello = 0;
console.log(dip);
btn.addEventListener('click', () => {
   hello++
   btn.innerText = hello;
});