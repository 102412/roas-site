const picker = document.getElementById("accentPicker");
const popup = document.getElementById("accentPopup");

let popupShown = false;

/* Accent color system */

picker.addEventListener("input", () => {

document.documentElement.style
.setProperty("--accent-color", picker.value);

if(!popupShown){

popup.classList.add("show");
popupShown = true;

}

});

/* Close popup */

function closeAccentPopup(){

popup.classList.remove("show");

}

/* Glass shapes scroll animation */

const shapes = document.querySelectorAll(".shape");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

shapes.forEach((shape, i)=>{

let speed = (i+1)*0.15;

shape.style.transform =
`translateY(${scroll * speed}px) rotate(${scroll * 0.05}deg)`;

});

});
