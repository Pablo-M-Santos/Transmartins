function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../Transmartins/assets/img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../Transmartins/assets/img/x.png";
    }
}

// scroll sections and footer.
let sections = document.querySelectorAll('section');
let footer = document.querySelector('footer');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

    // Check if in footer and update navbar
    let footerTop = footer.offsetTop;
    let windowHeight = window.innerHeight;

    if (window.scrollY + windowHeight >= footerTop) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        let contactLink = document.querySelector('header nav a[href="#contato"]');
        if (contactLink) {
            contactLink.classList.add('active');
        }
    }

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove navbar click navbar link (scroll)
};


