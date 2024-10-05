document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY || window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Menentukan jika kita berada dalam rentang bagian
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));

                // Menetapkan link aktif berdasarkan index
                if (index === 0) {
                    navLinks[0].classList.add('active'); // Halaman Utama
                } else if (index === 1) {
                    navLinks[1].classList.add('active'); // Tentang Sekolah
                } else if (index === 2) {
                    navLinks[2].classList.add('active'); // Program Akademik
                } else if (index === 3) {
                    navLinks[2].classList.add('active'); // Guru (Tetap aktif Program Akademik)
                } else if (index === 4) {
                    navLinks[3].classList.add('active'); // Berita
                } else if (index === 5) {
                    navLinks[4].classList.add('active'); // Kontak
                }
            }
        });
    });
});
