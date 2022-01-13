//Botonoes de las 5 listas de propósitos
let personal = document.getElementById('per')
let profesional = document.getElementById('pro')
let relaciones = document.getElementById('rela')
let familia = document.getElementById('fam')
let salud = document.getElementById('salud')

//Al dar click en el botón de la la lista de propósitos en el almacenaje local en el navegador
personal.addEventListener('click', () =>{
    console.log('personal')
    let data = "personal"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
profesional.addEventListener('click', () =>{
    console.log('profesional')
    let data = "profesional"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
relaciones.addEventListener('click', () =>{
    console.log('relaciones')
    let data = "relaciones"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
familia.addEventListener('click', () =>{
    console.log('familia')
    let data = "familia"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
salud.addEventListener('click', () =>{
    console.log('salud')
    let data = "salud"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
