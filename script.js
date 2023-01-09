`use strict`
//Menu
let menuButton = document.getElementsByClassName("header__button");
let menuButtonCondition = false;
let menuNav = document.getElementsByClassName("menu");
let barraMiddle = document.getElementsByClassName("header__buttonicon");

function activate() {
  
    if (menuButtonCondition === false) {
        menuNav[0].setAttribute("class","menu active");
        barraMiddle[0].style.background = "white";
        menuButton[0].setAttribute("class", "blanco header__button");
        menuButtonCondition = true;
    } else {
        menuNav[0].setAttribute("class", "menu")
        barraMiddle[0].style.background = "#4b5780";
        menuButton[0].setAttribute("class", "primario header__button");
        menuButtonCondition = false;
    }

}


menuButton[0].addEventListener("click", activate);

