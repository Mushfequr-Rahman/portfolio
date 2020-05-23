/*!
 * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

window.onload = function() {
    console.log("Window loaded")

    $('.col').hover(
        function() {
            $(this).animate({
                marginTop: "-=1%",
            }, 200);
        },
        function() {
            $(this).animate({
                marginTop: "0%",
            }, 200);
        }
    )





    $("#LoveL-img").hover(
        function() {
            console.log("Inside hover")
            $(this).attr("src", "assets/gif/LoveL.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/LoveL.png")
        }
    );

    $("#tfv-img").hover(
        // console.log("Inside on hover");
        function() {
            console.log("Inside hover")
            $(this).attr("src", "assets/gif/tfh.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/tfh.png")
        }
    );

    $("#chatsapp-img").hover(
        // console.log("Inside on hover");

        function() {
            $(this).attr("src", "assets/gif/chatsapp.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/chatsapp.png")
        }
    );

    $("#wha-img").hover(
        function() {
            $(this).attr("src", "assets/gif/wha.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/wha.png")
        }
    );

    $("#notetakr-img").hover(
        function() {
            $(this).attr("src", "assets/gif/notetakr.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/notetakr.png")
        }
    );

    $("#scanner-img").hover(
        function() {
            $(this).attr("src", "assets/gif/scanner.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/scanner.jpg")
        }
    );

    $("#fifa-img").hover(
        function() {
            $(this).attr("src", "assets/gif/fifa.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/fifa.jpg")
        }
    );

    $("#mot-img").hover(
        function() {
            $(this).attr("src", "assets/gif/MOT.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/mot.jpg")
        }
    );

    $("#fs-img").hover(
        function() {
            $(this).attr("src", "assets/gif/fs.gif")
            console.log("On Hover pressed")
        },
        function() {
            $(this).attr("src", "assets/img/omniglot.png")
        }
    );
}