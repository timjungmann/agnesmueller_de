// @ts-ignore
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
// import { SwiperOptions } from 'swiper/types';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swipers = [];

/**
 * Initialize Swipers
 */
export function initSwipers() {
    const carouselElements = document.querySelectorAll('.js-carousel');
    carouselElements.forEach((element) => {
        // Get swiper options
        const swiperParams = getSwiperParams();

        // Init swiper
        const swiper = new Swiper(element, swiperParams);
        swipers.push(swiper);

        // swiper.on('slideChange', function () {
        //     console.log('slide changed');
        // });
    });
}

/**
 * Get Swiper parameters based on swiper type
 */
function getSwiperParams() {
    // Default parameters
    let params = {
        // Docs: https://swiperjs.com/swiper-api

        // Install modules
        modules: [Autoplay, Keyboard, Pagination, Navigation],

        // loop: true,
        lazyPreloadPrevNext: 2,

        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        keyboard: {
            enabled: true
        },

        spaceBetween: 20,
        loop: true,


        // autoplay: {
        //     delay: 5000,
        // },
    };

    return params;
}