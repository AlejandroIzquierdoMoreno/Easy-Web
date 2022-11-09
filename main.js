var header = document.querySelector('header')

window.addEventListener('scroll', e=>{
    header.classList.add('cambioColor')
    if (scrollY == 0){
        header.classList.remove("cambioColor")
    }
})
