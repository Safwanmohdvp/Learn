jQuery(function ($) {
    'use strict';

    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.header-sticky').addClass("is-sticky");
        }
        else{
            $('.header-sticky').removeClass("is-sticky");
        }
    });
    var c, currentScrollTop = 0,
    navbar = $('.header-sticky');
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    // Search Menu JS
    $(".others-option .search-box i").on("click", function(){
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function(){
        $(".search-overlay").removeClass("search-overlay-active");
    });

    // Home Slides
    $('.home-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        autoHeight: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });
    $(".home-slides").on("translate.owl.carousel", function(){
        $(".main-banner-content .sub-title").removeClass("animated fadeInDown").css("opacity", "0");
        $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-banner-content .default-btn").removeClass("animated fadeInLeft").css("opacity", "0");
        $(".main-banner-content .optional-btn, .main-banner-content .video-btn").removeClass("animated fadeInUp").css("opacity", "0");
    });
    $(".home-slides").on("translated.owl.carousel", function(){
        $(".main-banner-content .sub-title").addClass("animated fadeInDown").css("opacity", "1");
        $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-banner-content .default-btn").addClass("animated fadeInLeft").css("opacity", "1");
        $(".main-banner-content .optional-btn, .main-banner-content .video-btn").addClass("animated fadeInUp").css("opacity", "1");
    });

    // Courses Categories Slides
    $('.courses-categories-slides').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        navRewind: false,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    // MixItUp Shorting
    try {
        var mixer = mixitup('.shorting', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    });

    // Courses Slides
    $('.courses-slides').owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        navRewind: false,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    
    // Blog Slides
    $('.blog-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Team Slides
    $('.team-slides').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        navRewind: false,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    
    // Mission Slides
    $('.mission-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
    });

    // Testimonials Slides
    $('.testimonials-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        center: true,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Nice Select JS
    $('select').niceSelect();

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    
    // Count Time 
    function makeTimer() {
        var endTime = new Date("September 20, 2025 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 0);
    
    // Particles Js
    if(document.getElementById("particles-js-circle-bubble")) particlesJS("particles-js-circle-bubble", {
        "particles": {
            "number": {
                "value": 300, "density": {
                    "enable": true, "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type":"circle", "stroke": {
                    "width": 0, "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            },
            "opacity": {
                "value":1, "random":true, "anim": {
                    "enable": true, "speed": 1, "opacity_min": 0, "sync": false
                }
            },
            "size": {
                "value":3, "random":true, "anim": {
                    "enable": false, "speed": 4, "size_min": 0.3, "sync": false
                }
            },
            "line_linked": {
                "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            },
            "move": {
                "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": true, "mode": "bubble"
                },
                "onclick": {
                    "enable": true, "mode": "repulse"
                },
                "resize":true
            },
            "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                },
                "repulse": {
                    "distance": 400, "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect":true
    });
    if(document.getElementById("particles-js-circle-bubble-2")) particlesJS("particles-js-circle-bubble-2", {
        "particles": {
            "number": {
                "value": 100, "density": {
                    "enable": true, "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type":"circle", "stroke": {
                    "width": 0, "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            },
            "opacity": {
                "value":1, "random":true, "anim": {
                    "enable": true, "speed": 1, "opacity_min": 0, "sync": false
                }
            },
            "size": {
                "value":3, "random":true, "anim": {
                    "enable": false, "speed": 4, "size_min": 0.3, "sync": false
                }
            },
            "line_linked": {
                "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            },
            "move": {
                "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": true, "mode": "bubble"
                },
                "onclick": {
                    "enable": true, "mode": "repulse"
                },
                "resize":true
            },
            "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                },
                "repulse": {
                    "distance": 400, "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect":true
    });
    if(document.getElementById("particles-js-circle-bubble-3")) particlesJS("particles-js-circle-bubble-3", {
        "particles": {
            "number": {
                "value": 100, "density": {
                    "enable": true, "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type":"circle", "stroke": {
                    "width": 0, "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            },
            "opacity": {
                "value":1, "random":true, "anim": {
                    "enable": true, "speed": 1, "opacity_min": 0, "sync": false
                }
            },
            "size": {
                "value":3, "random":true, "anim": {
                    "enable": false, "speed": 4, "size_min": 0.3, "sync": false
                }
            },
            "line_linked": {
                "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            },
            "move": {
                "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": true, "mode": "bubble"
                },
                "onclick": {
                    "enable": true, "mode": "repulse"
                },
                "resize":true
            },
            "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                },
                "repulse": {
                    "distance": 400, "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect":true
    });
    if(document.getElementById("particles-js-circle-bubble-4")) particlesJS("particles-js-circle-bubble-4", {
        "particles": {
            "number": {
                "value": 100, "density": {
                    "enable": true, "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type":"circle", "stroke": {
                    "width": 0, "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            },
            "opacity": {
                "value":1, "random":true, "anim": {
                    "enable": true, "speed": 1, "opacity_min": 0, "sync": false
                }
            },
            "size": {
                "value":3, "random":true, "anim": {
                    "enable": false, "speed": 4, "size_min": 0.3, "sync": false
                }
            },
            "line_linked": {
                "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            },
            "move": {
                "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": true, "mode": "bubble"
                },
                "onclick": {
                    "enable": true, "mode": "repulse"
                },
                "resize":true
            },
            "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                },
                "repulse": {
                    "distance": 400, "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect":true
    });

    // Gallery Viewer JS
    var console = window.console || { log: function () {} };
    var $images = $('.gallery-area');
    var options = {
        // inline: true,
        url: 'data-original',
        ready: function (e) {
            console.log(e.type);
        },
        show: function (e) {
            console.log(e.type);
        },
        shown: function (e) {
            console.log(e.type);
        },
        hide: function (e) {
            console.log(e.type);
        },
        hidden: function (e) {
            console.log(e.type);
        },
        view: function (e) {
            console.log(e.type);
        },
        viewed: function (e) {
            console.log(e.type);
        }
    };
    $images.on({
        ready:  function (e) {
            console.log(e.type);
        },
        show:  function (e) {
            console.log(e.type);
        },
        shown:  function (e) {
            console.log(e.type);
        },
        hide:  function (e) {
            console.log(e.type);
        },
        hidden: function (e) {
            console.log(e.type);
        },
        view:  function (e) {
            console.log(e.type);
        },
        viewed: function (e) {
            console.log(e.type);
        }
    }).viewer(options);

    // Animate TypeText
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 90000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    };
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 4px solid #000000}";
        document.body.appendChild(css);
    };

    // Slideshow Slides
    $('.slideshow-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 400,
        mouseDrag: false,
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
    });

    // Feedback Slides
    $('.feedback-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: false,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
    });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Tabs
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
        tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } 
            else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } 
            else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // Products Details Image Slider
    $('.slickslide').slick({
        dots: true,
        speed: 500,
        fade: false,
        slide: 'li',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            },
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            }
        }],
        customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }
    });
    
    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
        $('.accordion-content').not($(this).next()).slideUp('fast');
        $('.accordion-title').not($(this)).removeClass('active');		
    });
    
    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } 
        else {
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } 
        else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Go to Top
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });  
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  0);
    });

    // Health Coaching Banner Slides
    $('.health-coaching-banner-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
    });

    // Feedback Slides
    $('.feedback-slides-two').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
    });

    // Gym Home Slides
    $('.gym-home-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    });
    $(".gym-home-slides").on("translate.owl.carousel", function(){
        $(".gym-banner-content .sub-title").removeClass("animated fadeInDown").css("opacity", "0");
        $(".gym-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".gym-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".gym-banner-content .default-btn").removeClass("animated fadeInLeft").css("opacity", "0");
    });
    $(".gym-home-slides").on("translated.owl.carousel", function(){
        $(".gym-banner-content .sub-title").addClass("animated fadeInDown").css("opacity", "1");
        $(".gym-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".gym-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".gym-banner-content .default-btn").addClass("animated fadeInLeft").css("opacity", "1");
    });

    // Preloader JS
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});

    // Testimonials Wrap Slides
    $('.testimonials-wrap-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        stagePadding: 50,

        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            576: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            1200: {
                items: 3,
            }
        }
    });

    // Buy Now Btn
    $('body').append("<a href='https://1.envato.market/ODWeG' class='buy-now-btn' target='_blank'>Buy Now</a>");

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('raque_theme', themeName);
	document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('raque_theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}
// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('raque_theme') === 'theme-dark') {
		setTheme('theme-dark');
		document.getElementById('slider').checked = false;
	} else {
		setTheme('theme-light');
	  document.getElementById('slider').checked = true;
	}
})();