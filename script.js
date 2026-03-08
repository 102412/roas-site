const picker=document.getElementById("accentPicker")
const popup=document.getElementById("accentPopup")
const closeBtn=document.getElementById("closePopup")

let popupShown=false

picker.addEventListener("input",()=>{

document.documentElement
.style.setProperty("--accent-color",picker.value)

if(!popupShown){

popup.classList.add("show")
popupShown=true

}

})

closeBtn.addEventListener("click",()=>{
popup.classList.remove("show")
})

popup.addEventListener("click",(e)=>{
if(e.target===popup){
popup.classList.remove("show")
}
})

/* CURSOR GLOW */

const glow=document.querySelector(".cursor-glow")

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"

})

/* SCROLL GLOW */

const scrollGlow=document.querySelector(".scroll-glow")

let scrollTimer

window.addEventListener("scroll",()=>{

scrollGlow.style.opacity=".25"

clearTimeout(scrollTimer)

scrollTimer=setTimeout(()=>{

scrollGlow.style.opacity="0"

},180)

})

/* SHAPE PARALLAX */

const shapes=document.querySelectorAll(".shape")

window.addEventListener("scroll",()=>{

let scroll=window.scrollY

shapes.forEach((shape,i)=>{

let speed=(i+1)*0.18

shape.style.transform=
`translateY(${scroll*speed}px) rotate(${scroll*0.05}deg)`

})

})
