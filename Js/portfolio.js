/* PORTFOLIO */

/* let portfolio = document.querySelector ('.portfolio')

let proyectos = [{'portImg': '../Imagenes/portfolio1.jpg',
                  'titulo': 'DAVID MILAN',
                  'a': 'https://jona1094.github.io/David-Milan/'},
                 {'portImg': '../Imagenes/portfolio2.jpg',
                  'titulo': 'EZEQUIEL PH'},
                 {'portImg': '../Imagenes/portfolio3.jpg',
                  'titulo': 'David Milan'}]

let proyCont = document.createElement ('DIV')

let mostrarProyectos = (portImg, titulo) => {
    let portindiv = document.createElement ('DIV')
    let proyImg = document.createElement ('IMG')
    let proyTitulo = document.createElement ('H1')
    let proyBtn = document.createElement ('DIV')
    let a = document.createElement ('A')

    portfolio.appendChild (proyCont)
    portindiv.appendChild(proyImg)
    portindiv.appendChild(proyTitulo)
    portindiv.appendChild(proyBtn)
    proyBtn.appendChild(a)

    proyCont.classList.add ('portfolio__Cont')
    portindiv.classList.add ('cont')
    proyImg.classList.add ('portfolio__Img')
    proyTitulo.classList.add ('portfolio__Titulo')
    proyBtn.classList.add ('portfolio__Btn')

    proyImg.setAttribute ('src', portImg)
    a.setAttribute ('HREF', 'a')
    proyTitulo.textContent = titulo
    proyBtn.textContent = 'Ver Sitio'

    return portindiv;
}

let portfolioDC = document.createDocumentFragment()

for (let i = 0; i < proyectos.length; i++) {
    let portfolioN = mostrarProyectos(proyectos[i].portImg, proyectos[i].titulo, proyectos[i].a)
    portfolioDC.appendChild(portfolioN);
}

proyCont.appendChild(portfolioDC) */