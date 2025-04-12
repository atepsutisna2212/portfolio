import { listDataKeahlian, listDataProject, listDataPendidikan, listDataSosmed, dataListPengalaman } from "./list_data.js";
import { changeLanguage } from "./translate.js";
// hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#toTop')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')

        header.classList.remove('bg-slate-100')
        header.classList.remove('dark:bg-slate-700')

        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')

        header.classList.add('bg-slate-100')
        header.classList.add('dark:bg-slate-700')

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
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
}

//skill
function setDataKeahlian(lang = 'id') {
    const lokasi = document.querySelector('#listKeahlian');
    let data = '';
    listDataKeahlian.forEach(item => {
        const content = lang == 'en' ? item.content_en : item.content;
        const baca = lang == 'en' ? "Read more" : `Baca selengkapnya`;
        data += `
                 <div class="w-full px-4 md:w-1/2 xl:w-1/3 ">
                    <div class="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="${item.img}" alt="" class="w-full bg-white hover:shadow-lg">
                        <div class="py-8 px-6">
                            <h3
                                class=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">
                                ${item.title}</h3>
                            <p class="font-medium text-secondary text-base mb-6 text-justify dark:text-slate-300">
                                ${content}</p>
                            <a href="${item.link}" target="_blank"
                                class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">${baca}</a>
                        </div>
                    </div>
                </div>
                `
    });
    lokasi.innerHTML = data;
}

//project
function setDataProject(lang = 'id') {
    const lokasi = document.querySelector('#listProject');
    let data = '';
    listDataProject.forEach(item => {
        const content = lang == 'en' ? item.content_en : item.content;
        const title = lang == 'en' ? item.title_en : item.title;
        data += `
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="rounded-md shadow-md overflow-hidden hover:shadow-lg">
                        <img src="${item.img}" alt="" class="w-full">
                    </div>
                    <h3 class="font-semibold text-xl text-dark mt-5 dark:text-white">${title}</h3>
                    <p class="font-medium text-base text-secondary text-justify dark:text-slate-300">${content}</p>
                </div>
                 `;
    });
    lokasi.innerHTML = data;
}

//pengalaman
function setDataPengalaman(lang = 'id') {
    const lokasi = document.querySelector('#listPengalaman');
    let data = '';
    dataListPengalaman.forEach(item => {
        const title = lang == 'en' ? item.title_en : item.title;
        const content = lang == 'en' ? item.content_en : item.content;
        data += `
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="rounded-md shadow-md overflow-hidden hover:shadow-lg">
                        <img src="${item.img}" alt="" class="w-full">
                    </div>
                    <h3 class="font-semibold text-xl text-dark mt-5 dark:text-white">${title}</h3>
                    <p class="font-medium text-base text-secondary text-justify dark:text-black">${content}</p>
                </div>
                 `;
    });
    lokasi.innerHTML = data;
}

//pendidikan
function setDataPendidikan(lang = 'id') {
    const lokasi = document.querySelector('#listPendidikan');
    let data = '';
    const baca = lang == 'en' ? `Read more` : `Baca selengkapnya`;
    listDataPendidikan.forEach(item => {
        const content = lang == 'en' ? item.content_en : item.content;
        const title = lang == 'en' ? item.title_en : item.title;
        data += `
                <div class="w-full px-4 md:w-1/2 xl:w-1/3 ">
                    <div class="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="${item.img}" height="200" alt="" class="w-full hover:shadow-lg">
                        <div class="py-8 px-6">
                            <h3 class=" mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">
                                ${title}</h3>
                            <p class="font-medium text-secondary text-base mb-6 text-justify dark:text-slate-300">${content}</p>
                            <a href="${item.link}"
                                class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">${baca}</a>
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

const translate = document.querySelector('#setTranslate');
translate.addEventListener('click', function () {
    if (translate.checked) {
        callAll();
    } else {
        callAll('en')
    }
})

function callAll(lang = 'id') {
    changeLanguage(lang);
    setDataKeahlian(lang);
    setDataProject(lang);
    setDataPengalaman(lang);
    setDataPendidikan(lang);
    setDataSosmed();
    langTitle(lang)
}

const language = navigator.language || navigator.userLanguage;
if (language == 'id') {
    callAll('id');
    translate.checked = true;
    langTitle()
} else {
    callAll('en');
    langTitle('en')
}

function langTitle(lang = 'id') {
    const screen = lang == 'id' ? 'Layar' : 'Screen';
    const language = lang == 'id' ? 'Bahasa' : 'Language';
    const darkToggle = document.getElementById('darkToggle');
    const liDark = darkToggle.closest('li');
    const liTranslate = translate.closest('li');
    liDark.setAttribute('title', screen);
    liTranslate.setAttribute('title', language);
}