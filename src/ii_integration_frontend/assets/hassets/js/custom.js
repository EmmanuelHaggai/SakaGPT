/*** =====================================
         * -Emmanuel Haggai Technologies Default Custom JS
         * =====================================***/
(function ($) {
    'use strict';

    $(window).on('load', function(){
        $('.spinner').delay('300').fadeOut(2000);
        $('.header_svg_home').delay('500').addClass('active');
    });

    $(document).on('ready', function () {

        /*** =====================================
         * -02 Header Slider
         * =====================================***/
        if($(".scroll_fixed").length) {
            const nav = document.querySelector('.scroll_fixed');
            const topOfNav = nav.offsetTop;

            function fixNav() {
                if (window.scrollY >= topOfNav) {
                    document.body.style.paddingTop = nav.offsetHeight + 'px';
                    document.body.classList.add('fixed-nav');
                } else {
                    document.body.style.paddingTop = 0;
                    document.body.classList.remove('fixed-nav');
                }
            }

            window.addEventListener('scroll', fixNav);
        }

        /*** =====================================
         * -03 Fixed Nav
         * =====================================***/
         if($(".scrolling_fixed").length) {
             $(window).bind('scroll', function () {
                 if ($(window).scrollTop() > 1) {
                     $('.scrolling_fixed').addClass('fixed');
                 } else {
                     $('.scrolling_fixed').removeClass('fixed');
                 }
             });
         }

        /*** =====================================
         * -04 Toggle Nav Menu
         * =====================================***/
        $(document).on('click','.main_menu_area .navbar-nav li > .menu_icon:not(:only-child)', function (e) {
            $(this).siblings('.highlight_dropdown').toggle();
            $('.highlight_dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $(document).on('click', '.main_menu_area .navbar-toggles', function () {
            $(".header_area .main_menu_area .collapse_responsive").toggleClass('active');
        });
        $(document).on('click', '.header_area .main_menu_area .collapse_responsive .close_menu_area_btn', function () {
            $(".header_area .main_menu_area .collapse_responsive").removeClass('active');
        });

        /*** =====================================
         * -05 Lightbox
         * =====================================***/
        if($(".lightbox").length) {
            $('.lightbox').topbox({
                effect: 'fade',
            });
        }

        /*** =====================================
         * -06 CounterUP
         * =====================================***/
         if($(".counterup").length) {
             $('.counterup').counterUp({
                 delay: 10,
                 time: 3000
             });
         }

        /*** =====================================
         * -07 Custom Radio Button
         * =====================================***/
         if($(".custom_radio_btn").length) {
            $(document).on('click', '.custom_radio_btn.radio_1 li', function () {
                $(".custom_radio_btn.radio_1 li").removeClass('active');
                $(this).addClass('active');
            });
            $(document).on('click', '.custom_radio_btn.radio_3 li', function () {
                $(".custom_radio_btn.radio_3 li").removeClass('active');
                $(this).addClass('active');
            });
            $(document).on('click', '.custom_radio_btn.radio_2 li', function () {
                $(".custom_radio_btn.radio_2 li").removeClass('active');
                $(this).addClass('active');
            });
         }

        /*** =====================================
         * -08 Header Sliders
         * =====================================***/
         if($(".header_slider").length) {
             $('.header_slider').owlCarousel({
                 items: 1,
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: false,
                 dots: false,
                 slideSpeed: 1000,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 autoplayTimeout: 7000,
             });
         }
         if($(".header_slider_style_2").length) {
             $('.header_slider_style_2').owlCarousel({
                 items: 1,
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: true,
                 navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                 dots: false,
                 slideSpeed: 1000,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 autoplayTimeout: 7000,
             });
         }

        /*** =====================================
         * -09 Testimonial Slider
         * =====================================***/
         if($(".testimonial_sliders").length) {
             $('.testimonial_sliders').owlCarousel({
                 items: 1,
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: false,
                 dots: true,
                 slideSpeed: 1000,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 autoplayTimeout: 6000,
             });
         }

        /*** =====================================
         * -10 Service Slider
         * =====================================***/
         if($(".service_slider").length) {
             $('.service_slider').owlCarousel({
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: true,
                 navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                 autoplayTimeout: 4000,
                 dots: false,
                 margin: 30,
                 responsive: {
                     0: {
                         items: 1,
                     },
                     600: {
                         items: 1,
                     },
                     1000: {
                         items: 3,
                     }
                 }
             });
         }

        /*** =====================================
         * -11 Clients Logos
         * =====================================***/
         if($(".client_slider").length) {
             $('.client_slider').owlCarousel({
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: false,
                 autoplayTimeout: 3000,
                 dots: false,
                 responsive: {
                     0: {
                         items: 1,
                     },
                     600: {
                         items: 3,
                     },
                     1000: {
                         items: 5,
                     }
                 }
             });
         }


        /*** =====================================
         * -12 Google Maps
         * =====================================***/
         if($("#map").length) {
             initMap('map', 40.712776, -74.005974, 'assets/images/map-marker.png');
         }
         if($("#map_style_two").length) {
             initMap('map', 40.717499, -74.044113, 'assets/images/map-marker.png');
         }

    });


})(jQuery);