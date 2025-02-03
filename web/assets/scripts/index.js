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


// *** HIDE TEXT

// if(!touchDevice) {
//     const projectTexts = document.querySelectorAll('.js-project-text');
//     const mediaElements = document.querySelectorAll('.js-project-media');
//     const bodyElement = document.body;

//     // Function to manage the active state
//     const setActiveClass = (projectContent, newClass) => {
//         // Remove both classes initially
//         projectContent.classList.remove('text-highlighted', 'media-highlighted');
//         bodyElement.classList.remove('has-project-overlay');

//         // Add the appropriate class
//         if (newClass === 'media-highlighted') {
//             projectContent.classList.add('media-highlighted');
//             bodyElement.classList.add('has-project-overlay');
//         } else {
//             // Default to text-highlighted if media-highlighted is not set
//             projectContent.classList.add('text-highlighted');
//         }
//     };

//     projectTexts.forEach((projectText) => {
//         const projectContent = projectText.closest('.js-project-content');

//         if (projectContent) {
//             // Ensure 'text-highlighted' is set by default
//             setActiveClass(projectContent, 'text-highlighted');
//         }
//     });

//     mediaElements.forEach((mediaElement) => {
//         const projectContent = mediaElement.closest('.js-project-content');

//         if (projectContent) {
//             mediaElement.addEventListener('mouseenter', () => {
//                 // Set 'media-highlighted' when hovering over media
//                 setActiveClass(projectContent, 'media-highlighted');
//             });

//             mediaElement.addEventListener('mouseleave', () => {
//                 // Revert to 'text-highlighted' when leaving media
//                 setActiveClass(projectContent, null);
//             });
//         }
//     });
// }

// ***


// *** SWIPERS

initSwipers();

// ***
