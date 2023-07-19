`use strict`
let header = document.getElementsByClassName("header");
let introduce = document.getElementsByClassName("introduce");
let social = document.getElementsByClassName("social");
let prevScrollPos = window.pageYOffset;
let enlaces = document.getElementsByClassName("menu__enlaces");
let menuButton = document.getElementsByClassName("button");
let headerImg = document.getElementsByClassName("header__img");
// Preloader

let preloader = document.getElementsByClassName("preloader");

let preloader1 = document.getElementsByClassName("preloader__li");
window.addEventListener("load", function () {

        for(let i = 0; i < preloader1.length; i++){
            preloader1[i].style.animationIterationCount = "1";
            
        }
      

        setTimeout(() => {
            preloader[0].style.display = "none";
            introduce[0].classList.add("salto");   
            document.documentElement.style.overflowY = "auto";
            header[0].style.animation = "transp 1s linear";
            headerImg[0].style.animation = "transp 1s forwards";
            menuButton[0].style.animation = "transp 1s forwards";
            let total = 0;
            for(let i = 0; i < enlaces.length; i++){
                enlaces[i].style.animation = "transp 1s forwards"; 
                enlaces[i].style.animationDelay = `${total}s`;
                total += 0.1;
            }


    
        
        }, 3250)
  
});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  

//Header


function scrolls() {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos && window.pageYOffset !== 0) {

        header[0].classList.replace("scrollbottom", "scrolltop");

    } else if (prevScrollPos > currentScrollPos && window.pageYOffset === 0) {
        header[0].classList.remove("scrolltop");

    } else if (prevScrollPos < currentScrollPos) {
        header[0].classList.add("scrollbottom");
    }
    prevScrollPos = currentScrollPos;
}


window.addEventListener("scroll", scrolls);


for(let j = 0; j < enlaces.length; j++){
    enlaces[j].addEventListener("click", (e) => {
        e.preventDefault();
        const seccion = document.querySelector(enlaces[j].getAttribute("href"));
        seccion.scrollIntoView({behavior: "smooth"});
    });
}


//Menu

let menuButtonCondition = false;
let menuNav = document.getElementsByClassName("menu");
let barraMiddle = document.getElementsByClassName("button__icon");
let main = document.querySelector("main");


menuButton[0].addEventListener("click", (e) => {
    if (menuButtonCondition === false) {
        menuNav[0].setAttribute("class", "menu active");
        barraMiddle[0].style.background = "white";
        menuButton[0].setAttribute("class", "on button");
        main.style.filter = "blur(5px)";
        document.documentElement.style.overflow = "hidden";
        menuButtonCondition = true;
    } else {
        menuNav[0].setAttribute("class", "menu")
        barraMiddle[0].style.background = "#333333";
        menuButton[0].setAttribute("class", "off button");
        main.style.filter = "blur(0px)";
        document.documentElement.style.overflow = "auto";
        menuButtonCondition = false;
    }
    e.stopPropagation();
});

for (let i = 0; i < enlaces; i++) {
    enlaces[i].addEventListener("click", () => {
        document.documentElement.style.overflow = "auto";
    })
}

// Aboutme

