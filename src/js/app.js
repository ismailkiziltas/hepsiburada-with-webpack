"use strict";
// Scss Files Compile
require('../scss/app.scss');

import Selector from './selector';

import Slider from './slider';
import Category from './category';

const app = {
    init: () => {
        Slider({
            arrows: false,
            name: Selector.slider,
            sync: {
                name: Selector.thumbSlider,
                slidesToShow: app.helpers.isDesktop() ? 5 : 1,
                arrows: app.helpers.isDesktop() ? true : false,
                asNavFor: Selector.slider
            }
        });
        // Load Categories
        Category.init();
    },
    helpers: {
        isDesktop: () => window.matchMedia("(min-width: 1024px)").matches
    },
};

window.addEventListener('load', app.init());