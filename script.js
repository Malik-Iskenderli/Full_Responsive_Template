const hamburger= document.querySelector("#hamburger");
const ul = document.querySelector(".page-link-ul").cloneNode(1); //kopyaladim clone
const popup = document.querySelector(".popup");

hamburger.addEventListener('click', (e)=>{
e.preventDefault();
hamburger.classList.toggle("active");
popup.classList.toggle("active");
popup.appendChild(ul);
});