let button = document.querySelectorAll(".experience__tittles > h3");
let expdiv = document.getElementsByClassName("experience__div")
let expbtnactive = document.getElementsByClassName("btn-exp-active");
let h3Skills = document.getElementsByClassName("skills__h3");
let h3Study = document.getElementsByClassName("study__h3");
let divSkills = document.getElementsByClassName("skills__div");
let skiActive = document.getElementsByClassName("skillsactivado");
let divStudy = document.getElementsByClassName("study__items");

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", () => {

        if (button[i].classList[0] === "experience__btn-skills") {
            expbtnactive[0].classList.remove("btn-exp-active");
            button[i].classList.add("btn-exp-active");
            expdiv[0].classList.replace("study", "skills")
            expdiv[0].classList.replace("jobs", "skills")
            expdiv[0].innerHTML = `
            <div class="skills__tittles">
            <h3 tabindex="0" class="skills__h3 skills-frontend skillsactivado">FrontEnd</h3>
            <h3 tabindex="0" class="skills__h3 skills-backend">BackEnd</h3>
            <h3 tabindex="0" class="skills__h3 skills-tools">Tools</h3>
        </div>
        <div class="skills__div">
        <ul class="skills__ul">
        <li><i class="fa-brands fa-html5 skills__icon"></i><p class="skills__p">HTML</p></li>
        <li><i class="fa-brands fa-css3-alt skills__icon"></i><p class="skills__p">CSS</p></li>
        <li><i class="fa-brands fa-sass skills__icon"></i><p class="skills__p">Sass</p></li>
        <li><i class="fa-brands fa-bootstrap skills__icon"></i><p class="skills__p">BootStrap</p></li>
        <li><i class="fa-brands fa-js skills__icon"></i>
            <p class="skills__p">Javascript</p>
        </li>
        <li><i class="fa-brands fa-react skills__icon">

            </i>
            <p class="skills__p">ReactJs</p>
        </li>
        
    </ul>
                    </div>`;

            h3Skills[0].classList.add("skillsactivado");
            for (let j = 0; j < h3Skills.length; j++) {
                h3Skills[j].addEventListener("click", () => {
                    if (h3Skills[j].classList[1] === "skills-frontend") {
                        skiActive[0].classList.remove("skillsactivado");
                        h3Skills[j].classList.add("skillsactivado");
                        divSkills[0].innerHTML = `
                        <ul class="skills__ul ">
                        <li><i class="fa-brands fa-html5 skills__icon"></i><p class="skills__p">HTML</p></li>
                        <li><i class="fa-brands fa-css3-alt skills__icon"></i><p class="skills__p">CSS</p></li>
                        <li><i class="fa-brands fa-sass skills__icon"></i><p class="skills__p">Sass</p></li>
                        <li><i class="fa-brands fa-bootstrap skills__icon"></i><p class="skills__p">BootStrap</p></li>
                        <li><i class="fa-brands fa-js skills__icon"></i>
                            <p class="skills__p">Javascript</p>
                        </li>
                        <li><i class="fa-brands fa-react skills__icon">
                
                            </i>
                            <p class="skills__p">ReactJs</p>
                        </li>
    
                    </ul>
                        `;
                    } else if (h3Skills[j].classList[1] === "skills-backend") {
                        divSkills[0].innerHTML = `<ul class="skills__ul listbackend">
                    
                        <li><i class="fa-brands fa-react skills__icon">
            
                            </i>
                            <p class="skills__p">SQL</p>
                        </li>
                     
                    </ul>
                `;
                        skiActive[0].classList.remove("skillsactivado");
                        h3Skills[j].classList.add("skillsactivado");
                    } else if (h3Skills[j].classList[1] === "skills-tools") {
                        divSkills[0].innerHTML = ` 
              
                   
                     <ul class="skills__ul listbackend">
                        <li><i class="fa-brands fa-github skills__icon"></i>
                            <p class="skills__p">Git</p>
                        </li>
                       
                    </ul>
                  `;
                        skiActive[0].classList.remove("skillsactivado");
                        h3Skills[j].classList.add("skillsactivado");
                    }
                })
            }

        } else if (button[i].classList[0] === "experience__btn-estudios") {
            expbtnactive[0].classList.remove("btn-exp-active");
            button[i].classList.add("btn-exp-active");
            expdiv[0].classList.replace("skills", "study")
            expdiv[0].classList.replace("jobs", "study")
            expdiv[0].innerHTML = `<div class="study__tittles">
            <h3 tabindex="0" class="study__h3 study-progreso">En progreso</h3>
            <h3 tabindex="0" class="study__h3 study-completos">Completos</h3>
        </div>

        <div class="study__items">
            <ul>
            <li><p>Estudiante de Informatica en universidad de Quilmes</p></li>
            <li><p>Desarrollador Front-end Digitalers</p></li>
            <li><p>Desarrollador Full-Stack Fundacion Pescar</p></li>
            </ul>
        </div>`;
            h3Study[0].classList.add("skillsactivado");
            for (let j = 0; j < h3Study.length; j++) {
                h3Study[j].addEventListener("click", () => {
                    if (h3Study[j].classList[1] === "study-progreso") {
                        skiActive[0].classList.remove("skillsactivado");
                        h3Study[j].classList.add("skillsactivado");
                        divStudy[0].innerHTML = `
                    <ul>
                    <li><p>Estudiante de Informatica en universidad de Quilmes</p></li>
                    <li><p>Desarrollador Front-end Digitalers</p></li>
                    <li><p>Desarrollador Full-Stack Fundacion Pescar</p></li>
                </ul>
                    `
                    } else if (h3Study[j].classList[1] === "study-completos") {
                        skiActive[0].classList.remove("skillsactivado");
                        h3Study[j].classList.add("skillsactivado");
                        divStudy[0].innerHTML = `<ul>
                    <li><p>Estudios secundarios</p></li>
                </ul>`;
                    }
                })
            }

        } else if (button[i].classList[0] === "experience__btn-jobs") {
        
            expbtnactive[0].classList.remove("btn-exp-active");
            button[i].classList.add("btn-exp-active");
      
            expdiv[0].classList.replace("skills", "jobs")
            expdiv[0].innerHTML = `<div class="jobs__div">
            <div class="categoria__lane"><p class="jobs__p">En busca de mi primer experiencia</p>
                <img src="Img/4401280.jpg" class="jobs__img">
                <a href="contact.html" class="jobs__btn">Contactame</a>
            </div>
        </div>`;
        }
    });

}



