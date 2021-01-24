const ceceApp = {};



ceceApp.init = () => {
    ceceApp.runTickerSlide();
   
}



ceceApp.runTickerSlide = () => {
    $('#carousel').slick({
        slidesToShow: 4,
        useTransform: true,
        useCss: true,
        cssEase: 'ease-in-out', 
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        infinite: true,
        focusOnSelect: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });
}


  $(document).ready(function() {
    ceceApp.init();
  });
