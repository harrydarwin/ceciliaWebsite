const ceceApp = {};

ceceApp.clients = [
  {
    name: "Michael",
    review: `"Working with Cecilia over the years has been incredibly rewarding! She is extremely intelligent, driven, energetic, and hard working. Cecilia is always the member of every team who will volunteer to tackle any task needed with enthusiasm. I have had the opportunity to work with her at international film markets around the world. Cecilia is 10/10 the hard worker you want on your team!"`,
    image: "./assets/clients/Michael.jpeg"
  },

  {
    name: "Sarah",
    review: `"Cecilia Brush is a woman of many talents, but I truly think consulting is her niche. She is beyond professional with the knowledge to back her. Cecilia has been kind enough to assist in my own projects, giving advice where needed and being more than helpful. She is responsive, kind, and overall someone you NEED when venturing out on a new project!"`,
    image: "./assets/clients/Sarah.jpeg"
  },

  {
    name: "Tyler",
    review: `"I had the privilege of working with Cecilia and cannot wait to work with her again. She is extremely smart, personable, knowledgeable about the industry, and has a rolodex of contacts. She has always gone above and beyond and will work tirelessly to get your project to the next level. I highly recommend Cecilia for any film/tv project you need help with."`,
    image: "./assets/clients/Tyler.jpeg"
  },

  {
    name: "Kevin",
    review: `"Cecilia Brush is an individual who uniquely stands out. She displays great talents in leadership, resourcefulness and marketable awareness, she's a self-aware, highly versatile, natural communicator and a team player. Cecilia was a joy to work with because of her amazingly positive attitude and character. She brings the kind of skills and experiences you’re looking for in an applicant and will also quickly become an asset and help a project grow in any way she can."`,
    image: "./assets/clients/KevinMichael.jpeg"
  },

]
// if (window.location.href === `file:///c:/Users/harry/OneDrive/Documents/sites/ceciliasStuff/index.html`){

//   ceceApp.clientName = document.getElementById('clientName');
//   ceceApp.clientText = document.getElementById('clientText');
//   ceceApp.clientImage = document.getElementById('clientPic');
// }

ceceApp.clientName = document.getElementById('clientName');
ceceApp.clientText = document.getElementById('clientText');
ceceApp.clientImage = document.getElementById('clientPic');


