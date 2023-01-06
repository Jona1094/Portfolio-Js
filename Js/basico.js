let basicImagenes = document.querySelector ('.basico__Imagenes')

const sobreMiDev = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add ('visible');
        }
    })
}

const observador = new IntersectionObserver (sobreMiDev, {
    rootMargin: "100px",
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
})

observador.observe(basicImagenes)
