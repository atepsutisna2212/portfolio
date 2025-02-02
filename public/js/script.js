import { cek } from "./list_data";
console.log(cek)
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

//data yang di tampilkan
const listDataKeahlian = [
    {
        img: "https://delapanmedia.com/asset/berita/original/77723555319-bd2_6f5_636_330-1-original.jpg",
        title: "PHP (Hypertext Preprocessor)",
        content: "Hypertext Preprocessor atau PHP adalah bahasa penulisan skrip open-source yang banyak digunakan dalam pemrograman atau pengembangan website (web development). Bahasa ini umumnya dijalankan dalam komunikasi sisi server, dan saat ini didukung oleh hampir semua sistem.",
        link: "https://www.php.net/"
    },
    {
        img: "https://trectech.com/wp-content/uploads/2022/04/microsoft.net_.jpg",
        title: ".NET",
        content: ".NET adalah platform pengembang sumber terbuka gratis, lintas platform untuk membangun berbagai jenis aplikasi. Ini dapat menjalankan program yang ditulis dalam beberapa bahasa, dengan C# menjadi yang paling populer. Ini bergantung pada runtime berkinerja tinggi yang digunakan dalam produksi oleh banyak aplikasi skala tinggi.",
        link: "https://dotnet.microsoft.com/id-id/learn/dotnet/what-is-dotnet"
    },
    {
        img: "https://belajarapaaja.net/wp-content/uploads/2023/02/JQuery-Logo.wine_.png",
        title: "Jquery",
        content: "jQuery adalah pustaka JavaScript yang cepat, kecil, dan kaya fitur. jQuery membuat hal-hal seperti traversal dan manipulasi dokumen HTML, penanganan event, animasi, dan Ajax menjadi jauh lebih mudah dengan API yang mudah digunakan dan berfungsi di berbagai browser. Dengan kombinasi fleksibilitas dan ekstensibilitas, jQuery telah mengubah cara jutaan orang menulis JavaScript.",
        link: "https://laravel.com/"
    },
    {
        img: "https://hosteko.com/htk-blog/gambar/2019/05/co.jpg",
        title: "JavaScript",
        content: "JavaScript.com adalah sumber daya yang dibangun oleh tim Pluralsight untuk komunitas JavaScript. Karena JavaScript adalah bahasa yang bagus untuk pengkodean pemula, kami telah mengumpulkan beberapa di antaranya sumber belajar terbaik dan membuat kursus JavaScript untuk membantu pengembang baru dan berjalan.",
        link: "https://www.javascript.com/"
    },
    {
        img: "https://dilesin.com/storage/assets/articel/thumbnail/grgxoMFeKHu0w4jJJQMpfJB2UHZtOAM8ck7ZSH0z.jpg",
        title: "Laravel",
        content: "Laravel adalah framework aplikasi web dengan sintaks yang ekspresif dan elegan. Kerangka web menyediakan struktur dan titik awal untuk membuat aplikasi Anda, memungkinkan Anda untuk fokus untuk menciptakan sesuatu yang luar biasa sementara kami memikirkan detailnya.",
        link: "https://laravel.com/"
    },
    {
        img: "https://www.bengkelti.com/wp-content/uploads/2022/02/ci-framework-1.webp",
        title: "CodeIgniter",
        content: "CodeIgniter adalah Kerangka Pengembangan Aplikasi  membangun situs web menggunakan PHP. Tujuannya adalah untuk memungkinkan mengembangkan proyek lebih cepat dari Anda bisa jika Anda sedang menulis kode dari awal, dengan menyediakan satu set perpustakaan untuk tugas yang umumnya dibutuhkan.",
        link: "https://codeigniter.com/"
    },
    {
        img: "https://image.web.id/images/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png",
        title: "Vue Js",
        content: "Vue (diucapkan /vjuː/, seperti view ) adalah kerangka kerja JavaScript untuk membangun antarmuka pengguna. Kerangka kerja ini dibangun di atas HTML, CSS, dan JavaScript standar dan menyediakan model pemrograman berbasis komponen deklaratif yang membantu Anda mengembangkan antarmuka pengguna dengan kompleksitas apa pun secara efisien.",
        link: "https://vuejs.org/"
    },
    {
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--LTUFkuK5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://imgur.com/Mj3H69v.png",
        title: "Bootstrap",
        content: "Bootstrap dikelola oleh tim kecil pengembang di GitHub. Kami aktif mencari untuk mengembangkan tim ini dan ingin mendengar dari Anda jika Anda tertarik dengan CSS dalam skala besar, menulis dan memelihara plugin vanilla JavaScript, dan meningkatkan perkakas bangunan proses untuk kode frontend.",
        link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/"
    },
    {
        img: "https://jefrydco.id/_nuxt/img/how-tailwind-css-help-reduce-workload-by-jefrydco.833f9b8.jpg",
        title: "Tailwind",
        content: "Tailwind CSS bekerja dengan memindai semua file HTML, komponen JavaScript, dan apa saja templat lain untuk nama kelas, menghasilkan gaya yang sesuai, lalu menulis mereka ke file CSS statis.",
        link: "https://tailwindcss.com/"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GmH1THzbyRrocsVSVceq5GcA_HnDWgxr0w&s",
        title: "HTML (Hypertext Markup Language)",
        content: "Hypertext Markup Language atau HTML adalah bahasa markup standar yang digunakan untuk membuat halaman website dan aplikasi web. Sejarah HTML diciptakan oleh Tim Berners-Lee, seorang ahli fisika di lembaga penelitian CERN yang berlokasi di Swiss.",
        link: "https://www.hostinger.co.id/tutorial/apa-itu-html"
    },
    {
        img: "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
        title: "CSS (Cascading Style Sheet)",
        content: "CSS adalah salah satu istilah teknis dalam pemrograman. Meski sering dianggap sebuah bahasa pemrograman, CSS bukanlah bagian dari bahasa itu. Kata Tech Terms, CSS adalah salah satu styling language (bahasa desain), bagian dari markup language yang dapat “mewarnai” atau mendesain suatu halaman website.",
        link: "https://glints.com/id/lowongan/css-adalah/#.Y9sC9nbP3IU"
    },
    {
        img: "https://pintaar.com/storage/course_picture/k1dB7jcd3UuNlF97bLbsIQ5X9lgH4woLfo5UTaOW.png",
        title: "Adobe Ilustrator",
        content: "Adobe Illustrator adalah aplikasi perangkat lunak cukup populer di kalangan profesional, desain bisnis, dan dunia seni yang digunakan oleh desainer grafis untuk membuat grafik vektor. Aplikasi berbasis program editor grafis vektor ini dikembangkan dan dipasarkan oleh Adobe Systems.Adobe mulai mengembangkan Illustrator pada tahun 1985.",
        link: "https://www.adobe.com/id_en/products/illustrator.html?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzBFdfxmnF4WouE9LBRBTgX9XaxHMz6e9Y-f5P7GXaTX9Ig8G__z7bQaAl_5EALw_wcB&sdid=81G55V4T&mv=search&ef_id=Cj0KCQjwpPKiBhDvARIsACn-gzBFdfxmnF4WouE9LBRBTgX9XaxHMz6e9Y-f5P7GXaTX9Ig8G__z7bQaAl_5EALw_wcB:G:s&s_kwcid=AL!3085!3!472466820364!b!!g!!%2Badobe%20%2Billustrator!11350284153!111298090996"
    },
    {
        img: "https://i0.wp.com/diengcyber.com/wp-content/uploads/2022/04/images-10.jpg?fit=739%2C415&ssl=1",
        title: "CorelDraw",
        content: "CorelDRAW adalah software pengolah grafis yang memiliki kegunaan untuk membantu pekerjaan desainer. Perangkat lunak ini dikembangkan oleh Corel Corporation, sebuah perusahaan yang berbasis di Ottawa, Kanada. Dikutip dari situs web resminya, Corel membantu lebih dari 90 juta pekerja untuk menjadi lebih kreatif dan produktif melalui produk-produk mereka.",
        link: "https://www.gramedia.com/literasi/coreldraw-pengertian-fungsi-dan-kelebihannya/"
    }
];

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
const listDataProject = [
    {
        img: "public/img/project/ids1.png",
        title: "Aplikasi DigiProc PLN ICON PLUS",
        content: "Aplikasi ini project dari PLN Icon Plus. Pada project ini dalam pengembangan sprint 2. Ini adalah project Outsourching, saya ditugaskan bagian back-end pada tampilan dashboard ini. Project ini dilakukan remote dan onsite team sehinggu sekali ke Kantor Jamsostek PLN. Project ini dibuat menggunakan framework .Net Core 4 dan React JS."
    },
    {
        img: "public/img/project/fmm-pa.png",
        title: "Aplikasi Penilaian Karyawan",
        content: "Aplikasi ini project dari perusahaan Pajar Mas Murni. Pada project ini ditugaskan untuk membuat aplikasi ini dari awal secara tim. Aplikasi ini digunakan untuk melakukan penilaian kepada karyawan secara online. Project ini dibuat menggunakan framework CodeIgniter 4 dan Bootstrap 5."
    },
    {
        img: "public/img/project/replanish.png",
        title: "Aplikasi Kompetisi",
        content: "Aplikasi ini project dari perusahaan Toyota Astra Motor. Pada project ini ditugaskan dalam mengembangkan aplikasi ini untuk terkoneksi menggunakan WhatsApp dan Email serta pemindahan directory file ke S3 karena aplikasi ini akan di migrasi ke AWS. Project ini dibuat menggunakan framework .Net versi 4.8  dan Bootstrap 5."
    },
    {
        img: "public/img/project/ttep.png",
        title: "Aplikasi Magang Siswa",
        content: "Aplikasi ini project dari perusahaan Toyota Astra Motor. Pada project ini ditugaskan untuk membuat aplikasi dari awal dan dilakukan secara tim. Aplikasi ini digunakan untuk pendataan sekolah, siswa dan dealer yang akan melakukan magang ke perusahaan TAM. Project ini dibuat menggunakan framework .Net Core 8  dan Bootstrap 5."
    },
    {
        img: "public/img/project/bimbel.png",
        title: "Aplikasi Bimbingan Belajar",
        content: "Aplikasi ini digunakan untuk mendata peserta bimbingan online dan data pembayaran secara online di bimbingan belajar Brilliant Learning Center. Aplikasi ini dibuat menggunakan framework Laravel 8 dan Bootstrap 5"
    },
    {
        img: "public/img/project/inventory.png",
        title: "Aplikasi Inventory Kain",
        content: "Aplikasi ini digunakan untuk mendata inventory kain terutama yang sudah terjual dan data kain yang dibeli secara online. Aplikasi ini dibuat menggunakan framework Laravel 8 dan Bootstrap 5"
    },
    {
        img: "public/img/project/1.png",
        title: "Aplikasi Penjadwalan Praktikum",
        content: "Aplikasi ini bisa menghindari menginput jadwal yang bentrok dan jika jadwal yang diinput bentrok maka akan muncul notifikasinya dan rekomendasi jadwal yang tidak akan bentrok. Aplikasi ini dibuat menggunakan framework CodeIgniter 3 dan Bootstrap 3."
    },
    {
        img: "public/img/project/2.png",
        title: "Aplikasi profil dan pendaftaran PAUD Mawarsari 6",
        content: "Aplikasi ini berisi data-data PAUD Mawarsari dan mempublikasikan ke hal layak serta bisa mendaftar secara online. Aplikasi ini dibuat menggunakan framework CodeIgniter 3 dan Bootstrap 4."
    },
    {
        img: "public/img/project/3.png",
        title: "Aplikasi profil pramuka kwaran Ibun",
        content: "Pada aplikasi ini berisi data pramuka kwaran kecamatan Ibun. Digunakan untuk memudahkan dalam pendataan pramuka dan informasi antar pramuka sekecamatan Ibun. Aplikasi ini dibuat menggunakan bahasa pemrograman php native 7 dan Bootstrap 4."
    },
    // {
    //     img: "public/img/project/4.png",
    //     title: "Aplikasi pencatatan transaksi Garda Pest Control",
    //     content: "Aplikasi ini dibuat untuk memudahkan mencatat pemasukan dan pengeluaran keuangan Garda Pest Control kemudian memudahkan untuk dibuat data laporan secara otomatis. Aplikasi ini dibuat menggunakan bahasa pemrograman php native 7 dan Bootstrap 4."
    // },
    // {
    //     img: "public/img/project/5.png",
    //     title: "Aplikasi penjualan ONETED Store",
    //     content: "Aplikasi ini digunakan untuk mempublikasikan serta menjual produk ONETED Store kepada masyarakat luas secara online. Aplikasi ini dibuat menggunakan framework CodeIgniter 4 dan Bootstrap 4."
    // },
    // {
    //   img: "public/img/project/6.png",
    //   title: "Aplikasi Project Web",
    //   content: "Aplikasi ini digunakan untuk menyimpan data project dan data client dari project yang dibikin. Aplikasi ini dibuat menggunakan framework Laravel 10 dan Bootstrap 5."
    // },
    // {
    //   img: "public/img/project/7.png",
    //   title: "Aplikasi Tiket Konser",
    //   content: "Aplikasi ini digunakan untuk menjual tiket secara online dengan ID tertentu tiap tiketnya untuk di check in ketika konser berlangsung. Aplikasi ini dibuat menggunakan framework Laravel 8 dan Bootstrap 5."
    // },
    {
        img: "public/img/project/d1.png",
        title: "Pamplet Turnamen E-Sport Kab. Bandung",
        content: "Desain ini nantinya akan dibuat pamplet untuk mempublikasikan kepada masyarakat dan siswa. Sehingga dengan pamplet ini menunjukan bahwa akan melakukan kegiatan turnamen E-sport. Dengan syarat dan ketentuan secara singkat padat jelas. Pamplet ini dibuat menggunakan aplikasi CorelDraw X7."
    },
    {
        img: "public/img/project/d3.png",
        title: "Desain papan simbolis dan sertifikat E-sport",
        content: "Desain ini akan digunakan untuk papan simbolis serta piagam penghargaan kepada pemenang turnamen e-sport. Desain ini dibuat menggunakan Canva."
    },
    {
        img: "public/img/project/d2.png",
        title: "Desain pamplet selamat hari ramadhan",
        content: "Desain ini akan digunakan untuk dishare ke internet. Desain ini dibuat menggunakan aplikasi CorelDraw X7."
    }
];

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
const dataListPengalaman = [
    {
        img: "public/img/pengalaman/ids.jpeg",
        title: "PT. Inovasi Dinamika Solusi",
        content: "Pada Perusahaan ini saya sebagai Staff Web Programmer (2024). Disini saya bekerja dengan tim dan pengerjaan tugasnya fullstack bagian beck-end dengan framework bahasa pemrograman PHP atau .Net. Pada bagian front-end kebanyakan menggunakan VueJS. Pelaksanaan kerja saya bersama team dan ada pula project Out sourching"
    },
    {
        img: "public/img/pengalaman/arkamaya.jpg",
        title: "PT. Arkamaya",
        content: "Pada Perusahaan ini saya sebagai Staff Web Programmer (2023-2024). Disini saya bekerja dengan tim dan pengerjaan tugasnya fullstack bagian beck-end dengan framework bahasa pemrograman PHP atau .Net. Pada bagian front-end kebanyakan menggunakan template dan jquery. Ada pula bagian front-end menggunakan Vue JS hanya menambahkan fitur tambahan dan perubahan. "
    },
    {
        img: "public/img/pengalaman/hmi.jpg",
        title: "HmI Komisariat UNIBBA",
        content: "Pada Organisasi HmI saya menjabat sebagai Sekretaris Umum pada periode (2020-2022). Disini saya banyak menerapkan ilmu komputer yang saya kuasai seperti pada persuratan, pendataan, desain grafis dan lain sebagainya. Tentunya di HmI banyak belajar bekerja sama dengan pengurus bidang lainnya untuk mencapai tujuan bersama."
    },
    {
        img: "public/img/pengalaman/esport.JPG",
        title: "Turnamen Esport Kabupaten Bandung",
        content: "Pada kegiatan ini saya berperan sebagai panitia sekretaris yang membuat surat yang diperlukan untuk kegiatan, desain gambar dan lain sebagainya. Pada kegiatan ini kami bekerja sama dengan kompak menyelesaikan persiapan sampai hari H pelaksanaan berlangsung dan melaksanakan kegiatan turnamen dengan sebaik mungkin."
    },
    {
        img: "public/img/pengalaman/Of1.jpg",
        title: "Pelatihan BPPTIK offline",
        content: "Pada keilmuan yang saya ambil pada pelatihan ini yaitu Junior Office Operator. Kegiatan ini dimulai dari dari tahap pelatihan sampai pengujian sertifikasi. Pada pelatihan ini banyak belajar tentang microsoft word, excel, powerpoint dan penggunaan internet. Pada saat pengujian, saya lolos dan mendapatkan sertifikasi BNSP."
    },
    {
        img: "public/img/pengalaman/On1.jpg",
        title: "Pelatihan BPPTIK online",
        content: "Pada keilmuan yang saya ambil pada pelatihan ini yaitu Junior Web Developer. Kegiatan ini dimulai dari dari tahap pelatihan sampai pengujian sertifikasi. Pada pelatihan ini belajar tentang pembuatan tampilan web dengan menggunakan HTML dan CSS. Tampilan tersebut digabungkan dengan bahasa pemrograman PHP dan database MySQL. Bahkan sampai menggunakan framework Bootstrap dan JQuery. Pada tahap pengujian saya lolos dan mendapatkan sertifikasi BNSP."
    },
    {
        img: "https://2.bp.blogspot.com/-vgouJ9ooEQw/XMb6DlduH1I/AAAAAAAAKt8/U53Fztpk8E46yOslbmLn0CIalxGWf-hygCLcBGAs/s1600/bpptik%2B%25282%2529.jpeg",
        title: "Pelatihan BPPTIK Online Offline",
        content: "Pada pelatihan ini yaitu pelatihan dan sertifikasi Junior Design Grafic. Di pelatihan ini saya banyak belajar membuat pamplet dan menggunakan aplikasi Adobe Ilustrator. Pelatihan ini dilakukan 2 minggu secara online. Kemudian lolos ke tahap sertifikasi secara offline ke gedung BPPTIK Cikarang. Pada tahap pengujian saya lolos dan mendapatkan sertifikasi BNSP."
    }
];

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
const listDataPendidikan = [
    {
        img: "https://i.ytimg.com/vi/rH4AAbb6JDs/mqdefault.jpg",
        title: "Universitas Bale Bandung",
        content: "Pada kampus Universitas Bale Bandung saya mengambil jurusan S1 Teknik Informatika. Disini saya banyak belajar tentang meneliti dan membuat aplikasi berbasis web. Pembelajaran dikampus membuat saya terbiasa untuk mengerjakan tugas dengan jangka waktu yang ditentukan dan harus memahami materi dari awal secara teori dan praktek.",
        link: "https://unibba.ac.id/"
    },
    {
        img: "https://lh3.googleusercontent.com/p/AF1QipP4fwcFopqUgwxEpp1mggkP6_hyaiX3vqk8nxXP=s680-w680-h510",
        title: "SMK Islam Terpadu Talegong",
        content: "Pada tingkat pendidikan SLTA saya menimba ilmu di SMK Islam Terpadu Talegong dengan jurusan Administrasi Perkantoran. Disini saya banyak belajar mengenai penggunaan software Microsoft Office yang digunakan dalam perkantoran. Banyak belajar tentang mengatur atau mengelola penyimpanan barang kantor atau waktu kerja.",
        link: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/3250513f-5e0b-4945-9f10-140769b32e62"
    }
];

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
const listDataSosmed = [
    {
        link: "https://www.youtube.com/@atepsut5517",
        img: `
              <svg class="fill-current" width="20" role="img" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>YouTube</title>
                            <path
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
            `
    },
    {
        link: "https://www.instagram.com/atepsut2212/",
        img: `
              <svg class="fill-current" width="20" role="img" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Instagram</title>
                            <path
                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
            `
    },
    {
        link: "https://www.facebook.com/atep.mekarmulya",
        img: `
              <svg role="img" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Facebook</title>
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
            `
    },
    {
        link: "https://www.linkedin.com/in/atep-sutisna-b64438264",
        img: `
              <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Linkedln</title>
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
            `
    },
];

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