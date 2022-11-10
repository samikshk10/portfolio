//windows preloader animation
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});


//========================= Scroll Spy ===================//

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






$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});




///// NAVIGATION BAR ////////////////////////

// Show and hide white navigation
$(function () {
    //show/hide nav on page load
    showHideNav();


    $(window).scroll(function () {
        //show/hide nav on windows scroll
        showHideNav();

    });




    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            //   $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //show back to top bottom 
            $("#back-to-top").fadeIn();

        } else {
            //Hide white bar
            $("nav").removeClass("white-nav-top");

            //show logo 
            //    $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hide back to top bottom 
            $("#back-to-top").fadeOut();
        }
    }
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
$(function () {

    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    $(".gallery-heading h4 span").addClass("animated fadeInDown infinite");
});

//|||||||||| Mobile Menu ||||||||| 
$(function () {

    //show mobile navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //hide mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });


});

//<====================  Testimonial  =====================>


$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

        navText: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});