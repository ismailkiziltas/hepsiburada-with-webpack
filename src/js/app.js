"use strict";
// Scss Files Compile
require('../scss/app.scss');

import Selector from './selector';

import Slider from './slider';
import Category from './category';
import { SliderSettings, ThumbSliderSettings } from './data'

const app = {
    init: () => {
        Slider(Selector.slider, SliderSettings);
        Slider(Selector.thumbSlider, ThumbSliderSettings);
        // Load Categories
        Category.init();
    },
    helpers: {
        isDesktop: () => window.matchMedia("(min-width: 1024px)").matches
    },
};

window.addEventListener('load', app.init());