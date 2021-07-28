const $ = require('jquery');

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
export default function Slider(element, options) {
    $(element).slick({
        ...options,
        nextArrow: '<button class="btn slick-arrow slick-next"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="btn slick-arrow slick-prev"><i class="fas fa-arrow-left"></i></button>'
    });
}