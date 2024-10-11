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
        // longSwipes: false,
        // longSwipesMs: 200,
        // cssMode: true,

        // Duration of transition between slides (in ms)
        // Default: 300
        // speed: 150,

        // Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
        // Default:5
        // threshold: 5,

        // spaceBetween: 50,
        // resistance: false,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        // keyboard: {
        //     enabled: true,
        //     onlyInViewport: false,
        // },
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