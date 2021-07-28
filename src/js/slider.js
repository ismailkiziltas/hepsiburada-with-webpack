const $ = require('jquery');
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.scss';

export default function Slider(options) {
    $(options.name).slick({
        ...options,
        nextArrow: '<button class="btn slick-arrow slick-next"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button class="btn slick-arrow slick-prev"><i class="fas fa-arrow-left"></i></button>'
    });
    
    if(options.sync) {
        $(options.sync.name).slick({
            slidesToShow: options.sync.slidesToShow ? options.sync.slidesToShow : 1,
            slidesToScroll: options.sync.slidesToScroll ? options.sync.slidesToScroll : 1,
            asNavFor: options.name,
            arrows: options.sync.arrows ? options.sync.arrows : false,
            nextArrow: '<button class="btn slick-arrow slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="btn slick-arrow slick-prev"><i class="fas fa-arrow-left"></i></button>',
            dots: options.sync.dots ? options.sync.dots : false,
            centerMode:  options.sync.centerMode ? options.sync.centerMode : false,
            focusOnSelect:  options.sync.focusOnSelect ? options.sync.focusOnSelect : true,
            infinite: options.infinite ? options.infinite : false
        });
    }
}