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

// ! this code does the animation still
// const hiddenTexts = document.querySelectorAll('.js-project-text');
// const mediaElements = document.querySelectorAll('.js-project-media');
// const bodyElement = document.body;

// // Animation control variable accessible from both text and media hover events
// let animationControl = null;

// // Function to manage the active state and stop animation if necessary
// const setActiveClass = (projectContent, newClass) => {
//     // Remove both classes
//     projectContent.classList.remove('text-highlighted', 'media-highlighted');
//     // Add the new class if applicable
//     if (newClass) {
//         projectContent.classList.add(newClass);

//         // If setting 'media-highlighted', add .has-project-overlay to the body
//         if (newClass === 'media-highlighted') {
//             bodyElement.classList.add('has-project-overlay');
//         }
//     } else {
//         // Remove .has-project-overlay from the body when no class is set
//         bodyElement.classList.remove('has-project-overlay');
//     }

//     // Stop animation if switching to 'media-highlighted'
//     if (newClass === 'media-highlighted' && animationControl) {
//         animationControl.clearAnimation();
//     }
// };

// // Function to animate text word by word for multiple elements (p, h3, etc.), starting after the first 4 words
// const animateElements = (elements, callback) => {
//     let currentElementIndex = 0;
//     let currentWordIndex = 0;
//     let interval;
//     let isPaused = false;

//     // Function to clear animation
//     const clearAnimation = () => {
//         clearInterval(interval);
//         if (callback) callback();
//     };

//     // Function to start animating a single element
//     const startAnimatingElement = () => {
//         if (isPaused) return;

//         const element = elements[currentElementIndex];
//         const fullText = element.dataset.fullText;
//         const truncatedText = fullText.split(' ').slice(0, 4).join(' '); // First 4 words
//         const remainingWords = fullText.split(' ').slice(4); // Words after the first 4

//         // Ensure element is visible and start with the truncated text
//         element.style.display = 'block';
//         element.textContent = truncatedText + ' ';

//         interval = setInterval(() => {
//             if (currentWordIndex < remainingWords.length) {
//                 element.textContent += remainingWords[currentWordIndex] + ' ';
//                 currentWordIndex++;
//             } else {
//                 clearInterval(interval);
//                 currentElementIndex++;
//                 currentWordIndex = 0;

//                 if (currentElementIndex < elements.length) {
//                     startAnimatingElement();
//                 } else {
//                     if (callback) callback();
//                 }
//             }
//         }, 100); // Faster interval speed (300ms per word)
//     };

//     return {
//         startAnimation: () => {
//             isPaused = false;
//             currentElementIndex = 0;
//             currentWordIndex = 0;
//             startAnimatingElement();
//         },
//         clearAnimation: () => {
//             isPaused = true;
//             clearAnimation();
//         }
//     };
// };

// hiddenTexts.forEach((hiddenText) => {
//     const projectContent = hiddenText.closest('.js-project-content');
//     const textElements = hiddenText.querySelectorAll('.js-animate-text-field > p, .js-animate-text-field > h3');


//     if (textElements.length > 0 && projectContent) {
//         textElements.forEach((element) => {
//             element.dataset.fullText = element.textContent.trim();
//         });

//         const truncateText = () => {
//             textElements.forEach((element, index) => {
//                 const truncatedText = element.dataset.fullText.split(' ').slice(0, 4).join(' ') + '...';
//                 element.textContent = index === 0 ? truncatedText : '';
//                 element.style.display = 'block';
//             });
//         };

//         // Initially set elements to truncated state
//         truncateText();

//         // Handle hover to animate full content and additional elements
//         hiddenText.addEventListener('mouseenter', () => {
//             // Check if 'text-highlighted' is already set to avoid redundant animations
//             if (!projectContent.classList.contains('text-highlighted')) {
//                 setActiveClass(projectContent, 'text-highlighted');

//                 // Animate all text elements
//                 animationControl = animateElements(Array.from(textElements));
//                 animationControl.startAnimation();
//             }
//         });

//         // Handle mouse leave to stop animation and truncate text
//         hiddenText.addEventListener('mouseleave', () => {
//             if (projectContent.classList.contains('text-highlighted')) return;

//             if (animationControl) animationControl.clearAnimation();

//             truncateText();
//         });
//     }
// });

// mediaElements.forEach((mediaElement) => {
//     const projectContent = mediaElement.closest('.js-project-content');

//     if (projectContent) {
//         mediaElement.addEventListener('mouseenter', () => {
//             setActiveClass(projectContent, 'media-highlighted');

//             // Stop any ongoing animation when switching to media
//             if (animationControl) animationControl.clearAnimation();

//             // Revert to truncated version for all hiddenTexts
//             hiddenTexts.forEach((hiddenText) => {
//                 const textElements = hiddenText.querySelectorAll('.js-animate-text-field > p, .js-animate-text-field > h3');
//                 if (textElements.length > 0) {
//                     textElements.forEach((element, index) => {
//                         const truncatedText = element.dataset.fullText.split(' ').slice(0, 4).join(' ') + '...';
//                         element.textContent = index === 0 ? truncatedText : '';
//                         element.style.display = 'block';
//                     });
//                 }
//             });
//         });

//         mediaElement.addEventListener('mouseleave', () => {
//             // Remove 'media-highlighted' and .has-project-overlay when leaving media
//             setActiveClass(projectContent, null);
//         });
//     }
// });

if(!touchDevice) {
    const projectTexts = document.querySelectorAll('.js-project-text');
    const mediaElements = document.querySelectorAll('.js-project-media');
    const bodyElement = document.body;

    // Function to manage the active state
    const setActiveClass = (projectContent, newClass) => {
        // Remove both classes initially
        projectContent.classList.remove('text-highlighted', 'media-highlighted');
        bodyElement.classList.remove('has-project-overlay');

        // Add the appropriate class
        if (newClass === 'media-highlighted') {
            projectContent.classList.add('media-highlighted');
            bodyElement.classList.add('has-project-overlay');
        } else {
            // Default to text-highlighted if media-highlighted is not set
            projectContent.classList.add('text-highlighted');
        }
    };

    projectTexts.forEach((projectText) => {
        const projectContent = projectText.closest('.js-project-content');

        if (projectContent) {
            // Ensure 'text-highlighted' is set by default
            setActiveClass(projectContent, 'text-highlighted');
        }
    });

    mediaElements.forEach((mediaElement) => {
        const projectContent = mediaElement.closest('.js-project-content');

        if (projectContent) {
            mediaElement.addEventListener('mouseenter', () => {
                // Set 'media-highlighted' when hovering over media
                setActiveClass(projectContent, 'media-highlighted');
            });

            mediaElement.addEventListener('mouseleave', () => {
                // Revert to 'text-highlighted' when leaving media
                setActiveClass(projectContent, null);
            });
        }
    });
}


// ***


// *** SWIPERS

initSwipers();

// ***
