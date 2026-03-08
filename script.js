const picker = document.getElementById("accentPicker")
const popup = document.getElementById("accentPopup")
const closeBtn = document.getElementById("closePopup")

let popupShown = false

picker.addEventListener("input",()=>{

document.documentElement
.style
.setProperty("--accent-color",picker.value)

if(!popupShown){

popup.classList.add("show")
popupShown = true

}

})

closeBtn.addEventListener("click",()=>{
popup.classList.remove("show")
})

popup.addEventListener("click",(e)=>{
if(e.target === popup){
popup.classList.remove("show")
}
})

/* SHAPE SCROLL */

const shapes=document.querySelectorAll(".shape")

window.addEventListener("scroll",()=>{

let scroll=window.scrollY

shapes.forEach((shape,i)=>{

let speed=(i+1)*0.25

shape.style.transform=
`translateY(${scroll*speed}px) rotate(${scroll*0.06}deg)`

})

})
