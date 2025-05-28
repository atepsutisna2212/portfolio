export function translatePage(targetLang) {
    const elements = document.querySelectorAll(".translate"); // Pilih elemen teks
    elements.forEach(element => {
        const originalText = element.innerText.trim();
        if (originalText.length > 0) { // Pastikan tidak menerjemahkan elemen kosong
            fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`)
                .then(response => response.json())
                .then(data => {
                    element.innerText = data[0][0][0];
                })
                .catch(error => console.error("Translation error:", error));
        }
    });
}

const translations = {
    en: {
        home: "Home",
        about: "About Me",
        portfolio: "Portfolio",
        skill: "Skill",
        education: "Education",
        experience: "Experience",
        major: "UNIBBA | S1 Informatics Engineering",
        major_detail: `Studying and implementing
                        <span class="text-dark font-bold dark:text-white"> computer science with a focus on web applications.</span>`,
        call: "Call Me",
        about_detail1: `S1 majoring in infomatics engineering at Bale Bandung University campus which graduated in 2022. I have experience working as a <b>Web Programmer</b> in a Software House company. Tools that have been used in creating web-based applications. From the Back-end side using PHP programming language with Laravel and CodeIgniter frameworks, .Net programming language using Net 4.8 and .Net Core versions. From the Front-end side using HTML, CSS, JavaScript, JQuery and several css libraries such as Bootstrap and Tailwind, while using a framework that has been worked on using VueJs. Actively participates in campus and off-campus seminars, also actively participates in training <a
                            href="https://digitalent.kominfo.go.id/#" target="_blank"
                            class="font-bold text-primary">BPPTIK</a> online and ofline and another trainings online such a  <a href="https://www.dicoding.com/" target="_blank"
                            class="font-bold text-primary">dicoding</a>.`,
        team: "work team",
        team_detail: `Experienced in teamwork, one of which is teamwork to complete projects in the company as a fullstack developer. In the organization <a href="https://id.wikipedia.org/wiki/Himpunan_Mahasiswa_Islam" target='_blank' class='font-bold text-green-800'>Islamic Student Association</a> which served as General Secretary for the period (2020-2022). Applying computer science to organizational activities such as designing banners, pamphlets and others. Making official letters and managing organizational data using Microsoft Office software. Then participated in the committee as secretary in the 2023 Bandung Regency Esport Tournament activity which was responsible for making official letters and designing posters, pamphlets, certificates and so on needed in the activity.`,
        portfolio_detail: `This project contains my experience about what I do such as work experience, organizational activities, freelance, campus assignments, training etc. `,
        skill_detail1: `Tools that I am good at`,
        skill_detail2: `The software is a commonly used tool.`,
        education_detail1: `History of education`,
        education_detail2: `The place where I have been studying in high school and college.`,
        experience_detail1: `experiences that have been done`,
        experience_detail2: `Starting from companies, organizational activities, committee and also training.`,
        cv: ` Show CV`,
        portfolio_project: `Show Portfolio Project`,
    },
    id: {
        home: "Beranda",
        about: "Tentang Saya",
        portfolio: "Portfolio",
        skill: "Keahlian",
        education: "Pendidikan",
        experience: "Pengalaman",
        major: "UNIBBA | S1 Teknik Informatika",
        major_detail: `Mempelajari dan mengimplementasikan
                        <span class="text-dark font-bold dark:text-white">ilmu komputer fokus pada aplikasi web</span>`,
        call: "Hubungi saya",
        about_detail1: `S1 jurusan teknik infomatika kampus Universitas Bale Bandung yang lulus pada tahun 2022. Saya pernah berpengalaman kerja sebagai <b>Web Programmer</b> di perusahaan Software House. Tools yang pernah digunakan dalam membuat aplikasi berbasis web. Dari sisi Back-end menggunakan bahsa pemrograman PHP dengan framework Laravel dan CodeIgniter, bahasa pmrograman .Net menggunakan versi Net 4.8 dan .Net Core. Dari sisi Front-end menggunakan HTML, CSS, JavaScript, JQuery serta beberapa library css seperti Bootstrap dan Tailwind, adapun menggunakan framework yang pernah di garap menggunakan VueJs. Aktif mengikuti seminar kampus dan luar kampus, aktif pula mengikuti pelatihan<a
                            href="https://digitalent.kominfo.go.id/#" target="_blank"
                            class="font-bold text-primary">BPPTIK</a> daring dan juga luring serta pelatihan-pelatihan
                        daring
                        lainnya seperti <a href="https://www.dicoding.com/" target="_blank"
                            class="font-bold text-primary">dicoding</a>.`,
        team: "kerja tim",
        team_detail: `Berpengalaman dalam kerja dalam tim, salah satunya kerja tim menyelesaikan project di perusahaan sebagai fullstack developer . Dalam organisasi <a
                            href="https://id.wikipedia.org/wiki/Himpunan_Mahasiswa_Islam" target="_blank"
                            class="font-bold text-green-800">Himpunan mahasiswa Islam</a>
                        yang menjabat sebagai Sekretaris Umum periode (2020-2022). Menerapkan ilmu komputer pada
                        kegiatan organisasi
                        seperti mendesain banner, pamplet dan lain-lain. Membuat surat resmi dan mengelola data
                        organisasi
                        menggunakan software microsoft office. Kemudian ikut serta menjadi panitia sebagai sekretaris
                        dalam kegiatan Turnamen Esport Kab. Bandung 2023 yang banyak bertugas untuk membuat surat resmi
                        dan mendesain poster, pamplet, sertifikat dan lain sebagainya yang diperlukan dalam kegiatan.`,
        portfolio_detail: `Project ini berisi pengalaman saya
                        mengenai apa yang saya kerjakan seperti pengalaman kerja, kegiatan organisasi, freelance, tugas kampus, latihan
                        dan lain sebagainya. `,
        skill_detail1: `Tools yang saya kuasai`,
        skill_detail2: `Software tersebut merupakan alat yang biasa
                        digunakan.`,
        education_detail1: `Riwayat pendidikan`,
        education_detail2: `Tempat menimba ilmu
                        yang selama ini saya tempuh di SLTA dan perguruan tinggi.`,
        experience_detail1: `Pengalaman yang pernah dilakukan`,
        experience_detail2: `Dimulai dari perusahaan, kegiatan
                        organisasi,
                        kepanitian dan juga pelatihan.`,
        cv: `Tampilkan CV`,
        portfolio_project: `Tampilkan Portfolio Project`,
    }
};

export function changeLanguage(setLang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (key) {
            el.innerHTML = translations[setLang][key] || key;
        }
    });
}