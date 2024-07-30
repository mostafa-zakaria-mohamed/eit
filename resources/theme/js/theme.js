$(document).ready(function() {

    // $(window).scroll(function(){
    //     if ($(window).scrollTop() >= 120) {
    //         $('header').addClass('fixed-top');
    //         $('.logo').addClass('hide');
    //         $('.logo-w').removeClass('hide');
    //         $('.logo-w').addClass('show');
    //     }
    //     else {
    //         $('header').removeClass('fixed-top');
    //         $('.logo').removeClass('hide');
    //         $('.logo-w').removeClass('show');
    //         $('.logo-w').addClass('hide');
    //     }
    // });

    // Hero Slider
    var swiper = new Swiper(".heroSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Service Slider
    var swiper = new Swiper(".serviceSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
        },
    });


    // Latest Project Slider
    var swiper = new Swiper(".projectSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
        },
    });


    // Partner Slider
    var swiper = new Swiper(".partnerSwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            },
        },
    });

    // banner Slider
    var swiper = new Swiper(".bannerSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
            slidesPerView: 1,
            spaceBetween: 10,
            },
            768: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
        },
    });

    // Stats Counter
    var a = 0;
    $(window).scroll(function () {
    var oTop = $(".stats-wrapper").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });

        a = 1;

    }
    });
    
    // Banner Image Slider
    var swiper = new Swiper(".bannerSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});

