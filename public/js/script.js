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
                        <img src="${item.img}" alt="" class="w-full">
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
    {
      img: "public/img/project/4.png",
      title: "Aplikasi pencatatan transaksi Garda Pest Control",
      content: "Aplikasi ini dibuat untuk memudahkan mencatat pemasukan dan pengeluaran keuangan Garda Pest Control kemudian memudahkan untuk dibuat data laporan secara otomatis. Aplikasi ini dibuat menggunakan bahasa pemrograman php native 7 dan Bootstrap 4."
    },
    {
      img: "public/img/project/5.png",
      title: "Aplikasi penjualan ONETED Store",
      content: "Aplikasi ini digunakan untuk mempublikasikan serta menjual produk ONETED Store kepada masyarakat luas secara online. Aplikasi ini dibuat menggunakan framework CodeIgniter 4 dan Bootstrap 4."
    },
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

  function setDataPengalaman(){
    const lokasi = document.querySelector('#listPengalaman');
    let data = '';
    listDataProject.forEach(item => {
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

//call function
setDataKeahlian();
setDataProject();
setDataPengalaman();