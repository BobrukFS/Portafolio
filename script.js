`use strict`
//Menu
let menuButton = document.getElementsByClassName("header__button");
let menuButtonCondition = false;
let menuNav = document.getElementsByClassName("menu");
let barraMiddle = document.getElementsByClassName("header__buttonicon");

function activate() {
  
    if (menuButtonCondition === false) {
        menuNav[0].setAttribute("class","menu active");
        menuButtonCondition = true;
    } else {
        menuNav[0].setAttribute("class", "menu")
        menuButtonCondition = false;
    }

}


menuButton[0].addEventListener("click", activate);

