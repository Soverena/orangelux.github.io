$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'ease-in',
    dots: false,
    arrows: false,
    pauseOnDotsHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});