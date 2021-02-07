const ceceApp = {};


ceceApp.init = () => {
    
    ceceApp.listeners();
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


ceceApp.listeners = () => {
    
  const checkbox = document.getElementById('menu');
    const navCover = document.getElementById('coverUp');

  checkbox.onclick = function() {
      
    document.body.classList.toggle('navOpen');
    doubleToggle(navCover, 'openTransition', 'closeTransition');
    
  }
}

const doubleToggle = function (element, class1, class2) {
    element.classList.toggle(class1);
    element.classList.toggle(class2);
}

  $(document).ready(function() {
    ceceApp.init();
  });