for (let j = 0; j < h3Skills.length; j++) {
    h3Skills[j].addEventListener("click", () => {
        if (h3Skills[j].classList[1] === "skills-frontend") {
            skiActive[0].classList.remove("skillsactivado");
            h3Skills[j].classList.add("skillsactivado");
            divSkills[0].innerHTML = `
            <ul class="skills__ul">
            <li><i class="fa-brands fa-html5 skills__icon"></i><p class="skills__p">HTML</p></li>
            <li><i class="fa-brands fa-css3-alt skills__icon"></i><p class="skills__p">CSS</p></li>
            <li><i class="fa-brands fa-sass skills__icon"></i><p class="skills__p">Sass</p></li>
            <li><i class="fa-brands fa-bootstrap skills__icon"></i><p class="skills__p">BootStrap</p></li>
            <li><i class="fa-brands fa-js skills__icon"></i>
                <p class="skills__p">Javascript</p>
            </li>
            <li><i class="fa-brands fa-react skills__icon">

                </i>
                <p class="skills__p">ReactJs</p>
            </li>
           
        </ul>
            `
        } else if (h3Skills[j].classList[1] === "skills-backend") {

            skiActive[0].classList.remove("skillsactivado");
            h3Skills[j].classList.add("skillsactivado");
            divSkills[0].innerHTML = ` <ul class="skills__ul listbackend">
           
            <li><i class="fa-brands fa-react skills__icon">

                </i>
                <p class="skills__p">SQL</p>
            </li>
          
        </ul>`
        } else if (h3Skills[j].classList[1] === "skills-tools") {
            skiActive[0].classList.remove("skillsactivado");
            h3Skills[j].classList.add("skillsactivado");
            divSkills[0].innerHTML = `  <ul class="skills__ul listbackend">
            <li><i class="fa-brands fa-github skills__icon"></i>
                <p class="skills__p">Git</p>
            </li>
           
        </ul>`
        }
    })
}
















// Cartas

let carta = document.getElementsByClassName("card");
let fig = document.getElementsByClassName("card-figcaption");
let img = document.getElementsByClassName("card__img");
let active = document.getElementsByClassName("active");
let active1 = document.getElementsByClassName("active1");
let icons = document.getElementsByClassName("card-figcaption-nav");

