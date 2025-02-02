import { listDataKeahlian, listDataProject, listDataPendidikan, listDataSosmed, dataListPengalaman } from "./list_data.js";
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


function setDataKeahlian() {
    const lokasi = document.querySelector('#listKeahlian');
    let data = '';
    listDataKeahlian.forEach(item => {
        data += `
                 <div class="w-full px-4 md:w-1/2 xl:w-1/3 ">
                    <div class="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="${item.img}" alt="" class="w-full bg-white">
                        <div class="py-8 px-6">
                            <h3
                                class=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">
                                ${item.title}</h3>
                            <p class="font-medium text-secondary text-base mb-6 text-justify dark:text-slate-300">
                                ${item.content}</p>
                            <a href="${item.link}" target="_blank"
                                class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca
                                selengkapnya</a>
                        </div>
                    </div>
                </div>
                `
    });
    lokasi.innerHTML = data;
}

//project
function setDataProject() {
    const lokasi = document.querySelector('#listProject');
    let data = '';
    listDataProject.forEach(item => {
        data += `
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="rounded-md shadow-md overflow-hidden">
                        <img src="${item.img}" alt="" class="w-full">
                    </div>
                    <h3 class="font-semibold text-xl text-dark mt-5 dark:text-white">${item.title}</h3>
                    <p class="font-medium text-base text-secondary text-justify dark:text-slate-300">${item.content}</p>
                </div>
                 `;
    });
    lokasi.innerHTML = data;
}

//pengalaman
function setDataPengalaman() {
    const lokasi = document.querySelector('#listPengalaman');
    let data = '';
    dataListPengalaman.forEach(item => {
        data += `
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="rounded-md shadow-md overflow-hidden">
                        <img src="${item.img}" alt="" class="w-full">
                    </div>
                    <h3 class="font-semibold text-xl text-dark mt-5 dark:text-white">${item.title}</h3>
                    <p class="font-medium text-base text-secondary text-justify dark:text-black">${item.content}</p>
                </div>
                 `;
    });
    lokasi.innerHTML = data;
}

//pendidikan
function setDataPendidikan() {
    const lokasi = document.querySelector('#listPendidikan');
    let data = '';
    listDataPendidikan.forEach(item => {
        data += `
                <div class="w-full px-4 md:w-1/2 xl:w-1/3 ">
                    <div class="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="${item.img}" height="200" alt="" class="w-full">
                        <div class="py-8 px-6">
                            <h3 class=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">
                                ${item.title}</h3>
                            <p class="font-medium text-secondary text-base mb-6 text-justify dark:text-slate-300">${item.content}</p>
                            <a href="${item.link}"
                                class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca
                                selengkapnya</a>
                        </div>
                    </div>
                </div>
                 `;
    });
    lokasi.innerHTML = data;
}

// sosmed
function setDataSosmed() {
    const lokasi = document.querySelector('#listSosmedFooter');
    const lokasiHeader = document.querySelector('#listSosmedHeader');
    let data = '';
    listDataSosmed.forEach(item => {
        data += `
                <a href="${item.link}" target="_blank"
                            class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                            ${item.img}
                        </a>
                 `;
    });
    lokasi.innerHTML = data;
    lokasiHeader.innerHTML = data;
}

//call function
setDataKeahlian();
setDataProject();
setDataPengalaman();
setDataPendidikan();
setDataSosmed();