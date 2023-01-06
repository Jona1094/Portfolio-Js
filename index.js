// SCROLL NAV //

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let header= document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= (desplazamientoActual)){
        header.style.top = "0";
    } 
    else{
        header.style.top = "-125px"
    }
    ubicacionPrincipal = desplazamientoActual;
} 


// Efecto Máquina //

let nombre = document.querySelector (".inicio__Nombre")
let string = nombre.innerHTML;
nombre.innerHTML = "";
let speed = 100;
let i = 0;

function efectoMaquina () {
    if (i < string.length) {
        nombre.innerHTML += string.charAt(i); i++;
    }
    setTimeout (efectoMaquina, speed)
}

setTimeout (efectoMaquina, speed)



// Aparición de Elementos en INICIO //

let text2 = document.querySelector('.inicio__Titulo')

const aparecerTexto = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add ('visible');
        } 
    })
}

const observador = new IntersectionObserver (aparecerTexto, {
    rootMargin: "100px",
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
})

observador.observe(text2)

/* SOBRE MI */

let sobreMi = document.querySelector ('.sobremi__Tec')

let tecImg = [{'logoTec': '../Imagenes/html.png', 'tec': 'HTML'},
              {'logoTec': '../Imagenes/css.png', 'tec': 'CSS'},
              {'logoTec': '../Imagenes/js.png', 'tec': 'JAVASCRIPT'},
              {'logoTec': '../Imagenes/bootstrap.jpg', 'tec': 'BOOTSTRAP'},
              {'logoTec': '../Imagenes/react.png', 'tec': 'REACT'},
              {'logoTec': '../Imagenes/sass.png', 'tec': 'SASS'},
              {'logoTec': '../Imagenes/git.png', 'tec': 'GIT'},
              {'logoTec': '../Imagenes/node.png', 'tec': 'NODE'},
              {'logoTec': '../Imagenes/python.png', 'tec': 'PYTHON'}
            ]

let mostrarTecImg = (logoTec, tec) => {
    let imgTecCont = document.createElement ('DIV')
    let imgTec = document.createElement ('IMG')
    let nameTec = document.createElement ('H3')

    sobreMi.appendChild(imgTecCont)
    imgTecCont.appendChild(imgTec)
    imgTecCont.appendChild(nameTec)

    imgTec.setAttribute ('SRC', logoTec)
    nameTec.textContent = tec;

    imgTecCont.classList.add ('imgTecCont')
    imgTec.classList.add ('sobremi__ImgTec')
    nameTec.classList.add ('nameTec')

    return imgTecCont;
}

let imgTemporal = document.createDocumentFragment() 

for (let i = 0; i < tecImg.length; i++) {
    let nuevoImg = mostrarTecImg(tecImg[i].logoTec, tecImg[i].tec);
    imgTemporal.appendChild(nuevoImg);
}

sobreMi.appendChild(imgTemporal);


let imgDev = document.querySelector('.sobremi__ImgJ')
let descDev = document.querySelector('.sobremi__Titulo')
let pDev = document.querySelector ('.sobremi__P')
let iconWp = document.querySelector('.sobremi__ContactWp')
let iconIn = document.querySelector('.sobremi__ContactIn')
let tecDev = document.querySelector('.imgTecCont')
let tecDevImg = document.querySelector('.sobremi__Tec')

const sobreMiDev = (entradas, observador1) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add ('visible');
        }
    })
}

const observador1 = new IntersectionObserver (sobreMiDev, {
    rootMargin: "100px",
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
})

observador1.observe(imgDev)
observador1.observe(descDev)
observador1.observe(pDev)
observador1.observe(iconWp)
observador1.observe(iconIn)
observador1.observe(tecDev)
observador1.observe(tecDevImg)
/* PORTFOLIO */
/* 
let portfolio = document.querySelector ('.portfolio')

let proyectos = [{'portImg': '../Imagenes/davidMilan.png',
                  'titulo': 'DAVID MILAN'},
                 {'portImg': '../Imagenes/fotografo.png',
                  'titulo': 'EZEQUIEL PH'},
                 {'portImg': '../Imagenes/davidMilan.png',
                  'titulo': 'David Milan'},
                 {'portImg': '../Imagenes/fotografo.png',
                  'titulo': 'Ezequiel PH'}]

let mostrarProyectos = (portImg, titulo) => {
    let proyCont = document.createElement ('DIV')
    let proyImg = document.createElement ('IMG')
    let proyTitulo = document.createElement ('H1')
    let proyBtn = document.createElement ('DIV')

    portfolio.appendChild (proyCont)
    proyCont.appendChild (proyImg)
    proyCont.appendChild(proyTitulo)
    proyCont.appendChild(proyBtn)

    proyCont.classList.add ('portfolio__Cont')
    proyImg.classList.add ('portfolio__Img')
    proyTitulo.classList.add ('portfolio__Titulo')
    proyBtn.classList.add ('portfolio__Btn')

    proyImg.setAttribute ('src', portImg)
    proyTitulo.textContent = titulo
    proyBtn.textContent = 'Ver Sitio'

    return proyCont;
}

let portfolioDC = document.createDocumentFragment()

for (let i = 0; i < proyectos.length; i++) {
    let portfolioN = mostrarProyectos(proyectos[i].portImg, proyectos[i].titulo)
    portfolioDC.appendChild(portfolioN);
}

portfolio.appendChild(portfolioDC)

 */

/* NAV MOBILE */

let menuMobile = document.querySelector ('.menuMovil')
let menuMobileX = document.querySelector ('.xmenumovil')
let navMobile = document.querySelector ('.navMobile')

function abrirNavMobile() {
        navMobile.style.display = 'flex'
        navMobile.style.animation = 'abrirNav 1s'
        menuMobile.classList.add ('menuMovilNone')
        menuMobileX.classList.add ('xmenumovilFlex')
        menuMobileX.classList.remove ('xmenumovil')
}

menuMobile.addEventListener ('click', abrirNavMobile)

const cerrarMenuMobile = () => {
    navMobile.style.animation = 'cerrarNav 1s forwards'
    menuMobileX.classList.remove ('xmenumovilFlex')
    menuMobile.classList.remove ('menuMovilNone')
    menuMobileX.classList.add ('xmenumovil')
    menuMobile.classList.add ('menuMovil')
}

menuMobileX.addEventListener ('click', cerrarMenuMobile) 


