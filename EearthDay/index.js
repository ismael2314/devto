
var html = document.querySelector("html");
var header = document.querySelector("header");
var section = document.querySelector("section");
var artictle = document.querySelector("article");
var footer = document.querySelector("footer");

console.log(footer.innerText)
const ul = document.querySelector('ul')
const ulContent =  Array.from(ul.children);
console.log(ulContent,"io")
ulContent.forEach(child =>{
    const duplicate = child.cloneNode(true)
    duplicate.setAttribute("aria-hidden",true);
    ul.appendChild(duplicate)
})
const p = document.createElement('p');
const cw = document.createElement('p');
p.innerText=footer.innerText;
cw.innerHTML="All rights reserved 2024 &copy; ismael yusuf"
cw.classList.add('cw')
p.classList.add('footer')
footer.innerText=""
footer.appendChild(p);
footer.appendChild(cw)

var button = document.createElement('Button')

ul.forEach