for (let i = 0; i < carta.length; i++) {

    img[i].addEventListener("click", (e) => {
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

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

window.addEventListener("click", function () {
    menuNav[0].setAttribute("class", "menu")
    barraMiddle[0].style.background = "#333333";
    menuButton[0].setAttribute("class", "off button");
    main.style.filter = "blur(0px)";
    document.documentElement.style.overflow = "auto";
    menuButtonCondition = false;
    if (active.length > 0) {
        active[0].classList.remove("active");
        active1[0].classList.remove("active1");
    }

});

//Article

let btnprojects = document.getElementsByClassName("projects__btn");
let projectArticles = document.getElementsByClassName("articles");
btnprojects[0].addEventListener("click", (e) => {
    if (btnprojects[0].classList[1] === "less") {
        projectArticles[0].insertAdjacentHTML("beforeend", `
        
   
                    <div class="article">
                    <div>
                        <nav class="article__nav">
                            <i
                                class="fa-solid fa-folder article__icon article__icon--folder"></i>
                            <div>
                                <a href="https://github.com/BobrukFS/Fundacion-Pescar-y-Digitalers/tree/main/Modulo-1.2" target="_blank"><i
                                        class="fa-brands fa-github  article__icon "></i></a>
                                <a href="https://bobrukfs.github.io/Fundacion-Pescar-y-Digitalers/Modulo-1.2/src" target="_blank"><i
                                        class="fa-solid fa-globe article__icon "></i></a>
                            </div>
                        </nav>
                        <p>Terminado</p>
                        <h4>Pagina tributo</h4>
                      
                        <p>Pagina tributo de un videojuego llamado "A plague tale"</p>
                        </div>
                        <div>
                        <p class="article__tec">HTML - CSS</p>
</div>
                    </div>

                    <div class="articles">
                    <div class="article">
                    <div>
                        <nav class="article__nav">
                            <i
                                class="fa-solid fa-folder article__icon article__icon--folder"></i>
                            <div>
                                <a href="https://github.com/BobrukFS/Fundacion-Pescar-y-Digitalers/tree/main/Modulo-2.1" target="_blank"><i
                                        class="fa-brands fa-github  article__icon "></i></a>
                                <a href="https://bobrukfs.github.io/Fundacion-Pescar-y-Digitalers/Modulo-2.1/src" target="_blank"><i
                                        class="fa-solid fa-globe article__icon  "></i></a>
                            </div>
                        </nav>     
                        <p>En proceso</p>
                        <h4>Libreria</h4>
                   
                        <p>Pagina de un libreria, responsive web</p>
                        </div>
                        <div>
                        <p class="article__tec">HTML - CSS - Bootstrap - Javascript</p>
                        </div>
                    </div>

                
        `);
        btnprojects[0].textContent = "Ver menos";
        btnprojects[0].classList.replace("less", "more");
    } else if (btnprojects[0].classList[1] === "more") {
        projectArticles[0].innerHTML = `

        <div class="article">
        <div>
            <nav class="article__nav">
                <i class="fa-solid fa-folder article__icon article__icon--folder "></i>
                <div>
                    <a href="https://github.com/BobrukFS/Proyectos-Frontend/tree/main/rating-component"
                        target="_blank"><i class="fa-brands fa-github  article__icon  "></i></a>
                    <a href="https://bobrukfs.github.io/Proyectos-Frontend/rating-component/src/"
                        target="_blank"><i class="fa-solid fa-globe article__icon  "></i></a>
                </div>
            </nav>
            <p>Terminado</p>
            <h4>Componente Rating</h4>

            <p>Es un componente para dar una valoracion de la aplicacion o pagina web</p>
        </div>
        <div>
        <p class="article__tec">HTML - CSS - Javascript</p>
    </div>
    </div>

    <div class="article">

        <div>
            <nav class="article__nav">
                <i class="fa-solid fa-folder article__icon article__icon--folder "></i>
                <div>
                    <a href="https://github.com/BobrukFS/Web-Clima" target="_blank"><i
                            class="fa-brands fa-github  article__icon  "></i></a>
                    <a href="https://bobrukfs.github.io/Web-Clima/" target="_blank"><i
                            class="fa-solid fa-globe article__icon  "></i></a>
                </div>
            </nav>

            <p>En proceso</p>
            <h4>Web clima</h4>

            <p>Pagina de clima que consume la API de openweathermap, es responsive web.</p>
        </div>
        <div>
            <p class="article__tec">HTML - CSS - SASS - Javascript</p>
        </div>
    </div>

    <div class="article">
        <div>
            <nav class="article__nav">
                <i class="fa-solid fa-folder article__icon article__icon--folder "></i>
                <div>
                    <a href="https://github.com/BobrukFS/aquario" target="_blank"><i
                            class="fa-brands fa-github  article__icon  "></i></a>
                    <a href="#" target="_blank"><i class="fa-solid fa-globe article__icon  "></i></a>
                </div>
            </nav>
            <p>En proceso</p>
            <h4>Aquario</h4>

            <p>Campus virtual para los estudiantes y egresados de Fundacion Pescar que contara con un
                entorno de comunicacion e intercambio de experiencias.</p>
        </div>
        <div>
            <p class="article__tec">MERN</p>
        </div>
    </div>

    <div class="article">
        <div>
            <nav class="article__nav">
                <i class="fa-solid fa-folder article__icon article__icon--folder "></i>
                <div>
                    <a href="https://github.com/BobrukFS/Portafolio-2" target="_blank"><i
                            class="fa-brands fa-github  article__icon  "></i></a>
                    <a href="https://bobrukfs.github.io/Portafolio-2/src/" target="_blank"><i
                            class="fa-solid fa-globe article__icon  "></i></a>
                </div>
            </nav>
            <p>En proceso</p>
            <h4>Portafolio 2</h4>
      
            <p>Este es mi segundo portafolio</p>
        </div>
        <div>
        <p class="article__tec">HTML - CSS - SASS - Javascript</p>
    </div>
    </div>
</div>
     
  

        `;
        btnprojects[0].textContent = "Ver mas";
        btnprojects[0].classList.replace("more", "less");
    }
})

