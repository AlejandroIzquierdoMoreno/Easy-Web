var h1 = document.querySelector('h1')
h1.classList.add("animation-h1")

window.addEventListener('scroll', e=>{
    header.classList.add('cambioColor')
    if (scrollY == 0){
        h1.classList.add("animation-h1")
    } else {
        h1.classList.remove("animation-h1")
    }
})
