console.log('hallo ini js')

// hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
    // alert('ada')
})

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#toTop')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        console.log('navbar')

        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        console.log('remove navbar')

        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

//click diluar hamburger
window.addEventListener('click', function (event) {
    if (event.target != navMenu && event.target != hamburger) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

//dark mode toggle
const darkToggle = document.querySelector('#darkToggle')
const html = document.querySelector('html')

//function togle
darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
        // console.log(html.)
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
        // console.log(html.attributes.classList)
    }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
}