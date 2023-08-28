/* =====================================================
Template Name   : Cryptox
Description     : ICO Cryptocurrency HTML5 Template
Author          : Themesland
Version         : 1.1
=======================================================*/

(function($) {
    "use strict";

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }



    // data-background    
    $(document).on('ready', function() {
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();


    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider').on('change.owl.carousel', function(event) {
        new WOW().init();
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // case-slider
    $('.case-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



    // preloader
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function() {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // progress bar
    $(document).ready(function() {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function() {
                var Self = $(this);
                Self.appear(function() {
                    var progressValue = Self.data('value');
                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 1000);
                });
            })
        }
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).scroll(function() {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // countdown
    if ($('.countdown').length) {
        $('.countdown').countdown('2030/01/30', function(event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }

    // date

    let date = new Date().getFullYear();
    $("#date").html(date);


    // project filter
    $(window).on('load', function() {
        if ($(".filter-box").children().length > 0) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: 1
                },
            });

            $('.filter-btns').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({
                    filter: filterValue
                });
            });

            $(".filter-btns li").each(function() {
                $(this).on("click", function() {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });



    // chart1
    if (jQuery('#chart1').length > 0) {
        const ctx = document.getElementById('chart1').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Uniswap', 'Foundations', 'Staking Reward', 'Burn', 'Exchange & Liquidity'],
                datasets: [{
                    label: '# of Votes',
                    data: [80, 5, 5, 5, 5],
                    backgroundColor: [
                        '#ae31d9',
                        '#4fc489',
                        '#0ba1d6',
                        '#ffc107',
                        '#fd7e14',

                    ],
                    borderWidth: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }


    // chart2
    if (jQuery('#chart2').length > 0) {
        const ctx = document.getElementById('chart2').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Auto Liqudity', 'Development', 'Marketing'],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 3, 5],
                    backgroundColor: [
                        '#ae31d9',
                        '#4fc489',
                        '#0ba1d6',

                    ],
                    borderWidth: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }



    // horizontal timeline
    if (jQuery('.timeline').length > 0) {
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 767,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            visibleItems: 4
        });
    }




})(jQuery);