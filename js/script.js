'use strict'

const contenedor = document.querySelector('.contenedor')
const punto = document.querySelectorAll('.punto')

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener('click', () => {
    let posicion = i
    let operacion = posicion * (-100 / 3)

    contenedor.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove('activo')
    })
    punto[i].classList.add('activo')
  })
})