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
  if (window.location.href === `file:///c:/Users/harry/OneDrive/Documents/sites/ceciliasStuff/index.html`) {


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
  }

  
  
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

