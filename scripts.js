//button menuNav

let menuNav = document.getElementById("menuNav");
let conditionMenu = false;
let buttonNav = document.getElementsByClassName("headerButtons__Buttons--menu");

function openMenu() {
    if (conditionMenu == false) {
        menuNav.style.display = "block";
        conditionMenu = true;
    } else {
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

function modoOscuro() {
    if (conditionTheme == false) {
        iconMoon[0].style.visibility = "hidden";
        iconSun[0].style.visibility = "visible";
        btnTheme[0].style.background = "white";
        conditionTheme = true;

    } else {
        iconSun[0].style.visibility = "hidden";
        iconMoon[0].style.visibility = "visible";
        btnTheme[0].style.background = "var(--secondary)";
        conditionTheme = false;

    }
}

btnTheme[0].addEventListener("click", modoOscuro);

//skills


let btnSkills = document.querySelectorAll(".Desp__btn");
let containerSkills = document.getElementsByClassName("skills__icons")

btnSkills.forEach((cadaPunto, i) => {
    btnSkills[i].addEventListener("click", () => {
        let posicion = i;
        let desplazamiento = posicion * -33.333
        containerSkills[0].style.transform = `translateX(${desplazamiento}%)`;

    });


});




let img = document.querySelectorAll(".imgIcons");
let divImg = document.querySelectorAll(".divImg");
let titulos = ["HTML", "CSS", "Bootstrap", "Sass", "Github", "Javascript"];
let colores = ["#f4470b", "#0068ba", "#754fad", "#ce6b9e", "#000000", "#e9d44d"]
let imagenes = ["html-5.png", "css3.png", "bootstrap.png", "sass.png", "github.png", "js.png"]
let conditionName = false;





img.forEach((cadaImagen, i) => {
    
            divImg[i].addEventListener("mouseenter", () => {
            img[i].style.display = "none";
            divImg[i].innerHTML = `<h2 id="${titulos[i]}">${titulos[i]}</h2>`;
            let h2Img = document.querySelector(`#${titulos[i]}`);
            h2Img.style.color = `${colores[i]}`;
            
        })
})



img.forEach((cadaImagen, i) => {
divImg[i].addEventListener("mouseleave", () => {
        let h2Img = document.querySelector(`#${titulos[i]}`);
        let imagen = `<img class="imgIcons" src="galeria/${imagenes[i]}">`
        h2Img.style.display = "none";
        divImg[i].innerHTML = imagen;
        console.log(img);
    }) 
})
