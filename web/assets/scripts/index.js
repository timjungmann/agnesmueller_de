// *** HELPERS

// Check for reduced motion setting
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Check if touch device
const touchDevice = matchMedia('(hover: none)').matches;

// ***

// *** GENERAL

const main = document.getElementById('main');

// ***

// *** INIFINITE TEASER SCROLL

const teaserList = document.querySelector('.js-teaser-list');

// Repeat items
const firstThreeItems = teaserList.querySelectorAll(
    '.project-teasers__item:nth-child(-n+3)'
);
const lastThreeItems = teaserList.querySelectorAll(
    '.project-teasers__item:nth-last-child(-n+3)'
);

// Clone first three teasers
firstThreeItems.forEach((item, index) => {
    const clone = item.cloneNode(true);
    clone.removeAttribute('id');

    // Add classes to first original and cloned element
    if (index === 0) {
        item.classList.add('is-first');
        clone.classList.add('is-first-clone');
    }

    // Append clone
    clone.classList.add('is-clone');
    teaserList.appendChild(clone);
});

// Clone last three items
Array.from(lastThreeItems)
    .reverse()
    .forEach((item, index) => {
        const clone = item.cloneNode(true);
        clone.removeAttribute('id');

        // Add classes to first original and cloned element
        if (index === 0) {
            item.classList.add('is-last');
            clone.classList.add('is-last-clone');
        }

        teaserList.insertBefore(clone, teaserList.firstChild);
    });

const firstItem = document.querySelector('.is-first');
const lastItem = document.querySelector('.is-last');
const firstClone = document.querySelector('.is-first-clone');
const lastClone = document.querySelector('.is-last-clone');

scrollToFirst();

// Track scroll and adjust
teaserList.addEventListener('scroll', function () {
    // Scroll to beginning
    const containerScrollLeft = teaserList.scrollLeft;
    const itemOffsetLeft = firstClone.offsetLeft;
    const itemLeftPosition = itemOffsetLeft - containerScrollLeft;

    if (itemLeftPosition <= 0) {
        // Left side of first cloned item has hit left side of viewport
        scrollToFirst();
    }

    // Scroll to end
    const itemRightPosition = lastClone.getBoundingClientRect().right;
    const viewportWidth = window.innerWidth;

    if (itemRightPosition >= viewportWidth) {
        // Right side of last cloned item has hit right side of viewport
        scrollToLast();
    }
});

function scrollToFirst() {
    const firstItemLeft = firstItem.offsetLeft;

    console.log('firstItemLeft', firstItemLeft);

    // Scroll the container to the first element
    teaserList.scrollLeft = firstItemLeft;
}

function scrollToLast() {
    // Get the width of the scroll container and the item
    const containerWidth = teaserList.clientWidth;
    const itemWidth = lastItem.clientWidth;

    // Calculate the scroll position to place the right side of the item at the desired distance
    const scrollPosition = lastItem.offsetLeft + itemWidth - containerWidth;

    // Set the scroll position of the scroll container
    teaserList.scrollLeft = scrollPosition;
}

// ***

// *** HORIZONTAL SCROLL

// ! works with mouse wheel but messes up touchpad vertical scroll :(
// window.addEventListener("wheel", e => {
//     console.log('SCROLLING teaserList');
//     e.preventDefault();
//     if (e.deltaY > 0) teaserList.scrollLeft += 100;
//     else teaserList.scrollLeft -= 100;
// });

// ***

const teaserItems = document.querySelectorAll('.js-teaser-item');

// Helper function to calculate and log the position percentage
function updateAndLogPositions() {
    console.log('updateAndLogPositions running');
    const viewportWidth = window.innerWidth;

    teaserItems.forEach((teaserItem) => {
        const rect = teaserItem.getBoundingClientRect();

        // Check if the element is within the viewport
        if (rect.left < viewportWidth && rect.right > 0) {
            let percentage;

            if (rect.left <= 0) {
                percentage = 100; // Left edge of the teaserItem is at or past the left side of the viewport
            } else if (rect.left >= viewportWidth) {
                percentage = 0; // Left edge of the teaserItem is at the right side of the viewport
            } else {
                // Calculate percentage based on the position of the left edge within the viewport
                percentage = 100 - (rect.left / viewportWidth) * 100;
            }

            // teaserItem.dataset.position = Math.trunc(percentage);
            teaserItem.dataset.position = percentage;
            console.log(`Element #${teaserItem.id}: ${percentage.toFixed(2)}%`);
        }
        else {
            teaserItem.removeAttribute('data-position');
        }
    });
}

// Attach the updateAndLogPositions function to scroll and resize events
teaserList.addEventListener('scroll', updateAndLogPositions);
teaserList.addEventListener('resize', updateAndLogPositions);

// Initial call to log positions when the script loads
updateAndLogPositions();