ceceApp.init = () => {
   
    ceceApp.listeners();
    ceceApp.runTickerSlide();
    ceceApp.runNetflixSlider();
}

 ceceApp.runNetflixSlider = () => {
   var scaling = 1.25;
   // count
   var currentSliderCount = 0;
   // var videoCount = $(".slider-container").children().length;
   var videoCount = 1300;
   // var videoCount = $(".slider-container").children().length;
   var showCount = 4;
   var sliderCount = videoCount / showCount;
   var controlsWidth = 40;
   var scollWidth = 0;
   var videoWidth = 0;
   var videoHeight = 0;
   var videoWidthDiff = 0;
   var videoHeightDiff = 0;

   // alert("videoCount: "+videoCount);


   $(document).ready(function () {
     // $('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container'); 
     initSlider();
   });

   $(window).resize(function () {
     initSlider();
   });
   function initSlider() {
     // elements
     var win = $(window);
     var sliderFrame = $(".slider-frame");
     var sliderContainer = $(".slider-container");
     var slide = $(".slide");

     // counts
     var scollWidth = 0;


     // sizes
     var windowWidth = win.width();
     var frameWidth = win.width() - 80;
     if (windowWidth >= 0 && windowWidth <= 430) {
       showCount = 2;
     } else if (windowWidth >= 430 && windowWidth <= 768) {
       showCount = 3;
     } else if (windowWidth >= 769 && windowWidth <= 992) {
       showCount = 4;
     }

     videoWidth = ((windowWidth - controlsWidth * 2) / showCount);
     videoHeight = Math.round(videoWidth / (16 / 9));

     // console.log("videoWidth: "+videoWidth);

     videoWidthDiff = (videoWidth * scaling) - videoWidth;
     videoHeightDiff = (videoHeight * scaling) - videoHeight;

     // console.log("windowWidth: "+windowWidth);


     // set sizes
     sliderFrame.width('auto');
     sliderFrame.height('410px');


     // sliderFrame.css("top", (videoHeightDiff / 2));

     sliderContainer.height(videoHeight * scaling);
     // sliderContainer.width((videoWidth * videoCount) + videoWidthDiff);
     sliderContainer.width(80000);
     // console.log("sliderContainer: width: "+sliderContainer.width());
     // sliderContainer.width(4160);

     sliderContainer.css("top", (videoHeightDiff / 2));
     sliderContainer.css("margin-left", (controlsWidth));

    //  slide.height(videoHeight);
     slide.width(videoWidth);
     $(".slide").css("margin", 2);
     // hover effect
     $(".slide").mouseover(function () {



       $(this).css("width", videoWidth * scaling);
       $(this).css("height", videoHeight * scaling);
       $(this).css("top", -(videoHeightDiff / 2));
       $(this).css("margin", 2);
       var current_id = $(this).parent().attr('id');

       $("#" + current_id).width($("#" + current_id).width() + 250);

       // console.log("current_id: "+current_id);
       // console.log("indexxx: "+$("#"+current_id+" >
       // .slide").index($(this)));
       if ($("#" + current_id + " > .slide").index($(this)) == 0 || ($("#" + current_id + " > .slide").index($(this))) % 4 == 0) {
         // do nothing
       }
       else if (($("#" + current_id + " > .slide").index($(this)) + 1) % 4 == 0 && $("#" + current_id + " > .slide").index($(this)) != 0) {
         $(this).parent().css("margin-left", -(videoWidthDiff - controlsWidth));
       }
       else {
         $(this).parent().css("margin-left", - (videoWidthDiff / 2));
       }
     }).mouseout(function () {
       $(this).css("width", videoWidth * 1);
       $(this).css("height", videoHeight * 1);
       $(this).css("margin", 2);
       $(this).css("top", 0);
       $(this).parent().css("margin-left", controlsWidth);
     });

     // controls
     // console.log("in controlls: frameWidth: "+frameWidth);
     // console.log("in controlls: scollWidth: "+scollWidth);
     controls(frameWidth, scollWidth);
   }
   function controls(frameWidth, scollWidth) {
     var prev = $(".prev");
     var next = $(".next");

     prev.on("click", function () {
       // console.dir($(this));
       // console.log("currentSliderCount: "+currentSliderCount);
       // console.log("sliderCount: "+sliderCount);
       // console.log("frameWidth: "+frameWidth);





       var CurrentslideContantner = $(this).next().next().attr("id");
       // console.log("slide-contentner: "+ CurrentslideContantner );

       var currentSlideElements = $("#" + CurrentslideContantner).children().length;
       // console.log("currentSlideElements ---- : "+currentSlideElements);
       var currentSliderWidth = $("#" + CurrentslideContantner);


       $("#" + CurrentslideContantner).width((videoWidth * currentSlideElements) + videoWidthDiff);
       // console.log("after width changed: "+currentSliderWidth.width());


       scollWidth = scollWidth + frameWidth;
       // console.log("scollWidth: aftr: "+scollWidth);

       if (scollWidth >= currentSliderWidth.width() || scollWidth <= 0 || currentSlideElements == 4) {
         scollWidth = 0;
       }




       if (currentSliderCount < 0) {
         currentSliderCount = 0;
       }

       $("#" + CurrentslideContantner).animate({
         left: - scollWidth
       }, 10, function () {
         // console.log("currentSliderCount: "+currentSliderCount +" And
         // sliderCount: "+sliderCount);
         if (currentSliderCount >= sliderCount - 1) {

           $("#" + CurrentslideContantner).css("left", 0);
           currentSliderCount = 0;
           scollWidth = 0;
         } else {
           currentSliderCount++;
         }
       });
     });
     next.on("click", function () {


       scollWidth = scollWidth - frameWidth;
       console.log("scollWidth: b4: " + scollWidth);
       var CurrentslideContantner = $(this).next().attr("id");

       // console.log("CurrentslideContantner: "+CurrentslideContantner);

       var currentSlideElements = $("#" + CurrentslideContantner).children().length;
       console.log("currentSlideElements ---- : " + currentSlideElements);
       var currentSliderWidth = $("#" + CurrentslideContantner);

       $("#" + CurrentslideContantner).width((videoWidth * currentSlideElements) + videoWidthDiff);
       console.log("after width changed: " + currentSliderWidth.width());

       if (Math.abs(scollWidth) >= currentSliderWidth.width() || currentSlideElements == 4) {
         scollWidth = 0;
       }

       console.log("scollWidth: after: " + scollWidth);
       console.log("currentSliderCount: : " + currentSliderCount);

       if (Math.abs(currentSliderCount) == 2 && currentSlideElements > 8) {
         scollWidth = scollWidth - 1278;
       }
       if (Math.abs(currentSliderCount) == 3 && currentSlideElements > 8) {
         //console.log("inside if");
         scollWidth = 0;
       }


       $('#' + CurrentslideContantner).animate({
         left: + scollWidth
       }, 10, function () {
         // console.log("currentSliderCount:B4 "+currentSliderCount);
         //console.log("sliderCount: "+sliderCount);

         //console.log("currentSliderCount: "+currentSliderCount +" And sliderCount: "+sliderCount);
         if (Math.abs(currentSliderCount) >= sliderCount - 1) {

           $('#' + CurrentslideContantner).css("left", 0);
           currentSliderCount = 0;
           scollWidth = 0;


         } else {

           currentSliderCount--;
         }

       });

       // $("#trending-items").css("left", scollWidth);
     });
   };

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


ceceApp.updateClient = (i) => {

  ceceApp.clientName.innerHTML = ceceApp.clients[i].name;
  ceceApp.clientText.innerHTML = ceceApp.clients[i].review;
  ceceApp.clientImage.setAttribute('src', ceceApp.clients[i].image);
  ceceApp.clientImage.setAttribute('alt', `Photo of happy client, ${ceceApp.clients[i].name}.`)
}


ceceApp.listeners = () => {
  
  const checkbox = document.getElementById('menu');
  const navCover = document.getElementById('coverUp');
  const links = document.getElementsByTagName('a');

  const previous = document.getElementById('previousClient');
  const next = document.getElementById('nextClient');
  

  //move through clients
  // if (window.location.href === `file:///c:/Users/harry/OneDrive/Documents/sites/ceciliasStuff/index.html`) {


    let c = 0;
    
    ceceApp.updateClient(c)
    next.onclick = () => {
      if(c < ceceApp.clients.length - 1){c++; }
      else {c = 0}
      ceceApp.updateClient(c);
    }
    previous.onclick =() => {
      if(c > 0){c--;}
      else{c = ceceApp.clients.length -1;}
      ceceApp.updateClient(c);
    }
  // }

  
  
    $('.navLink').on('click', function(){
      console.log('hi')
      if(navCover.classList.contains('closeTransition')) {
        doubleToggle(navCover, 'openTransition', 'closeTransition');
      }
    })

  $('.menu').on('change', function() {
      console.log('hi')
    $('body').toggleClass('navOpen');
    doubleToggle(navCover, 'openTransition', 'closeTransition');
  })

  $('#modalSearch').on('shown.bs.modal', function() {
   
    $('#searchSubmit').on('click', function (e) {
      e.preventDefault();
      // SET SEARCH FUNCTION HERE!
    })
  })
  

}
const doubleToggle = function (element, class1, class2) {
    element.classList.toggle(class1);
    element.classList.toggle(class2);
}


  $(document).ready(function() {
    ceceApp.init();
  });

