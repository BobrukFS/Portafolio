`use strict`
//Header
let header = document.getElementsByClassName("header");
let prevScrollPos = window.pageYOffset;


function scrolls() {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos && window.pageYOffset !== 0) {

        header[0].classList.replace("scrollbottom", "scrolltop");

    } else if(prevScrollPos > currentScrollPos && window.pageYOffset === 0){
        header[0].classList.remove("scrolltop");

    }else if (prevScrollPos < currentScrollPos) {
        header[0].classList.add("scrollbottom");
    }
    prevScrollPos = currentScrollPos;
}


window.addEventListener("scroll", scrolls);


//Menu
let menuButton = document.getElementsByClassName("button");
let menuButtonCondition = false;
let menuNav = document.getElementsByClassName("menu");
let barraMiddle = document.getElementsByClassName("button__icon");
let main = document.querySelector("main");
let enlaces = document.getElementsByClassName("menu__enlaces");

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
    enlaces[i].addEventListener("click", ()=>{
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
            expdiv[0].classList.replace("study","skills" )
            expdiv[0].classList.replace("jobs","skills" )
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
        <li><i class="fa-brands fa-node-js skills__icon">

            </i>
            <p class="skills__p">TypeScript</p>
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
                        <li><i class="fa-brands fa-node-js skills__icon">
                
                            </i>
                            <p class="skills__p">TypeScript</p>
                        </li>
                    </ul>
                        `;
                    } else if (h3Skills[j].classList[1] === "skills-backend") {
                        divSkills[0].innerHTML = `<ul class="skills__ul listbackend">
                        <li><i class="fa-brands fa-node-js skills__icon"></i></i>
                            <p class="skills__p">Node Js</p>
                        </li>
                        <li><i class="fa-brands fa-react skills__icon">
            
                            </i>
                            <p class="skills__p">MySql</p>
                        </li>
                        <li><i class="fa-brands fa-node-js skills__icon">
            
                            </i>
                            <p class="skills__p">Phyton</p>
                        </li>
                    </ul>
                `;
                        skiActive[0].classList.remove("skillsactivado");
                        h3Skills[j].classList.add("skillsactivado");
                    } else if (h3Skills[j].classList[1] === "skills-tools") {
                        divSkills[0].innerHTML = ` 
              
                   
                     <ul class="skills__ul listbackend">
                        <li><i class="fa-brands fa-github skills__icon"></i>
                            <p class="skills__p">Github</p>
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
            expdiv[0].innerHTML = `<div class="study__tittles">
            <h3 tabindex="0" class="study__h3 study-progreso">En progreso</h3>
            <h3 tabindex="0" class="study__h3 study-completos">Completos</h3>
        </div>

        <div class="study__items">
            <ul>
                <li><p>Estudiante de la universidad de Quilmes</p></li>
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
                    <li><p>Estudiante de la universidad de Quilmes</p></li>
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
                <a href="contact.html" class="jobs__btn">Say Hello</a>
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
            <li><i class="fa-brands fa-node-js skills__icon">

                </i>
                <p class="skills__p">TypeScript</p>
            </li>
        </ul>
            `
        } else if (h3Skills[j].classList[1] === "skills-backend") {

            skiActive[0].classList.remove("skillsactivado");
            h3Skills[j].classList.add("skillsactivado");
            divSkills[0].innerHTML = ` <ul class="skills__ul listbackend">
            <li><i class="fa-brands fa-node-js skills__icon"></i></i>
                <p class="skills__p">Node Js</p>
            </li>
            <li><i class="fa-brands fa-react skills__icon">

                </i>
                <p class="skills__p">MySql</p>
            </li>
            <li><i class="fa-brands fa-node-js skills__icon">

                </i>
                <p class="skills__p">Phyton</p>
            </li>
        </ul>`
        } else if (h3Skills[j].classList[1] === "skills-tools") {
            skiActive[0].classList.remove("skillsactivado");
            h3Skills[j].classList.add("skillsactivado");
            divSkills[0].innerHTML = `  <ul class="skills__ul listbackend">
            <li><i class="fa-brands fa-github skills__icon"></i>
                <p class="skills__p">Github</p>
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
let projectArticles = document.getElementsByClassName("projects__articles");
btnprojects[0].addEventListener("click", (e) => {
    if (btnprojects[0].classList[1] === "less") {
        projectArticles[0].insertAdjacentHTML("beforeend", `
        
        <div class="articles">
                    <div class="article">
                        <nav class="article__nav">
                            <i
                                class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                            <div>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                            </div>
                        </nav>
                        <h4>OctoProfile</h4>
                        <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                            languages, starred repositories, and sort through your top repos by number of stars, fork,
                            and size</p>
                        <p class="article__tec">HTML - Javascript - CSS</p>

                    </div>

                    <div class="articles">
                    <div class="article">
                        <nav class="article__nav">
                            <i
                                class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                            <div>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                            </div>
                        </nav>
                        <h4>OctoProfile</h4>
                        <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                            languages, starred repositories, and sort through your top repos by number of stars, fork,
                            and size</p>
                        <p class="article__tec">HTML - Javascript - CSS</p>

                    </div>

                    <div class="articles">
                    <div class="article">
                        <nav class="article__nav">
                            <i
                                class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                            <div>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                            </div>
                        </nav>
                        <h4>OctoProfile</h4>
                        <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                            languages, starred repositories, and sort through your top repos by number of stars, fork,
                            and size</p>
                        <p class="article__tec">HTML - Javascript - CSS</p>

                    </div>

                    <div class="articles">
                    <div class="article">
                        <nav class="article__nav">
                            <i
                                class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                            <div>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                                <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                        class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                            </div>
                        </nav>
                        <h4>OctoProfile</h4>
                        <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                            languages, starred repositories, and sort through your top repos by number of stars, fork,
                            and size</p>
                        <p class="article__tec">HTML - Javascript - CSS</p>

                    </div>
        `);
        btnprojects[0].textContent = "Ver menos";
        btnprojects[0].classList.replace("less", "more");
    } else if (btnprojects[0].classList[1] === "more") {
        projectArticles[0].innerHTML = `
        <h3>Other Noteworthy Projects</h3>
        <a href="#">See more Projects</a>
        <div class="articles">
            <div class="article">
                <nav class="article__nav">
                    <i
                        class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                    <div>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                    </div>
                </nav>
                <h4>OctoProfile</h4>
                <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                    languages, starred repositories, and sort through your top repos by number of stars, fork,
                    and size</p>
                <p class="article__tec">HTML - Javascript - CSS</p>

            </div>

            <div class="article">
                <nav class="article__nav">
                    <i class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                    <div>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                    </div>
                </nav>
                <h4>OctoProfile</h4>
                <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                    languages, starred repositories, and sort through your top repos by number of stars, fork,
                    and size</p>
                <p class="article__tec">HTML - Javascript - CSS</p>

            </div>

            <div class="article">
                <nav class="article__nav">
                    <i
                        class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                    <div>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                    </div>
                </nav>
                <h4>OctoProfile</h4>
                <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                    languages, starred repositories, and sort through your top repos by number of stars, fork,
                    and size</p>
                <p class="article__tec">HTML - Javascript - CSS</p>

            </div>

            <div class="article">
                <nav class="article__nav">
                    <i
                        class="fa-solid fa-folder article__icon article__icon--folder card-figcaption-nav__a"></i>
                    <div>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-brands fa-github  article__icon card-figcaption-nav__a "></i></a>
                        <a href="https://mmedinasv05.github.io/Portafolio/#/Projects" target="_blank"><i
                                class="fa-solid fa-globe article__icon card-figcaption-nav__a "></i></a>
                    </div>
                </nav>
                <h4>OctoProfile</h4>
                <p>A nicer look at your github profile and repo stats. Includes data visualizations of your top
                    languages, starred repositories, and sort through your top repos by number of stars, fork,
                    and size</p>
                <p class="article__tec">HTML - Javascript - CSS</p>

            </div>
        `;
        btnprojects[0].classList.replace("more", "less");
    }
})