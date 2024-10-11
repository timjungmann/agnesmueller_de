import { initSwipers } from './carousel.js';

// *** HELPERS

// Check for reduced motion setting
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Check if touch device
const touchDevice = matchMedia('(hover: none)').matches;

// ***

// *** GENERAL

const body = document.getElementById('body');

// ***

// *** ABOUT

const aboutTrigger = document.querySelector('.js-about-trigger');
const aboutModal = document.querySelector('.js-about-modal');
const aboutClose = document.querySelector('.js-about-close');

let modalOpen = false;

function toggleModal() {
    modalOpen
        ? body.classList.remove('has-modal')
        : body.classList.add('has-modal');
    modalOpen = !modalOpen;
}

aboutTrigger.addEventListener('click', (e) => {
    toggleModal();
});

aboutClose.addEventListener('click', (e) => {
    toggleModal();
});

// ***

// *** HERO

const leftImages = document.querySelectorAll('.js-hero-left');
const rightImages = document.querySelectorAll('.js-hero-right');

function switchImage(currentImage, allImages) {
    const currentId = parseInt(currentImage.id);
    const newId = currentId < allImages.length - 1 ? currentId + 1 : 0;

    currentImage.classList.remove('is-active');
    allImages[newId].classList.add('is-active');
}

if (leftImages.length > 0) {
    leftImages.forEach((image) => {
        image.addEventListener('click', (e) => {
            switchImage(image, leftImages);
        });
    });
}

if (rightImages.length > 0) {
    rightImages.forEach((image) => {
        image.addEventListener('click', (e) => {
            switchImage(image, rightImages);
        });
    });
}

// ***

// *** PROJECT

const projects = document.querySelectorAll('.js-project');

if (projects.length > 0) {
    projects.forEach((project) => {
        project.addEventListener('click', () => {
            if (project.parentNode.classList.contains('is-active')) {
                project.parentNode.classList.remove('is-active');
            } else project.parentNode.classList.add('is-active');
        });
    });
}

// ***

// *** SWIPERS

initSwipers();

// ***
