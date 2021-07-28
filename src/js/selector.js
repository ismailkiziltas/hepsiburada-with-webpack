export default {
    slider: "[slider]",
    thumbSlider: "[slider-thumb]",
    categories: "[categories]",
    classes: {
        categories: {
            item: "col px-0 position-relative",
            link: "nav-link text-muted fw-bold py-3 fs-5 border-start",
            children: {
                nav: "position-absolute bg-soft-gray d-none start-0 sub-category-list w-100 z-100",
                list: "bg-soft-gray sub-category-list rounded-bottom",
                item: "d-block",
                link: "nav-link text-muted fw-bold py-3"
            }
        }
    }
};