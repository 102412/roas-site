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

const speed=0.1+(i*0.05)
const direction=i%2===0?1:-1

shape.style.transform=
`translateY(${scroll*speed*direction}px) rotate(${scroll*0.04*direction}deg)`

})

})
