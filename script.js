

/* scroll orb */

const orb = document.querySelector(".scroll-orb")

window.addEventListener("scroll",()=>{

let scroll = window.scrollY

orb.style.transform =
`translate(-50%, ${scroll * 0.6}px)`

})



/* floating shapes */

document.querySelectorAll(".glass-shape").forEach((shape,i)=>{

let speed = 0.2 + (i*0.1)

window.addEventListener("scroll",()=>{

let y = window.scrollY

shape.style.transform =
`translateY(${y*speed}px) rotate(${y*0.03}deg)`

})

})



/* tilt */

document.querySelectorAll(".tilt").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let rect = card.getBoundingClientRect()

let x = e.clientX - rect.left
let y = e.clientY - rect.top

let centerX = rect.width/2
let centerY = rect.height/2

let rotateX = -(y-centerY)/15
let rotateY = (x-centerX)/15

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`

})

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)"


})
let popupTriggered = false;

function showAccentPopup(){

if(popupTriggered) return;

popupTriggered = true;

document.getElementById("accentPopup").classList.add("show");

}

function closeAccentPopup(){

document.getElementById("accentPopup").classList.remove("show");

}

})

