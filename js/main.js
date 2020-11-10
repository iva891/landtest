'use strict'

// загрузка видео только от 1024+ px

var videoContainer = document.querySelector('.page__video-wrapper');

var videoLoad = function(){
    videoContainer.innerHTML = '<video autoplay muted loop class="page__video"><source src="img/mavic2pro.mp4" type="video/mp4"></video>';
};

if(window.innerWidth >= 1024) {
    videoLoad();
};

//слайдер

var items = document.querySelectorAll('.techno__item');
var parent = document.querySelector('.slider__wrapper');
var slides = parent.querySelectorAll('.slider__slide');
var left = document.querySelector('.slider__arrow--left');
var right = document.querySelector('.slider__arrow--right');

var index = 0;
slides[0].classList.add('show-slide');


let toggleSlide = function (j) {

    index = j;
    if (j < 0) {
        index = slides.length - 1;
    }

    if (j > slides.length - 1) {
        index = 0;
    }

    for( let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show-slide');
        // dots[i].classList.remove('active-dot');
    }

    slides[index].classList.add('show-slide');
    // dots[index].classList.add('active-dot');
};

left.addEventListener('click', function() {
    index--;
    toggleSlide(index);
    for(var i = 0; i < items.length; i++) {
        clearFill(items[i])
    };
    activeFill(items[index]);
});

right.addEventListener('click', function() {
    index++;
    toggleSlide(index);
    for(var i = 0; i < items.length; i++) {
        clearFill(items[i])
    };
    activeFill(items[index]);
});

//очистка красной заливки svg

var clearFill = function (item) {
    var greyFillImgs = item.querySelectorAll('[fill="#c91226"]');
    var greyStrokeImgs = item.querySelectorAll('[stroke="#c91226"]');

    item.classList.remove('red-text');

    for(var i = 0; i < greyFillImgs.length; i++) {
        greyFillImgs[i].setAttribute('fill', '#afafaf');
    };
    for(var i = 0; i < greyStrokeImgs.length; i++) {
        greyStrokeImgs[i].setAttribute('stroke', '#afafaf');
    };
};



//заливка красным svg и текста

var activeFill = function (item) {
    var greyFillImgs = item.querySelectorAll('[fill="#afafaf"]');
    var greyStrokeImgs = item.querySelectorAll('[stroke="#afafaf"]');
    for(var i = 0; i < greyFillImgs.length; i++) {
        greyFillImgs[i].setAttribute('fill', '#c91226');
    };
    for(var i = 0; i < greyStrokeImgs.length; i++) {
        greyStrokeImgs[i].setAttribute('stroke', '#c91226');
    };

    item.classList.add('red-text');
};

//показ слайда по клику на верхних блоках 

var showSlide = function (idx) {
    items[idx].addEventListener('click', function() {
        toggleSlide(idx);
        for(var i = 0; i < items.length; i++) {
            clearFill(items[i])
        };
        activeFill(items[idx]);
    });
};

for(var i = 0; i < items.length; i++) {
    showSlide(i);
};

//показ мобильного меню 

var openBtn = document.querySelector('.header__nav-open');
var menuMobile = document.querySelector('.nav__list');
var btnCallback = document.querySelector('.header__button');

openBtn.addEventListener('click', function() {
    menuMobile.classList.toggle('show-menu');
    btnCallback.classList.toggle('show-menu');
    openBtn.classList.toggle('toggle-open');
});