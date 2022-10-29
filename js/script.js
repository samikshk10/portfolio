

//windows preloader animation
$(window).on('load',function(){
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// For Team Section slider
$(function(){
    $("#photos").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0:{
                items: 1
            },
            //breakpoint from 480 up
            480:{
                items: 4
            },
        }
    });
});



///// NAVIGATION BAR ////////////////////////

// Show and hide white navigation
$(function() {
    //show/hide nav on page load
    showHideNav();

    
    $(window).scroll(function(){
       //show/hide nav on windows scroll
    showHideNav();
    
    });
    

    
   
    function showHideNav(){
           if( $(window).scrollTop() > 50 ) {
           //Show white nav
            $("nav").addClass("white-nav-top");
            
            //show dark logo
         //   $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
               
               //show back to top bottom 
            $("#back-to-top").fadeIn();
            
           }else {
               //Hide white bar
               $("nav").removeClass("white-nav-top");
               
               //show logo 
            //    $(".navbar-brand img").attr("src", "img/logo/logo.png");
               
               //Hide back to top bottom 
            $("#back-to-top").fadeOut();
           }
    }
});



//GOOGLE MAPS

$(window).on('load', function () {
    
    // on window load don't highlight navigation item
    
    if( $(window).scrollTop() < 50 )
        {
navLi.forEach((li) => {
    li.classList.remove("active");
    
});
        }
    
    
    // Map Variables
    var addressString = 'Shakyamuni Handicraft,Swayambhu Stupa,Kathmandu,Nepal';
    var myLatlng = {
        lat: 27.701690,
        lng: 85.320600
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    
    //Resize function 
    google.maps.event.addDomListener(window, 'resize', function(){
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
    



});




//Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});


//|||||||||| ANIMATION ||||||||| 

//animate on scroll
$(function() {
    
    new WOW().init();
});

$(window).on('load',function(){
    $("#home-heading-1").addClass("animated fadeInDown");
      $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
     $(".gallery-heading h4 span").addClass("animated fadeInDown infinite");
});

//|||||||||| Mobile Menu ||||||||| 
$(function() {
    
    //show mobile navigation
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height" ,"100%");
    });
    
     //hide mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height" ,"0%");
    });
    
    
});
















