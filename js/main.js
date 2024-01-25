const menuBtn = document.querySelector('.menuBtn');
const navbarList = document.querySelector('.navbar__list');
const hero = document.querySelector('.hero');
const categoryImg = document.querySelectorAll('.category__list img');

menuBtn.addEventListener('click', () => {
    navbarList.classList.toggle('nav-active');
})

window.addEventListener('scroll', () => {
    navbarList.classList.remove('nav-active', window.scrollY);
})

hero.addEventListener('click', () => {
    navbarList.classList.remove('nav-active', window.scrollY);
})

let Mobileimages = [
    './assets/category__image-mobile1.png',
    './assets/category__image-mobile2.png',
    './assets/category__image-mobile3.png',
    './assets/category__image-mobile4.png',
    './assets/category__image-mobile1.png',
    './assets/category__image-mobile2.png',
    './assets/category__image-mobile3.png',
    './assets/category__image-mobile4.png',
]
let Desktopimages = [
    './assets/category__image1.png',
    './assets/category__image2.png',
    './assets/category__image3.png',
    './assets/category__image4.png',
    './assets/category__image1.png',
    './assets/category__image2.png',
    './assets/category__image3.png',
    './assets/category__image4.png',
]

let windowwidth;
window.onload = function () {
    windowwidth = window.innerWidth;
    if (windowwidth <= 540) {
        categoryImg.forEach((res, id) => {
            res.src = Mobileimages[id];
        });
    } else {
        categoryImg.forEach((res, id) => {
            res.src = Desktopimages[id];
        });
    }
};

window.onresize = function () {
    let responsWidth = document.body.clientWidth;
    if (responsWidth <= 540 || windowwidth <= 540) {
        categoryImg.forEach((res, id) => {
            res.src = Mobileimages[id];
        });
    } else {
        categoryImg.forEach((res, id) => {
            res.src = Desktopimages[id];
        });
    }
};



var swiperCategory = new Swiper(".swiperCategory", {
    slidesPerView: 3.3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiperCategory-button-next",
        prevEl: ".swiperCategory-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        767: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
})
var swiperCourses = new Swiper(".swiperCourses", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    enabled: false,
    pagination: {
        clickable: false,
    },
    navigation: {
        nextEl: ".swiperCourses-button-next",
        prevEl: ".swiperCourses-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            clickable: true,
            enabled: true
        },
    }
})
