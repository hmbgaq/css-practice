const buttonAll = document.querySelector('nav .btn_all');
const allMenu = document.querySelector('nav .allMenu');
const left = document.querySelector('main .main_slide .left');
const right = document.querySelector('main .main_slide .right');
const moveToTopBtn = document.querySelector('main .product_box .rightquick .moveToTopBtn');
const moveToBottomBtn = document.querySelector('main .product_box .rightquick .moveToBottomBtn');


buttonAll.addEventListener('click', (e) => {
    e.preventDefault();
    buttonAll.classList.toggle('active');
    allMenu.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('active');
});

moveToTopBtn.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
});

moveToBottomBtn.addEventListener('click', (e) => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});