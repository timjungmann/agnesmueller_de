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

const aboutToggle = document.querySelectorAll('.js-about-toggle');

if (aboutToggle) {
    aboutToggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            body.classList.toggle('has-modal');
        });
    });
}

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
        project.addEventListener('click', (event) => {
            event.preventDefault();

            if (project.parentNode.classList.contains('is-active')) {
                project.parentNode.classList.remove('is-active');
            } else project.parentNode.classList.add('is-active');
        });
    });
}

// ***


// *** TEXT

const texts = document.querySelectorAll('.js-text');

if (texts.length > 0) {
    texts.forEach((project) => {
        project.addEventListener('click', () => {
            if (project.parentNode.classList.contains('is-active')) {
                project.parentNode.classList.remove('is-active');
            } else project.parentNode.classList.add('is-active');
        });
    });
}

// ***


// *** RELATED LINKS

const relatedLinks = document.querySelectorAll('.js-related-link');

if (relatedLinks.length > 0) {
    relatedLinks.forEach((relatedLink) => {
        const targetSlug = relatedLink.dataset.targetSlug;

        // Add click listener to each relatedLink
        relatedLink.addEventListener('click', (e) => {
            // Convert projects NodeList to an array to use .find()
            const matchingProject = Array.from(projects).find(
                (project) => project.parentNode.id === targetSlug
            );

            if (matchingProject) {
                // Add is-active class to the matching project
                matchingProject.parentNode.classList.add('is-active');
            }
        });
    });
}

// ***


// *** SWIPERS

initSwipers();

// ***
