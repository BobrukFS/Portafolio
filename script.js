`use strict`
//Menu
let menuButton = document.getElementsByClassName("header__button");
let menuButtonCondition = false;
let menuNav = document.getElementsByClassName("menu");
let barraMiddle = document.getElementsByClassName("button__icon");


menuButton[0].addEventListener("click", (e) => {
    if (menuButtonCondition === false) {
        menuNav[0].setAttribute("class","menu active");
        barraMiddle[0].style.background = "white";
        menuButton[0].setAttribute("class", "on header__button");
        menuButtonCondition = true;
    } else {
        menuNav[0].setAttribute("class", "menu")
        barraMiddle[0].style.background = "#333333";
        menuButton[0].setAttribute("class", "off header__button");
        menuButtonCondition = false;
    }
    e.stopPropagation();
});

menuButton[0].addEventListener("click", (e)=>{
    
});

// Cartas

let carta = document.getElementsByClassName("card");
let fig = document.getElementsByClassName("card__figcaption");
let img = document.getElementsByClassName("card__img");
let active = document.getElementsByClassName("active");
let active1 = document.getElementsByClassName("active1");
let icons = document.getElementsByClassName("card__nav");

for (let i = 0; i < carta.length; i++) {

    img[i].addEventListener("click", (e)=> {
        if ((active.length > 0 || active1.length > 0) && carta[i] !== active1[0]) {
            active[0].classList.remove("active");
            active1[0].classList.remove("active1");
            fig[i].classList.add("active");
            carta[i].classList.add("active1");
        } else {
            fig[i].classList.add("active");
            carta[i].classList.add("active1");
        }
        e.stopPropagation();
    });
    
}

for(let i = 0 ; i < icons.length; i++){
  icons[i].addEventListener("click", (e)=>{  
        e.stopPropagation();
    })  
}

window.addEventListener("click", function(){
    if (active.length > 0){
        active[0].classList.remove("active");
        active1[0].classList.remove("active1");
    }

});
