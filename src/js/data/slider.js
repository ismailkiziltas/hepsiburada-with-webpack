import Selector from '../selector'

const SliderSettings = {
    arrows: false,
    asNavFor: Selector.thumbSlider,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
};

const ThumbSliderSettings = {
    asNavFor: Selector.slider,
    autoplay: true,
    autoplaySpeed: 2 * 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: Selector.queries.lg,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
            }
        },
        {
            breakpoint: Selector.queries.md,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
};

export {
    SliderSettings,
    ThumbSliderSettings
}