const popular_search_btn = document.querySelector('header .top .popular_search_button');
const popular_search = document.querySelector('header .top .popular_search');

const buttonAll = document.querySelector('nav .btn_all');
const allMenu = document.querySelector('nav .allMenu');

const left = document.querySelector('main .main_slide .left');
const right = document.querySelector('main .main_slide .right');

const main_slide = document.querySelector('main .main_slide');
const imgs = document.querySelectorAll('main .main_slide .imgs li');
let currentIndex = 0;

const moveToTopBtn = document.querySelector('main .product_box .rightquick .moveToTopBtn');
const moveToBottomBtn = document.querySelector('main .product_box .rightquick .moveToBottomBtn');


popular_search_btn.addEventListener('click', (e) => {
    popular_search.classList.toggle('active');
});

buttonAll.addEventListener('click', (e) => {
    buttonAll.classList.toggle('active');
    allMenu.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('active');
});


left.addEventListener('click', (e) => {
    currentIndex--;
    // currentIndex = currentIndex < 0 ? 0 : currentIndex
    main_slide.style.marginLeft = `${-1600*(currentIndex)}px`
    console.log('left', currentIndex)
});

right.addEventListener('click', (e) => {
    currentIndex++;
    // currentIndex = currentIndex >= imgs.length ? imgs.length-1 : currentIndex
    main_slide.style.marginLeft = `${-1600*(currentIndex)}px`
    console.log('right', currentIndex)
});


moveToTopBtn.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
});

moveToBottomBtn.addEventListener('click', (e) => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

