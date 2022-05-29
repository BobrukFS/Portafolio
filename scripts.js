//button menuNav

let menuNav = document.getElementById("menuNav");
let conditionMenu = false;
let buttonNav = document.getElementsByClassName("headerButtons__Buttons--menu");

function openMenu () {
    if(conditionMenu == false){
        menuNav.style.display = "block";
        conditionMenu = true;
    }else{
        menuNav.style.display = "none";
        conditionMenu = false;
    }
}

buttonNav[0].addEventListener("click", openMenu);



//button theme


let conditionTheme = false;
let iconMoon = document.getElementsByClassName("fa-moon");
let iconSun = document.getElementsByClassName("fa-sun");
let btnTheme = document.getElementsByClassName("headerButtons__Buttons--theme");

function modoOscuro(){
if(conditionTheme == false){
    iconMoon[0].style.visibility = "hidden";
    iconSun[0].style.visibility = "visible";
    conditionTheme = true;

}else{
    iconSun[0].style.visibility = "hidden";
    iconMoon[0].style.visibility = "visible";
    conditionTheme = false;
}
}

btnTheme[0].addEventListener("click", modoOscuro);

//skills


let btnSkills = document.querySelectorAll(".Desp__btn");
let containerSkills = document.getElementsByClassName("skills__icons")

btnSkills.forEach((cadaPunto,i) => {
    btnSkills[i].addEventListener("click", ()=> {
        let posicion = i;
        let desplazamiento = posicion * -50
        containerSkills[0].style.transform = `translateX(${desplazamiento}%)`;

    });
    

});



//Esto funciona mal ya que hay que tocarlas por orden, esto es solo para la pagina web. 

/*
let img = document.querySelectorAll(".imgIcons");
let divImg = document.querySelectorAll(".divImg");
let titulos = ["HTML", "CSS", "Bootstrap"];
let colores = ["orange", "green", "violet"]

img.forEach((cadaImagen, i) =>{
    img[i].addEventListener("mouseenter", ()=>{
        
        img[i].style.display = "none";
        divImg[i].innerHTML = `<h2>${titulos[i]}</h2>`;
        let h2Img = document.querySelectorAll(`div.divImg > h2`)
        h2Img[i].setAttribute("id", `${titulos[i]}`);
        console.log(divImg[i]);
        h2Img[i].style.color = `${colores[i]}`;

        


    })
})*/