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
let btnInicio = document.querySelector('.inicio__ContBtn')

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
observador.observe(btnInicio) 

/* SOBRE MI */

let sobreMi = document.querySelector ('.sobremi__Tec')

let tecImg = [{'logoTec': '../imagenes/html.png', 'tec': 'HTML'},
              {'logoTec': '../imagenes/css.png', 'tec': 'CSS'},
              {'logoTec': '../imagenes/js.png', 'tec': 'JAVASCRIPT'},
              {'logoTec': '../imagenes/bootstrap.jpg', 'tec': 'BOOTSTRAP'},
              {'logoTec': '../imagenes/react.png', 'tec': 'REACT'},
              {'logoTec': '../imagenes/sass.png', 'tec': 'SASS'},
              {'logoTec': '../imagenes/git.png', 'tec': 'GIT'},
              {'logoTec': '../imagenes/node.png', 'tec': 'NODE'},
              {'logoTec': '../imagenes/python.png', 'tec': 'PYTHON'}
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
let tecTitulo = document.querySelector('.sobremi__TecTitulo')
let cont1 = document.querySelector ('.cont1')
let cont2 = document.querySelector ('.cont2')
let cont3 = document.querySelector ('.cont3')
let cont4 = document.querySelector ('.cont4')
let plan1 = document.querySelector ('.servicios__Cont1')
let plan2 = document.querySelector ('.servicios__Cont2')
let contacto = document.querySelector ('.contacto__Info')
let contactoForm = document.querySelector ('.contacto__Form')

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
observador1.observe(tecTitulo)
observador1.observe(cont1)
observador1.observe(cont2)
observador1.observe(cont3)
observador1.observe(cont4)
observador1.observe(plan1)
observador1.observe(plan2)
observador1.observe(contacto)
observador1.observe(contactoForm)



/* PORTFOLIO */
/* 
let portfolio = document.querySelector ('.portfolio')

let proyectos = [{'portImg': '../imagenes/davidMilan.png',
                  'titulo': 'DAVID MILAN'},
                 {'portImg': '../imagenes/fotografo.png',
                  'titulo': 'EZEQUIEL PH'},
                 {'portImg': '../imagenes/davidMilan.png',
                  'titulo': 'David Milan'},
                 {'portImg': '../imagenes/fotografo.png',
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



